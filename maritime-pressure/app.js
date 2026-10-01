/* All views read the same checksummed, complete-month publication export. */
(() => {
  'use strict';
  const D = window.MARITIME_DATA;
  const $ = id => document.getElementById(id);
  if (!D || !window.d3 || !window.lucide || !window.MARITIME_GEOMETRY) {
    $('app-error').hidden = false;
    $('app-error').textContent = 'The dashboard assets could not be loaded. The paper and data downloads remain available.';
    return;
  }
  const colors = { national: '#267d78', energy: '#ba662a', nonenergy: '#267d78',
    BAB_MANDEB: '#346797', PANAMA: '#a78630', HORMUZ: '#ba662a', SUEZ: '#658b86',
    GIBRALTAR: '#859aa5', MALACCA: '#718a58', DOVER: '#987f92', TAIWAN_STR: '#858d92' };
  const months = D.months;
  const fmt = d3.format('.2f');
  const fmtPoint = value => value > 0 && value < .005 ? '<0.01' : fmt(value);
  const fmtValue = value => value === 0 ? '$0' : value >= 1e9 ? d3.format('$.2f')(value / 1e9) + 'bn' : d3.format('$.3s')(value);
  const pct = d3.format('.1%');
  const monthLabel = m => d3.utcFormat('%b %Y')(new Date(m + '-01T00:00:00Z'));
  const date = m => new Date(m + '-01T00:00:00Z');
  const views = ['national', 'gates', 'products', 'ports', 'methods'];
  const params = new URLSearchParams(location.hash.slice(1));
  const state = { view: views.includes(params.get('view')) ? params.get('view') : 'national',
    month: months.includes(params.get('month')) ? params.get('month') : D.meta.lastMonth,
    start: months.includes(params.get('from')) ? params.get('from') : months[0],
    end: months.includes(params.get('to')) ? params.get('to') : months.at(-1),
    gateMetric: 'contribution', vesselClass: 'container', gate: 'BAB_MANDEB',
    productMetric: 'contribution', product: 'Apparel and footwear', region: 'All', sort: 'contribution', sortDirection: -1 };
  if (state.start >= state.end) { state.start = months[0]; state.end = months.at(-1); }
  const gateIds = D.gateLocations.map(r => r.id);
  const gateLabel = id => D.gateLocations.find(r => r.id === id).label;
  const productIds = [...new Set(D.products.map(r => r.id))];
  const tooltip = $('tooltip');
  let timer;

  function tip(event, title, lines) {
    tooltip.replaceChildren();
    const head = document.createElement('strong'); head.textContent = title; tooltip.append(head);
    lines.forEach(line => { const el = document.createElement('div'); el.textContent = line; tooltip.append(el); });
    tooltip.hidden = false;
    const box = tooltip.getBoundingClientRect();
    tooltip.style.left = Math.max(8, Math.min(innerWidth - box.width - 8, event.clientX + 13)) + 'px';
    tooltip.style.top = Math.max(8, Math.min(innerHeight - box.height - 8, event.clientY + 13)) + 'px';
  }
  function hideTip() { tooltip.hidden = true; }
  function options(id, values, label = x => x) {
    $(id).replaceChildren(...values.map(value => new Option(label(value), value)));
  }
  function syncHash() {
    const hash = new URLSearchParams({view: state.view, month: state.month, from: state.start, to: state.end});
    history.replaceState(null, '', '#' + hash);
  }
  function setMonth(month) {
    if (!months.includes(month)) return;
    state.month = month;
    if (month < state.start || month > state.end) { state.start = months[0]; state.end = months.at(-1); }
    $('focus-month').value = month;
    $('range-start').value = state.start; $('range-end').value = state.end;
    render(); syncHash();
  }
  function setView(view) {
    if (!views.includes(view)) return;
    state.view = view;
    document.querySelectorAll('[data-view]').forEach(button => {
      const selected = button.dataset.view === view;
      button.setAttribute('aria-selected', selected); button.tabIndex = selected ? 0 : -1;
      $('view-' + button.dataset.view).hidden = !selected;
    });
    hideTip(); render(); syncHash();
  }
  function chart(id, label, margins = {top: 20, right: 22, bottom: 30, left: 40}) {
    const el = $(id); const width = el.clientWidth; const height = el.clientHeight;
    d3.select(el).selectAll('*').remove();
    const svg = d3.select(el).append('svg').attr('viewBox', `0 0 ${width} ${height}`).attr('role', 'img').attr('aria-label', label);
    svg.append('title').text(label);
    return {svg, width, height, margins, innerWidth: width - margins.left - margins.right,
      innerHeight: height - margins.top - margins.bottom,
      g: svg.append('g').attr('transform', `translate(${margins.left},${margins.top})`)};
  }
  function axis(g, scale, width, height, isTime = false) {
    const ticks = Math.max(2, Math.min(5, Math.floor(width / 100)));
    g.append('g').call(d3.axisLeft(scale).ticks(4).tickSize(-width).tickFormat(d3.format('~g')))
      .call(group => { group.select('.domain').remove(); group.selectAll('.tick line').attr('stroke', '#eaf0ee'); group.selectAll('.tick text').attr('dx', -3); });
    if (isTime) return ticks;
  }
  function timeChart(id, series, label, {selected = true, events = false, field = 'value', start = state.start, end = state.end} = {}) {
    const c = chart(id, label);
    const list = series.map(s => ({...s, rows: s.rows.filter(r => r.month >= start && r.month <= end)}));
    const all = list.flatMap(s => s.rows);
    const x = d3.scaleUtc().domain([date(start), date(end)]).range([0, c.innerWidth]);
    const max = d3.max(all, r => r[field]) || 1;
    const y = d3.scaleLinear().domain([0, max * 1.12]).nice().range([c.innerHeight, 0]);
    const ticks = axis(c.g, y, c.innerWidth, c.innerHeight, true);
    c.g.append('g').attr('transform', `translate(0,${c.innerHeight})`).call(d3.axisBottom(x).ticks(ticks).tickSize(0).tickPadding(12).tickFormat(d3.utcFormat('%Y'))).call(g => g.select('.domain').attr('stroke', '#dfe5e4'));
    if (events) {
      [['2024-01', 'Red Sea'], ['2026-03', 'Hormuz']].forEach(([month, name]) => {
        if (month < start || month > end) return;
        const px = x(date(month));
        c.g.append('line').attr('x1', px).attr('x2', px).attr('y1', 0).attr('y2', c.innerHeight).attr('stroke', '#a7b2b1').attr('stroke-dasharray', '4 5');
        c.g.append('text').attr('x', px - 5).attr('y', 1).attr('text-anchor', 'end').text(name);
      });
    }
    const line = d3.line().x(r => x(date(r.month))).y(r => y(r[field]));
    list.forEach(s => c.g.append('path').datum(s.rows).attr('fill', 'none').attr('stroke', s.color).attr('stroke-width', id === 'national-chart' ? 2.6 : 2.1).attr('d', line));
    if (selected && state.month >= start && state.month <= end) {
      const px = x(date(state.month));
      c.g.append('line').attr('x1', px).attr('x2', px).attr('y1', 0).attr('y2', c.innerHeight).attr('stroke', '#b1c7c3').attr('stroke-dasharray', '2 4');
      list.forEach(s => {
        const row = s.rows.find(r => r.month === state.month);
        if (row) c.g.append('circle').attr('cx', px).attr('cy', y(row[field])).attr('r', 4).attr('fill', s.color).attr('stroke', 'white').attr('stroke-width', 1.5);
      });
    }
    const hover = c.g.append('line').attr('stroke', '#8aa4a1').attr('y1', 0).attr('y2', c.innerHeight).attr('visibility', 'hidden');
    const visibleMonths = months.filter(m => m >= start && m <= end);
    function nearest(event) {
      const px = d3.pointer(event)[0]; const t = +x.invert(px);
      return visibleMonths.reduce((a, b) => Math.abs(+date(a) - t) < Math.abs(+date(b) - t) ? a : b);
    }
    c.g.append('rect').attr('width', c.innerWidth).attr('height', c.innerHeight).attr('fill', 'transparent').style('cursor', 'crosshair')
      .on('pointermove', event => {
        const month = nearest(event); hover.attr('x1', x(date(month))).attr('x2', x(date(month))).attr('visibility', 'visible');
        tip(event, monthLabel(month), list.map(s => `${s.label}: ${fmt(s.rows.find(r => r.month === month)[field])} points`));
      }).on('pointerleave', () => { hideTip(); hover.attr('visibility', 'hidden'); }).on('click', event => setMonth(nearest(event)));
    return c;
  }
  function barChart(id, rows, label, field = 'contribution', color = colors.national) {
    const mobile = $(id).clientWidth < 430;
    const c = chart(id, label, {top: 8, right: 45, bottom: 27, left: mobile ? 132 : 166});
    const sorted = [...rows].sort((a, b) => b[field] - a[field]);
    const x = d3.scaleLinear().domain([0, (d3.max(sorted, r => r[field]) || 1) * 1.07]).nice().range([0, c.innerWidth]);
    const y = d3.scaleBand().domain(sorted.map(r => r.id)).range([0, c.innerHeight]).padding(.38);
    c.g.append('g').attr('transform', `translate(0,${c.innerHeight})`).call(d3.axisBottom(x).ticks(3).tickSize(-c.innerHeight).tickFormat(d3.format('~g'))).call(g => { g.select('.domain').remove(); g.selectAll('.tick line').attr('stroke', '#eaf0ee'); });
    const row = c.g.selectAll('.bar-row').data(sorted).join('g').attr('class', 'bar-row').attr('transform', r => `translate(0,${y(r.id)})`);
    row.append('rect').attr('width', r => x(r[field])).attr('height', y.bandwidth()).attr('fill', r => typeof color === 'function' ? color(r) : color);
    const short = name => ({'Chemicals, pharma, plastics': 'Chemicals / pharma', 'Machinery and electronics': 'Machinery / electronics',
      'Other manufactures and special': 'Other manufactures', 'Materials and metals': 'Materials / metals'}[name] || name);
    row.append('text').attr('x', -9).attr('y', y.bandwidth() / 2).attr('dy', '.35em').attr('text-anchor', 'end').text(r => short(r.label));
    row.append('text').attr('x', r => x(r[field]) + 6).attr('y', y.bandwidth() / 2).attr('dy', '.35em').attr('fill', '#252b2c').text(r => fmt(r[field]));
    row.append('rect').attr('x', -c.margins.left).attr('width', c.width).attr('height', y.step()).attr('fill', 'transparent')
      .on('pointermove', (event, r) => tip(event, r.label, [`${monthLabel(state.month)}: ${fmt(r[field])} points`, ...(r.share === undefined ? [] : [`Share of vessel-import basket: ${pct(r.share)}`])]))
      .on('pointerleave', hideTip).on('click', (_, r) => { if (state.view === 'products') { state.product = r.id; $('product-selected').value = r.id; render(); } else { state.gate = r.id; $('gate-selected').value = r.id; if (state.view === 'national') setView('gates'); else render(); } });
  }
  function heatmap(id, rows, ids, label, field, getLabel) {
    const mobile = $(id).clientWidth < 600;
    const c = chart(id, label, {top: 10, right: 8, bottom: 58, left: mobile ? 123 : 184});
    const x = d3.scaleBand().domain(months).range([0, c.innerWidth]).paddingInner(.06);
    const y = d3.scaleBand().domain(ids).range([0, c.innerHeight]).paddingInner(.12);
    const max = d3.max(rows, r => r[field]) || 1;
    const color = d3.scaleSequential(d3.interpolateRgb('#edf3f3', '#185a7d')).domain([0, max]);
    ids.forEach(key => c.g.append('text').attr('x', -8).attr('y', y(key) + y.bandwidth() / 2).attr('text-anchor', 'end').attr('dy', '.35em')
      .style('font-size', mobile ? '9px' : '11px').text(getLabel(key).replace('Chemicals, pharma, plastics', 'Chemicals / pharma').replace('Machinery and electronics', 'Machinery / electronics').replace('Other manufactures and special', 'Other manufactures')));
    c.g.selectAll('.heat-cell').data(rows).join('rect').attr('class', 'heat-cell').attr('x', r => x(r.month)).attr('y', r => y(r.id)).attr('width', x.bandwidth()).attr('height', y.bandwidth()).attr('fill', r => color(r[field]))
      .on('pointermove', (event, r) => tip(event, getLabel(r.id), [`${monthLabel(r.month)}: ${fmt(r[field])} points`])).on('pointerleave', hideTip)
      .on('click', (_, r) => { state.month = r.month; if (id === 'gate-heatmap') { state.gate = r.id; $('gate-selected').value = r.id; } else { state.product = r.id; $('product-selected').value = r.id; } setMonth(r.month); });
    months.filter(m => m.endsWith('-01')).forEach(m => c.g.append('text').attr('x', x(m)).attr('y', c.innerHeight + 19).text(m.slice(0, 4)));
    const selected = x(state.month);
    c.g.append('rect').attr('x', selected - 1).attr('y', -2).attr('width', x.bandwidth() + 2).attr('height', c.innerHeight + 4).attr('fill', 'none').attr('stroke', '#687375').attr('stroke-width', .8).attr('pointer-events', 'none');
    const legendWidth = Math.min(150, c.innerWidth * .5); const defs = c.svg.append('defs');
    const gradient = defs.append('linearGradient').attr('id', id + '-gradient');
    [0, .5, 1].forEach(v => gradient.append('stop').attr('offset', v * 100 + '%').attr('stop-color', color(max * v)));
    c.g.append('rect').attr('x', 0).attr('y', c.innerHeight + 35).attr('width', legendWidth).attr('height', 5).attr('fill', `url(#${id}-gradient)`);
    c.g.append('text').attr('class', 'heat-legend').attr('x', legendWidth + 8).attr('y', c.innerHeight + 41).text(`0 to ${fmt(max)} points`);
  }
  function metrics() {
    const row = D.national.find(r => r.month === state.month);
    const previous = D.national[months.indexOf(state.month) - 1];
    const leading = D.gates.filter(r => r.month === state.month).sort((a, b) => b.contribution - a.contribution)[0];
    $('current-month').textContent = monthLabel(state.month);
    $('current-value').textContent = fmt(row.value);
    $('monthly-change').textContent = previous ? d3.format('+.2f')(row.value - previous.value) : 'n/a';
    $('leading-gate').textContent = leading.label;
    $('leading-gate-share').textContent = `${fmt(leading.contribution)} points / ${pct(leading.contribution / row.value)} of total`;
    document.querySelectorAll('[data-month]').forEach(b => {const active = b.dataset.month === state.month; b.classList.toggle('active', active); b.setAttribute('aria-pressed', active);});
    $('latest-month').classList.toggle('active', state.month === D.meta.lastMonth);
    $('latest-month').setAttribute('aria-pressed', state.month === D.meta.lastMonth);
  }
  function drawGateMap() {
    const c = chart('gate-map', 'Locations of the eight monitored maritime chokepoints', {top: 0, left: 0, bottom: 0, right: 0});
    const projection = d3.geoNaturalEarth1().fitExtent([[5, 5], [c.width - 5, c.height - 5]], window.MARITIME_GEOMETRY.world);
    const path = d3.geoPath(projection);
    c.svg.append('g').selectAll('path').data(window.MARITIME_GEOMETRY.world.features).join('path').attr('d', path).attr('fill', '#e4ebed').attr('stroke', 'white').attr('stroke-width', .5);
    const dots = c.svg.append('g').selectAll('g').data(D.gateLocations).join('g').attr('transform', r => `translate(${projection([r.lon, r.lat])})`);
    dots.append('circle').attr('r', r => r.id === state.gate ? 5.5 : 3).attr('fill', r => r.id === state.gate ? colors.HORMUZ : colors.national).attr('stroke', 'white').attr('stroke-width', 1);
    dots.append('circle').attr('r', 10).attr('fill', 'transparent').style('cursor', 'pointer').on('pointermove', (event, r) => tip(event, r.label, [r.id === state.gate ? 'Selected chokepoint' : 'Monitored chokepoint'])).on('pointerleave', hideTip).on('click', (_, r) => {state.gate = r.id; $('gate-selected').value = r.id; render();});
    const active = D.gateLocations.find(r => r.id === state.gate); const point = projection([active.lon, active.lat]);
    c.svg.append('text').attr('x', point[0] + 8).attr('y', point[1] - 10).attr('fill', '#252b2c').style('font-weight', '600').text(active.label);
  }
  function portRows() {
    const query = $('port-search').value.trim().toLowerCase();
    return D.ports.filter(r => r.month === state.month && (state.region === 'All' || r.region === state.region) && (!query || r.label.toLowerCase().includes(query)))
      .sort((a, b) => {
        if (a[state.sort] === null) return b[state.sort] === null ? a.label.localeCompare(b.label) : 1;
        if (b[state.sort] === null) return -1;
        return state.sortDirection * (a[state.sort] - b[state.sort]) || a.label.localeCompare(b.label);
      });
  }
  function portTable() {
    const matches = portRows();
    const leaders = new Set([...matches].sort((a, b) => b.contribution - a.contribution || a.label.localeCompare(b.label)).slice(0, 30).map(r => r.id));
    const rows = matches.filter(r => leaders.has(r.id));
    const national = D.national.find(r => r.month === state.month).value;
    const total = d3.sum(rows, r => r.contribution);
    const count = matches.length > rows.length ? `Top ${rows.length} of ${matches.length} gateways` : `${rows.length} matching gateways`;
    $('port-table-count').textContent = `${count} / ${fmt(total)} of ${fmt(national)} national points (${pct(total / national)})`;
    const body = $('port-table').querySelector('tbody'); body.replaceChildren();
    rows.forEach(r => {
      const tr = document.createElement('tr');
      tr.dataset.gateway = r.id;
      [r.label, fmtPoint(r.contribution), r.pressure === null ? 'n/a' : fmtPoint(r.pressure), fmtValue(r.assignedValue), r.region].forEach((value, i) => {
        const td = document.createElement('td'); td.textContent = value;
        if (i === 0 && r.domain !== 'ocean') {const detail = document.createElement('span'); detail.className = 'port-domain'; detail.textContent = 'Inland / Great Lakes gateway'; td.append(detail);}
        if (i === 0 && r.assignedValue === 0) {const detail = document.createElement('span'); detail.className = 'port-domain'; detail.textContent = 'No assigned imports in this basket'; td.append(detail);}
        tr.append(td);
      });
      body.append(tr);
    });
    if (!rows.length) {const tr = document.createElement('tr'); const td = document.createElement('td'); td.colSpan = 5; td.className = 'empty-row'; td.textContent = 'No gateways match this selection.'; tr.append(td); body.append(tr);}
    $('port-table').querySelectorAll('[data-sort]').forEach(button => button.closest('th').setAttribute('aria-sort', button.dataset.sort === state.sort ? (state.sortDirection === -1 ? 'descending' : 'ascending') : 'none'));
  }
  function drawPortMap() {
    const rows = D.ports.filter(r => r.month === state.month && (state.region === 'All' || r.region === state.region));
    const c = chart('port-map', 'U.S. gateway contributions and assigned-route pressure', {top: 0, right: 0, bottom: 0, left: 0});
    const bounds = {'All': [-126, -66, 24, 50], 'East Coast': [-83, -66, 25, 46], 'Gulf Coast': [-99, -80, 24, 32], 'West Coast': [-128, -113, 31, 50], 'Great Lakes / inland': [-96, -70, 39, 50], 'Noncontiguous': [-180, -60, 15, 72]}[state.region];
    const center = [(bounds[0] + bounds[1]) / 2, (bounds[2] + bounds[3]) / 2];
    const projection = d3.geoMercator().center(center).scale(1).translate([0, 0]);
    const p0 = projection([bounds[0], bounds[2]]); const p1 = projection([bounds[1], bounds[3]]);
    projection.scale(Math.min((c.width - 30) / Math.abs(p1[0] - p0[0]), (c.height - 28) / Math.abs(p1[1] - p0[1]))).translate([c.width / 2, c.height / 2]);
    const path = d3.geoPath(projection);
    c.svg.append('g').selectAll('path').data(window.MARITIME_GEOMETRY.world.features).join('path').attr('d', path).attr('fill', '#e8eeee').attr('stroke', '#c9d5d8').attr('stroke-width', .6);
    c.svg.append('g').selectAll('path').data(window.MARITIME_GEOMETRY.states.features).join('path').attr('d', path).attr('fill', '#f2f5f4').attr('stroke', '#bccbd0').attr('stroke-width', .6);
    const maxContribution = d3.max(D.ports, r => r.contribution);
    const maxPressure = Math.ceil(d3.max(D.ports, r => r.pressure) / 10) * 10;
    const radius = d3.scaleSqrt().domain([0, maxContribution]).range([0, c.width < 600 ? 15 : 26]);
    const color = d3.scaleSequential(d3.interpolateRgb('#d8e7e8', '#19577a')).domain([0, maxPressure]);
    const plotted = rows.filter(r => r.lon >= bounds[0] && r.lon <= bounds[1] && r.lat >= bounds[2] && r.lat <= bounds[3] && (r.domain === 'ocean' || state.region === 'Great Lakes / inland'));
    const groups = c.svg.append('g').selectAll('g').data([...plotted].sort((a, b) => b.contribution - a.contribution)).join('g').attr('transform', r => `translate(${projection([r.lon, r.lat])})`);
    groups.append('circle').attr('r', r => r.contribution > 0 ? radius(r.contribution) : 2).attr('fill', r => r.contribution > 0 ? color(r.pressure) : 'white').attr('stroke', r => r.contribution > 0 ? 'white' : '#829598').attr('stroke-width', 1.2).attr('opacity', .94);
    groups.append('circle').attr('r', r => Math.max(7, radius(r.contribution))).attr('fill', 'transparent').on('pointermove', (event, r) => tip(event, r.label, [`Contribution: ${fmtPoint(r.contribution)} national points`, `Assigned-route pressure: ${r.pressure === null ? 'not available; no assigned imports in this basket' : fmtPoint(r.pressure) + ' points'}`, `Assigned import value: ${fmtValue(r.assignedValue)}`, r.region])).on('pointerleave', hideTip);
    const labels = [...plotted].sort((a, b) => b.contribution - a.contribution).filter(r => r.contribution > 0).slice(0, c.width < 600 ? 3 : 5);
    const placed = [];
    labels.forEach(r => {
      const p = projection([r.lon, r.lat]); let ty = p[1] - radius(r.contribution) - 9;
      while (placed.some(v => Math.abs(v.x - p[0]) < 150 && Math.abs(v.y - ty) < 18)) ty -= 19;
      ty = Math.max(18, ty); const tx = Math.max(90, Math.min(c.width - 90, p[0]));
      placed.push({x: tx, y: ty});
      c.svg.append('line').attr('x1', p[0]).attr('y1', p[1]).attr('x2', tx).attr('y2', ty + 3).attr('stroke', '#687375').attr('stroke-dasharray', '2 3').attr('stroke-width', .7);
      c.svg.append('text').attr('x', tx).attr('y', ty).attr('text-anchor', 'middle').attr('paint-order', 'stroke').attr('stroke', '#f3f7f8').attr('stroke-width', 4).attr('stroke-linejoin', 'round').style('fill', '#303b3d').style('font-size', '11px').text(r.label);
    });
    $('port-size-key').textContent = 'Circle areas use one scale across all months; hollow dots denote zero.';
    $('port-color-low').textContent = '0'; $('port-color-high').textContent = maxPressure;
    $('port-map-note').textContent = state.region === 'All'
      ? 'Map shows contiguous coastal gateways; national totals and the full data retain all 99 gateways, including inland and noncontiguous locations.'
      : `${state.region} map. This is a location and exposure view, not an observed voyage map. The national total retains all 99 gateways.`;
  }
  function gateRows() {
    return state.gateMetric === 'contribution' ? D.gates : D.gatePressure.filter(r => r.vesselClass === state.vesselClass);
  }
  function render() {
    metrics(); hideTip();
    const downloadLabel = state.view === 'methods' ? 'Download all dashboard data as JSON' : state.view === 'ports' ? 'Download all matching gateways as CSV' : 'Download current view as CSV';
    $('download-data').title = downloadLabel; $('download-data').setAttribute('aria-label', downloadLabel);
    if (state.view === 'national') {
      timeChart('national-chart', [{label: 'National index', color: colors.national, rows: D.national}], 'National maritime pressure, January 2022 onward', {events: true});
      $('national-gates-period').textContent = `${monthLabel(state.month)} / national index points`;
      barChart('national-gates-chart', D.gates.filter(r => r.month === state.month), 'Chokepoint contributions to the selected national reading', 'contribution', r => colors[r.id]);
      timeChart('energy-chart', ['energy', 'nonenergy'].map(id => ({label: id === 'energy' ? 'Energy imports' : 'Nonenergy imports', color: colors[id], rows: D.energy.filter(r => r.id === id)})), 'Within-group energy and nonenergy maritime pressure', {field: 'pressure'});
    } else if (state.view === 'gates') {
      const contribution = state.gateMetric === 'contribution'; const rows = gateRows(); const field = contribution ? 'contribution' : 'pressure';
      $('vessel-class').disabled = contribution;
      $('gate-unit').textContent = contribution ? 'Contribution to the national index, in points' : '100 times monthly average daily log shortfall; no trade weights';
      $('gate-note').textContent = contribution ? 'Each route is attributed to its most disrupted gate. The eight contributions add to the national index; a pale Suez row need not mean normal Suez traffic.' : 'Container and other-vessel histories are shown separately. Other vessels are not a tanker-only measure. These unweighted gate readings are not additive.';
      heatmap('gate-heatmap', rows, gateIds, 'Monthly chokepoint histories', field, gateLabel);
      timeChart('gate-history', [{label: gateLabel(state.gate), color: colors[state.gate], rows: rows.filter(r => r.id === state.gate)}], `${gateLabel(state.gate)} history`, {field});
      drawGateMap();
    } else if (state.view === 'products') {
      const contribution = state.productMetric === 'contribution'; const field = state.productMetric;
      $('product-unit').textContent = `${monthLabel(state.month)} / ${contribution ? 'national contributions' : 'within-product pressure'}, index points`;
      $('product-note').textContent = contribution ? 'The eight product contributions use the national vessel-import denominator and sum to the national index.' : 'Each product uses its full vessel-import denominator, including unassigned trade. Within-product readings are not additive.';
      barChart('product-ranking', D.products.filter(r => r.month === state.month), 'Product ranking in the selected month', field, r => r.id === state.product ? colors.national : '#8caaa7');
      timeChart('product-history', [{label: state.product, color: colors.national, rows: D.products.filter(r => r.id === state.product)}], `${state.product} history`, {field});
      heatmap('product-heatmap', D.products, productIds, 'Product exposure by month', field, x => x);
    } else if (state.view === 'ports') {drawPortMap(); portTable();}
  }
  function download() {
    if (state.view === 'methods') {
      const a = document.createElement('a'); a.href = 'data.json'; a.download = 'maritime-pressure-data.json'; a.click(); return;
    }
    let rows;
    if (state.view === 'gates') rows = gateRows();
    else if (state.view === 'products') rows = D.products;
    else if (state.view === 'ports') rows = portRows();
    else rows = D.national.filter(r => r.month >= state.start && r.month <= state.end);
    const csv = d3.csvFormat(rows); const blob = new Blob([csv], {type: 'text/csv;charset=utf-8'});
    const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url;
    a.download = `maritime-${state.view}-${D.meta.snapshot}.csv`; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  options('focus-month', months, monthLabel); $('focus-month').value = state.month;
  options('range-start', months.slice(0, -1), monthLabel); $('range-start').value = state.start;
  options('range-end', months.slice(1), monthLabel); $('range-end').value = state.end;
  options('gate-selected', gateIds, gateLabel); $('gate-selected').value = state.gate;
  options('product-selected', productIds); $('product-selected').value = state.product;
  $('release-month').textContent = monthLabel(D.meta.lastMonth);
  $('snapshot-id').textContent = D.meta.snapshot;
  $('retrieved-at').textContent = D.meta.retrievedAt.slice(0, 10);
  $('daily-endpoint').textContent = D.meta.dailyEndpoint;
  $('complete-period').textContent = `${monthLabel(D.meta.firstMonth)} - ${monthLabel(D.meta.lastMonth)} (${D.meta.completeMonths} months)`;
  $('footer-vintage').textContent = `PortWatch snapshot: ${D.meta.retrievedAt.slice(0, 10)}`;
  D.meta.sources.forEach(source => {const a = document.createElement('a'); a.href = source.url; a.textContent = source.label; a.target = '_blank'; a.rel = 'noopener'; $('source-links').append(a);});
  $('focus-month').addEventListener('change', event => setMonth(event.target.value));
  document.querySelectorAll('[data-month]').forEach(b => b.addEventListener('click', () => setMonth(b.dataset.month)));
  $('latest-month').addEventListener('click', () => setMonth(D.meta.lastMonth));
  document.querySelectorAll('[data-view]').forEach(b => {
    b.addEventListener('click', () => setView(b.dataset.view));
    b.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault(); const current = views.indexOf(state.view);
      const index = event.key === 'Home' ? 0 : event.key === 'End' ? views.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + views.length) % views.length;
      setView(views[index]); $('tab-' + views[index]).focus();
    });
  });
  for (const id of ['range-start', 'range-end']) $(id).addEventListener('change', () => {
    state.start = $('range-start').value; state.end = $('range-end').value;
    if (state.start >= state.end) {
      if (id === 'range-start') state.end = months[months.indexOf(state.start) + 1];
      else state.start = months[months.indexOf(state.end) - 1];
      $('range-start').value = state.start; $('range-end').value = state.end;
    }
    if (state.month < state.start || state.month > state.end) {state.month = state.end; $('focus-month').value = state.month;}
    render(); syncHash();
  });
  [['gate-metric', 'gateMetric'], ['vessel-class', 'vesselClass'], ['gate-selected', 'gate'], ['product-metric', 'productMetric'], ['product-selected', 'product'], ['port-region', 'region']].forEach(([id, key]) => $(id).addEventListener('change', event => {state[key] = event.target.value; render();}));
  $('port-search').addEventListener('input', portTable);
  document.querySelectorAll('[data-sort]').forEach(b => b.addEventListener('click', () => {
    if (state.sort === b.dataset.sort) state.sortDirection *= -1; else {state.sort = b.dataset.sort; state.sortDirection = -1;}
    portTable();
  }));
  $('download-data').addEventListener('click', download);
  window.addEventListener('resize', () => {clearTimeout(timer); timer = setTimeout(render, 100);});
  window.addEventListener('hashchange', () => {
    const p = new URLSearchParams(location.hash.slice(1));
    if (months.includes(p.get('month'))) state.month = p.get('month');
    $('focus-month').value = state.month; setView(views.includes(p.get('view')) ? p.get('view') : 'national');
  });
  lucide.createIcons();
  window.MARITIME_DASHBOARD = {state, setMonth, setView, data: D};
  setView(state.view);
})();
