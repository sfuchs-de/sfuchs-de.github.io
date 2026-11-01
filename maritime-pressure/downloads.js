/* Pure selection/serialization functions also exercised outside the browser. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.MaritimeDownloads = factory();
})(typeof window === 'undefined' ? this : window, function () {
  'use strict';
  function rows(data, schema, selection) {
    const spec = schema.datasets[selection.dataset];
    if (!spec) throw new Error('Unknown download dataset');
    const national = new Map(data.national.map(r => [r.month, r]));
    const labels = new Map(data.gateLocations.map(r => [r.id, r.label]));
    if (spec.columns.some(c => c.name === 'month') &&
        (!data.months.includes(selection.start) || !data.months.includes(selection.end) || selection.start > selection.end)) {
      throw new Error('Choose a valid complete-month range');
    }
    const selected = data[spec.key].filter(r => {
      if (r.month && (r.month < selection.start || r.month > selection.end)) return false;
      if (selection.id && r.id !== selection.id) return false;
      if (selection.dataset === 'chokepoint_traffic' && selection.vesselClass && r.vesselClass !== selection.vesselClass) return false;
      if (selection.dataset === 'ports') {
        if (selection.region && selection.region !== 'All' && r.region !== selection.region) return false;
        if (selection.search && !r.label.toLowerCase().includes(selection.search.trim().toLowerCase())) return false;
      }
      return true;
    });
    const result = selected.map(r => {
      const year = Number((r.month || '0000').slice(0, 4));
      const n = national.get(r.month) || {};
      const derived = {'@year': year, '@basketStart': year - 3, '@basketEnd': year - 1,
        '@snapshot': data.meta.snapshot, '@retrieved': data.meta.retrievedAt,
        '@endpoint': data.meta.dailyEndpoint, '@national': n.value, '@denominator': n.denominator,
        '@gateLabel': labels.get(r.id), '@pressureStatus': r.assignedValue === 0 ? 'no_assigned_imports' : 'available'};
      return Object.fromEntries(spec.columns.map(c => {
        const value = c.source.startsWith('@') ? derived[c.source] : r[c.source];
        if (value === undefined || (typeof value === 'number' && !Number.isFinite(value))) throw new Error('Invalid export value: ' + c.name);
        return [c.name, value];
      }));
    });
    const keys = spec.columns.map(c => c.name).filter(k => ['month', 'basket_year', 'chokepoint_id', 'product_id', 'gateway_id', 'import_group_id', 'vessel_class'].includes(k));
    return result.sort((a, b) => {
      for (const key of keys) { const x = String(a[key]), y = String(b[key]); if (x < y) return -1; if (x > y) return 1; }
      return 0;
    });
  }
  function csv(rows, columns, formatRows) {
    if (typeof formatRows !== 'function') throw new Error('CSV formatter unavailable');
    const safe = value => typeof value === 'string' && /^[\s]*[=+\-@]/.test(value) ? "'" + value : value;
    // Format each record separately so embedded newlines remain untouched.
    return '\uFEFF' + [formatRows([columns]), ...rows.map(r => formatRows([columns.map(k => safe(r[k]))]))].join('\r\n') + '\r\n';
  }
  function slug(value) { return String(value).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 55); }
  function filename(data, selection) {
    const parts = ['maritime', selection.dataset.replaceAll('_', '-')];
    if (selection.start) parts.push(selection.start === selection.end ? selection.start : selection.start + '_to_' + selection.end);
    if (selection.id) parts.push(slug(selection.id));
    if (selection.vesselClass) parts.push(slug(selection.vesselClass));
    if (selection.region && selection.region !== 'All') parts.push(slug(selection.region));
    if (selection.search && selection.search.trim()) parts.push('search-' + slug(selection.search));
    parts.push('vintage-' + data.meta.retrievedAt.slice(0, 10));
    return parts.join('-') + '.csv';
  }
  return {rows, csv, filename};
});
