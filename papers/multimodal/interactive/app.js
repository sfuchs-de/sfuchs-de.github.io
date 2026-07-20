(() => {
  "use strict";

  const COLORS = {
    ink: "#151719",
    muted: "#7b8084",
    line: "#d8d9d7",
    navy: "#1b3a63",
    teal: "#197d78",
    orange: "#d26835",
    red: "#a83f3f",
    wash: "#eef3f4",
    white: "#ffffff"
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canvases = {};
  const state = {
    journey: "multimodal",
    roadCost: 0,
    terminalTraffic: 0,
    terminal: "chicago",
    variant: "full",
    policy: "terminal"
  };

  const nodes = {
    seattle: { x: 0.09, y: 0.16, label: "Seattle" },
    losangeles: { x: 0.10, y: 0.72, label: "Los Angeles" },
    denver: { x: 0.31, y: 0.47, label: "Denver" },
    kansascity: { x: 0.45, y: 0.50, label: "Kansas City" },
    chicago: { x: 0.59, y: 0.33, label: "Chicago" },
    memphis: { x: 0.57, y: 0.62, label: "Memphis" },
    houston: { x: 0.48, y: 0.81, label: "Houston" },
    neworleans: { x: 0.61, y: 0.82, label: "New Orleans" },
    atlanta: { x: 0.72, y: 0.66, label: "Atlanta" },
    savannah: { x: 0.79, y: 0.72, label: "Savannah" },
    norfolk: { x: 0.83, y: 0.48, label: "Norfolk" },
    newyork: { x: 0.91, y: 0.28, label: "New York" }
  };

  const edges = [
    ["seattle", "chicago", "rail"],
    ["seattle", "denver", "road"],
    ["losangeles", "denver", "road"],
    ["losangeles", "kansascity", "rail"],
    ["denver", "kansascity", "road"],
    ["denver", "chicago", "rail"],
    ["kansascity", "chicago", "rail"],
    ["kansascity", "memphis", "road"],
    ["losangeles", "houston", "water"],
    ["losangeles", "houston", "road"],
    ["houston", "memphis", "rail"],
    ["houston", "neworleans", "water"],
    ["neworleans", "savannah", "water"],
    ["neworleans", "atlanta", "road"],
    ["memphis", "atlanta", "rail"],
    ["memphis", "chicago", "road"],
    ["chicago", "newyork", "rail"],
    ["chicago", "norfolk", "road"],
    ["atlanta", "savannah", "road"],
    ["atlanta", "norfolk", "rail"],
    ["savannah", "norfolk", "water"],
    ["norfolk", "newyork", "water"],
    ["norfolk", "newyork", "road"]
  ];

  const journeys = {
    multimodal: {
      nodes: ["losangeles", "kansascity", "chicago", "newyork"],
      modes: ["road", "rail", "road"],
      label: "Truck → rail → truck",
      transfers: "2 transfers"
    },
    road: {
      nodes: ["losangeles", "denver", "kansascity", "memphis", "atlanta", "norfolk", "newyork"],
      modes: ["road", "road", "road", "road", "road", "road"],
      label: "Truck throughout",
      transfers: "0 transfers"
    },
    water: {
      nodes: ["losangeles", "houston", "neworleans", "savannah", "norfolk", "newyork"],
      modes: ["water", "water", "water", "water", "road"],
      label: "Ship → truck",
      transfers: "1 transfer"
    }
  };

  const terminalNames = {
    chicago: "Chicago",
    atlanta: "Atlanta",
    losangeles: "Los Angeles"
  };

  const variants = {
    full: {
      value: 100,
      explanation: "The benchmark lets traffic reallocate across routes and modes while accounting for the congestion created by that response.",
      takeaway: "All four mechanisms jointly determine the gain."
    },
    noCongestion: {
      value: 185,
      explanation: "Without road or terminal congestion, induced traffic never slows other users. The same highway improvement therefore appears much more valuable.",
      takeaway: "Ignoring congestion overstates welfare gains by 85%."
    },
    roadOnly: {
      value: 78,
      explanation: "A single-mode model suppresses diversion toward rail and waterways, eliminating alternatives that reinforce the improved corridor and relieve other links.",
      takeaway: "Ignoring multimodal flexibility understates gains by 22%."
    },
    fixedRoutes: {
      value: 78,
      explanation: "When routes remain fixed, freight cannot exploit new continuations around the improved link. The resulting understatement is similar to removing mode choice.",
      takeaway: "Most of the useful rerouting response occurs across modes."
    }
  };

  const policies = {
    terminal: {
      kicker: "Infrastructure",
      name: "Improve an intermodal terminal",
      description: "Lower switching costs at one of 228 ports or inland terminals. Central interior hubs generate especially large gains because they connect coastal gateways to many inland routes.",
      gdpLabel: "Terminals tested",
      gdp: "228",
      environment: "+$17–$214M",
      road: 37,
      rail: 78,
      water: 58,
      mapLabel: "Lower switching costs at a central terminal",
      note: "Ranges reflect heterogeneous terminal locations. Positive environmental values denote benefits from cleaner modal substitution."
    },
    rail: {
      kicker: "Disruption",
      name: "Shut down the rail network",
      description: "Freight diverts toward roads and waterways, but those alternatives cannot fully replace rail. Congestion rises and market access falls throughout the economy.",
      gdpLabel: "Real GDP",
      gdp: "−$230B",
      environment: "−$12B",
      road: 94,
      rail: 0,
      water: 71,
      mapLabel: "Rail disappears; road and water absorb part of the traffic",
      note: "The environmental value is negative because displaced rail freight shifts primarily toward more emissions-intensive trucking."
    },
    jones: {
      kicker: "Policy",
      name: "Repeal the Jones Act",
      description: "Allowing cheaper foreign-built and foreign-operated ships on domestic routes reduces water-transport costs and redirects freight toward coastal and inland waterways.",
      gdpLabel: "Real GDP",
      gdp: "+$3.2B",
      environment: "+$0.2B",
      road: 31,
      rail: 41,
      water: 95,
      mapLabel: "Cheaper domestic shipping expands waterborne freight",
      note: "The estimate is for the continental U.S. network after existing roads and rail lines have already adapted to a century of the policy."
    },
    panama: {
      kicker: "Disruption",
      name: "Restrict Panama Canal access",
      description: "Drought raises the cost of water routes that depend on the canal. Freight substitutes toward rail and road, placing additional pressure on intermodal terminals.",
      gdpLabel: "Real GDP",
      gdp: "−$2.7B",
      environment: "−$0.5B",
      road: 78,
      rail: 88,
      water: 22,
      mapLabel: "Canal-dependent water routes contract; land modes expand",
      note: "Congestion compounds the disruption because rail and road terminals must accommodate the diverted freight."
    }
  };

  function colorForMode(mode) {
    return mode === "road" ? COLORS.orange : mode === "rail" ? COLORS.navy : COLORS.teal;
  }

  function setupCanvas(canvas) {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    const pixelWidth = Math.round(width * dpr);
    const pixelHeight = Math.round(height * dpr);
    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    return { ctx, width, height };
  }

  function point(name, width, height) {
    const marginX = Math.min(62, width * 0.09);
    const marginY = Math.min(56, height * 0.12);
    const node = nodes[name];
    return {
      x: marginX + node.x * (width - 2 * marginX),
      y: marginY + node.y * (height - 2 * marginY)
    };
  }

  function drawBackground(ctx, width, height) {
    const marginX = Math.min(44, width * 0.07);
    const marginY = Math.min(38, height * 0.08);
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(marginX + width * 0.02, marginY + height * 0.08);
    ctx.lineTo(width * 0.30, marginY + height * 0.01);
    ctx.lineTo(width * 0.54, marginY + height * 0.08);
    ctx.lineTo(width - marginX * 0.7, marginY + height * 0.04);
    ctx.lineTo(width - marginX, height * 0.44);
    ctx.lineTo(width * 0.84, height * 0.72);
    ctx.lineTo(width * 0.67, height - marginY * 0.72);
    ctx.lineTo(width * 0.45, height - marginY * 0.48);
    ctx.lineTo(width * 0.24, height - marginY * 0.72);
    ctx.lineTo(marginX, height * 0.72);
    ctx.closePath();
    ctx.fillStyle = "rgba(255,255,255,0.68)";
    ctx.fill();
    ctx.strokeStyle = "rgba(27,58,99,0.12)";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.restore();
  }

  function drawEdge(ctx, a, b, mode, width, height, options = {}) {
    const start = point(a, width, height);
    const end = point(b, width, height);
    const bend = mode === "water" ? Math.min(28, height * 0.05) : 0;
    const controlX = (start.x + end.x) / 2;
    const controlY = (start.y + end.y) / 2 + bend;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    if (bend) ctx.quadraticCurveTo(controlX, controlY, end.x, end.y);
    else ctx.lineTo(end.x, end.y);
    ctx.strokeStyle = options.color || colorForMode(mode);
    ctx.globalAlpha = options.alpha ?? 0.65;
    ctx.lineWidth = options.lineWidth || (mode === "water" ? 3.1 : 2.2);
    ctx.lineCap = "round";
    if (options.dash) ctx.setLineDash(options.dash);
    ctx.stroke();
    ctx.restore();
  }

  function drawNodes(ctx, width, height, options = {}) {
    Object.entries(nodes).forEach(([key, node]) => {
      const p = point(key, width, height);
      const active = options.active === key;
      const radius = active ? 7 : 4;
      if (active) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 16 + (options.pulse || 0) * 5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(210,104,53,0.14)";
        ctx.fill();
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = active ? COLORS.orange : COLORS.white;
      ctx.fill();
      ctx.strokeStyle = active ? COLORS.orange : COLORS.ink;
      ctx.lineWidth = active ? 2 : 1.2;
      ctx.stroke();
      if ((options.labels || []).includes(key) || active) {
        ctx.fillStyle = COLORS.ink;
        ctx.font = "600 10px Inter, sans-serif";
        ctx.textAlign = p.x > width * 0.72 ? "right" : "left";
        ctx.fillText(node.label, p.x + (p.x > width * 0.72 ? -9 : 9), p.y - 8);
      }
    });
  }

  function drawBaseNetwork(canvas, options = {}) {
    const { ctx, width, height } = setupCanvas(canvas);
    drawBackground(ctx, width, height);
    edges.forEach(([a, b, mode]) => {
      const disabled = options.disabledModes?.includes(mode);
      drawEdge(ctx, a, b, mode, width, height, {
        alpha: disabled ? 0.12 : (options.alpha ?? 0.46),
        color: disabled ? COLORS.muted : undefined,
        dash: disabled ? [5, 6] : undefined,
        lineWidth: options.modeWidths?.[mode] || undefined
      });
    });
    drawNodes(ctx, width, height, options);
    return { ctx, width, height };
  }

  function interpolatePath(pathNames, progress, width, height) {
    const pts = pathNames.map(name => point(name, width, height));
    const lengths = pts.slice(1).map((p, i) => Math.hypot(p.x - pts[i].x, p.y - pts[i].y));
    const total = lengths.reduce((sum, value) => sum + value, 0);
    let target = progress * total;
    for (let i = 0; i < lengths.length; i += 1) {
      if (target <= lengths[i]) {
        const t = lengths[i] ? target / lengths[i] : 0;
        return {
          x: pts[i].x + (pts[i + 1].x - pts[i].x) * t,
          y: pts[i].y + (pts[i + 1].y - pts[i].y) * t
        };
      }
      target -= lengths[i];
    }
    return pts[pts.length - 1];
  }

  function drawHero(time = 0) {
    const canvas = canvases.hero;
    if (!canvas) return;
    const pulse = reducedMotion ? 0.4 : (Math.sin(time / 700) + 1) / 2;
    const { ctx, width, height } = drawBaseNetwork(canvas, {
      alpha: 0.55,
      labels: ["losangeles", "chicago", "atlanta", "newyork"],
      active: "chicago",
      pulse
    });
    const path = journeys.multimodal;
    const progress = reducedMotion ? 0.62 : (time % 7000) / 7000;
    const p = interpolatePath(path.nodes, progress, width, height);
    ctx.beginPath();
    ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
    ctx.fillStyle = COLORS.orange;
    ctx.fill();
    ctx.strokeStyle = COLORS.white;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  function drawJourney(time = 0) {
    const canvas = canvases.journey;
    if (!canvas) return;
    const { ctx, width, height } = drawBaseNetwork(canvas, {
      alpha: 0.13,
      labels: ["losangeles", "newyork"]
    });
    const journey = journeys[state.journey];
    journey.nodes.slice(0, -1).forEach((name, index) => {
      drawEdge(ctx, name, journey.nodes[index + 1], journey.modes[index], width, height, {
        alpha: 0.96,
        lineWidth: 5
      });
    });
    journey.nodes.forEach((name, index) => {
      const p = point(name, width, height);
      ctx.beginPath();
      ctx.arc(p.x, p.y, index === 0 || index === journey.nodes.length - 1 ? 6 : 5, 0, Math.PI * 2);
      ctx.fillStyle = COLORS.white;
      ctx.fill();
      ctx.strokeStyle = index === 0 || index === journey.nodes.length - 1 ? COLORS.ink : COLORS.orange;
      ctx.lineWidth = 2;
      ctx.stroke();
    });
    const progress = reducedMotion ? 0.55 : (time % 6200) / 6200;
    const p = interpolatePath(journey.nodes, progress, width, height);
    ctx.beginPath();
    ctx.arc(p.x, p.y, 7, 0, Math.PI * 2);
    ctx.fillStyle = COLORS.ink;
    ctx.fill();
    ctx.strokeStyle = COLORS.white;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  function computeModeShares(changePercent) {
    const baseRoad = 0.70;
    const baseRail = 0.22;
    const water = 0.08;
    const ratio = (baseRail / baseRoad) * Math.exp(1.099 * changePercent / 100);
    const road = (1 - water) / (1 + ratio);
    const rail = road * ratio;
    return { road, rail, water };
  }

  function drawModeChart() {
    const canvas = canvases.mode;
    if (!canvas) return;
    const { ctx, width, height } = setupCanvas(canvas);
    const shares = computeModeShares(state.roadCost);
    const values = [shares.road, shares.rail, shares.water];
    const modes = ["road", "rail", "water"];
    const baseline = 0.2;
    const chartTop = 35;
    const chartBottom = height - 28;
    const chartHeight = chartBottom - chartTop;

    [0, 0.25, 0.5, 0.75, 1].forEach(tick => {
      const y = chartBottom - tick * chartHeight;
      ctx.beginPath();
      ctx.moveTo(36, y);
      ctx.lineTo(width - 18, y);
      ctx.strokeStyle = tick === 0 ? "#b7babd" : "#e6e7e7";
      ctx.lineWidth = 1;
      ctx.stroke();
      if (tick > 0) {
        ctx.fillStyle = COLORS.muted;
        ctx.font = "10px Inter, sans-serif";
        ctx.textAlign = "right";
        ctx.fillText(`${Math.round(tick * 100)}%`, 30, y + 3);
      }
    });

    const slot = (width - 72) / 3;
    modes.forEach((mode, index) => {
      const barWidth = Math.min(82, slot * 0.54);
      const x = 48 + index * slot + (slot - barWidth) / 2;
      const barHeight = Math.max(3, values[index] * chartHeight);
      ctx.fillStyle = colorForMode(mode);
      ctx.fillRect(x, chartBottom - barHeight, barWidth, barHeight);
      ctx.fillStyle = COLORS.ink;
      ctx.font = "700 13px Inter, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`${Math.round(values[index] * 100)}%`, x + barWidth / 2, chartBottom - barHeight - 10);
    });

    ctx.beginPath();
    ctx.moveTo(36, chartBottom - baseline * chartHeight);
    ctx.lineTo(width - 18, chartBottom - baseline * chartHeight);
    ctx.strokeStyle = "rgba(21,23,25,0.2)";
    ctx.setLineDash([4, 5]);
    ctx.stroke();

    document.getElementById("roadShare").textContent = `${Math.round(shares.road * 100)}%`;
    document.getElementById("railShare").textContent = `${Math.round(shares.rail * 100)}%`;
    document.getElementById("waterShare").textContent = `${Math.round(shares.water * 100)}%`;
  }

  function drawTerminal() {
    const canvas = canvases.terminal;
    if (!canvas) return;
    const { ctx, width, height } = setupCanvas(canvas);
    const trafficFactor = 1 + state.terminalTraffic / 100;
    const pressure = Math.max(0.05, Math.min(1, 0.35 + state.terminalTraffic / 130));
    const queueCount = Math.max(2, Math.round(4 * trafficFactor));

    ctx.fillStyle = "#dbe9ec";
    ctx.fillRect(0, 0, width, height * 0.54);
    ctx.fillStyle = "#e7e3d9";
    ctx.fillRect(0, height * 0.54, width, height * 0.46);
    ctx.fillStyle = "#8e989d";
    ctx.fillRect(width * 0.13, height * 0.42, width * 0.74, 13);

    for (let i = 0; i < queueCount; i += 1) {
      const x = width * 0.16 + (i % 4) * width * 0.18;
      const y = height * 0.22 + Math.floor(i / 4) * 42;
      ctx.fillStyle = i === 0 ? COLORS.orange : COLORS.navy;
      ctx.fillRect(x, y, width * 0.12, 11);
      ctx.beginPath();
      ctx.moveTo(x, y + 11);
      ctx.lineTo(x + width * 0.12, y + 11);
      ctx.lineTo(x + width * 0.105, y + 19);
      ctx.lineTo(x + width * 0.015, y + 19);
      ctx.closePath();
      ctx.fill();
    }

    const containerRows = Math.max(2, Math.round(3 + state.terminalTraffic / 35));
    const containerColors = [COLORS.orange, COLORS.navy, COLORS.teal, "#868b8f"];
    for (let row = 0; row < containerRows; row += 1) {
      for (let col = 0; col < 7; col += 1) {
        ctx.fillStyle = containerColors[(row + col) % containerColors.length];
        ctx.fillRect(width * 0.2 + col * 34, height * 0.63 + row * 18, 29, 13);
      }
    }

    ctx.strokeStyle = COLORS.ink;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(width * 0.72, height * 0.60);
    ctx.lineTo(width * 0.72, height * 0.22);
    ctx.lineTo(width * 0.52, height * 0.22);
    ctx.stroke();
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width * 0.58, height * 0.22);
    ctx.lineTo(width * 0.58, height * 0.45);
    ctx.stroke();

    const gauge = document.getElementById("terminalGaugeFill");
    gauge.style.width = `${Math.round(pressure * 100)}%`;
    gauge.style.background = pressure > 0.74 ? COLORS.red : pressure > 0.53 ? COLORS.orange : COLORS.teal;
    document.getElementById("terminalPressure").textContent = pressure > 0.74 ? "Severe" : pressure > 0.53 ? "Elevated" : "Normal";
  }

  function drawPropagation(time = 0) {
    const canvas = canvases.propagation;
    if (!canvas) return;
    const { ctx, width, height } = setupCanvas(canvas);
    drawBackground(ctx, width, height);
    const selected = state.terminal;
    const selectedNode = nodes[selected];
    const pulse = reducedMotion ? 0.4 : (Math.sin(time / 650) + 1) / 2;

    edges.forEach(([a, b, mode]) => {
      const direct = a === selected || b === selected;
      const midpoint = { x: (nodes[a].x + nodes[b].x) / 2, y: (nodes[a].y + nodes[b].y) / 2 };
      const distance = Math.hypot(midpoint.x - selectedNode.x, midpoint.y - selectedNode.y);
      const influence = Math.max(0.10, 1 - distance * 1.35);
      drawEdge(ctx, a, b, mode, width, height, {
        color: direct ? COLORS.orange : COLORS.navy,
        alpha: direct ? 0.95 : 0.12 + influence * 0.48,
        lineWidth: direct ? 5 : 1.4 + influence * 2.5
      });
    });

    drawNodes(ctx, width, height, {
      active: selected,
      pulse,
      labels: ["losangeles", "chicago", "atlanta", "newyork"]
    });
  }

  function drawPolicy() {
    const canvas = canvases.policy;
    if (!canvas) return;
    const { ctx, width, height } = setupCanvas(canvas);
    drawBackground(ctx, width, height);
    const policy = state.policy;

    edges.forEach(([a, b, mode]) => {
      let alpha = 0.34;
      let lineWidth = mode === "water" ? 3 : 2;
      let color = colorForMode(mode);
      let dash;
      if (policy === "terminal") {
        const central = [a, b].includes("chicago") || [a, b].includes("atlanta");
        alpha = central ? 0.9 : 0.26;
        lineWidth = central ? 4.8 : lineWidth;
      } else if (policy === "rail") {
        if (mode === "rail") {
          alpha = 0.2;
          color = COLORS.muted;
          dash = [6, 7];
        } else {
          alpha = 0.86;
          lineWidth = mode === "road" ? 5 : 4;
        }
      } else if (policy === "jones") {
        alpha = mode === "water" ? 0.95 : 0.2;
        lineWidth = mode === "water" ? 6 : 1.5;
      } else if (policy === "panama") {
        const affectedWater = mode === "water" && (a === "losangeles" || b === "losangeles" || a === "houston" || b === "houston");
        if (affectedWater) {
          color = COLORS.red;
          alpha = 0.95;
          lineWidth = 5;
          dash = [8, 6];
        } else if (mode === "road" || mode === "rail") {
          alpha = 0.82;
          lineWidth = 4;
        } else {
          alpha = 0.22;
        }
      }
      drawEdge(ctx, a, b, mode, width, height, { alpha, lineWidth, color, dash });
    });

    drawNodes(ctx, width, height, {
      active: policy === "terminal" ? "chicago" : policy === "panama" ? "losangeles" : undefined,
      pulse: 0.55,
      labels: ["losangeles", "chicago", "houston", "atlanta", "newyork"]
    });
  }

  function setPressed(group, active) {
    group.forEach(button => {
      const on = button === active;
      button.classList.toggle("active", on);
      if (button.hasAttribute("aria-pressed")) button.setAttribute("aria-pressed", String(on));
      if (button.getAttribute("role") === "tab") button.setAttribute("aria-selected", String(on));
    });
  }

  function bindJourneyControls() {
    const buttons = [...document.querySelectorAll("[data-journey]")];
    buttons.forEach(button => button.addEventListener("click", () => {
      state.journey = button.dataset.journey;
      setPressed(buttons, button);
      const journey = journeys[state.journey];
      document.getElementById("journeyLabel").textContent = journey.label;
      document.getElementById("journeyTransfers").textContent = journey.transfers;
      drawJourney(performance.now());
    }));
  }

  function bindModeControl() {
    const input = document.getElementById("roadCost");
    input.addEventListener("input", () => {
      state.roadCost = Number(input.value);
      document.getElementById("roadCostValue").textContent = state.roadCost === 0 ? "No change" : `${Math.abs(state.roadCost)}% ${state.roadCost > 0 ? "higher" : "lower"}`;
      drawModeChart();
    });
  }

  function bindTerminalControl() {
    const input = document.getElementById("terminalTraffic");
    input.addEventListener("input", () => {
      state.terminalTraffic = Number(input.value);
      document.getElementById("trafficValue").textContent = state.terminalTraffic === 0 ? "Baseline" : `${Math.abs(state.terminalTraffic)}% ${state.terminalTraffic > 0 ? "higher" : "lower"}`;
      const dwell = 24 * Math.pow(1 + state.terminalTraffic / 100, 0.25);
      document.getElementById("dwellValue").textContent = `${dwell.toFixed(1)} hours`;
      drawTerminal();
    });
  }

  function bindTerminalButtons() {
    const buttons = [...document.querySelectorAll("[data-terminal]")];
    buttons.forEach(button => button.addEventListener("click", () => {
      state.terminal = button.dataset.terminal;
      setPressed(buttons, button);
      document.getElementById("selectedTerminal").textContent = terminalNames[state.terminal];
      drawPropagation(performance.now());
    }));
  }

  function bindVariants() {
    const buttons = [...document.querySelectorAll("[data-variant]")];
    buttons.forEach(button => button.addEventListener("click", () => {
      state.variant = button.dataset.variant;
      setPressed(buttons, button);
      const variant = variants[state.variant];
      document.getElementById("variantIndex").textContent = variant.value;
      document.getElementById("variantExplanation").textContent = variant.explanation;
      document.getElementById("variantTakeaway").textContent = variant.takeaway;
      document.getElementById("variantBar").style.height = `${Math.min(100, variant.value / 1.85)}%`;
    }));
  }

  function bindPolicies() {
    const buttons = [...document.querySelectorAll("[data-policy]")];
    const renderPolicy = () => {
      const policy = policies[state.policy];
      document.getElementById("policyKicker").textContent = policy.kicker;
      document.getElementById("policyName").textContent = policy.name;
      document.getElementById("policyDescription").textContent = policy.description;
      document.getElementById("policyGDPLabel").textContent = policy.gdpLabel;
      document.getElementById("policyGDP").textContent = policy.gdp;
      document.getElementById("policyEnvironment").textContent = policy.environment;
      document.getElementById("policyMapLabel").textContent = policy.mapLabel;
      document.getElementById("policyNote").textContent = policy.note;
      document.getElementById("policyRoad").style.width = `${policy.road}%`;
      document.getElementById("policyRail").style.width = `${policy.rail}%`;
      document.getElementById("policyWater").style.width = `${policy.water}%`;
      drawPolicy();
    };
    buttons.forEach(button => button.addEventListener("click", () => {
      state.policy = button.dataset.policy;
      setPressed(buttons, button);
      renderPolicy();
    }));
    renderPolicy();
  }

  function bindReference() {
    const dialog = document.getElementById("referenceDialog");
    const open = document.getElementById("referenceButton");
    const close = document.getElementById("referenceClose");
    open.addEventListener("click", () => dialog.showModal());
    close.addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", event => {
      if (event.target === dialog) dialog.close();
    });
  }

  function bindSectionMenu() {
    const menu = document.querySelector(".sections-menu");
    menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      menu.removeAttribute("open");
    }));
  }

  function drawAll(time = performance.now()) {
    drawHero(time);
    drawJourney(time);
    drawModeChart();
    drawTerminal();
    drawPropagation(time);
    drawPolicy();
  }

  let resizeTimer;
  window.addEventListener("resize", () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => drawAll(), 100);
  });

  let lastAnimationFrame = 0;

  function animate(time) {
    if (time - lastAnimationFrame >= 32) {
      drawHero(time);
      drawJourney(time);
      drawPropagation(time);
      lastAnimationFrame = time;
    }
    window.requestAnimationFrame(animate);
  }

  function init() {
    canvases.hero = document.getElementById("heroCanvas");
    canvases.journey = document.getElementById("journeyCanvas");
    canvases.mode = document.getElementById("modeCanvas");
    canvases.terminal = document.getElementById("terminalCanvas");
    canvases.propagation = document.getElementById("propagationCanvas");
    canvases.policy = document.getElementById("policyCanvas");

    bindJourneyControls();
    bindModeControl();
    bindTerminalControl();
    bindTerminalButtons();
    bindVariants();
    bindPolicies();
    bindReference();
    bindSectionMenu();
    drawAll();

    if (!reducedMotion) window.requestAnimationFrame(animate);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
