/**
 * HABITAT-X — Simulate Module
 * Cascade-aware simulation engine:
 *   1. Reads buildState (modules + crew) to establish base capacity
 *   2. Runs a day-by-day deterministic model that degrades over time
 *   3. Injects events (heat/water/power/storm) that trigger visible cascade chains
 *   4. Reveals hidden weak-points in the settlement design
 *
 * All values are labelled "DEMO MODEL SCORES" – not live NASA data.
 */

import { getTotals, BUILDINGS } from '../build/build.js';

// ─── Cascade node definitions ─────────────────────────────────────────────────
export const CASCADE_NODES = [
  { id: 'env',      label: 'ENVIRONMENT',       icon: '🌡️', color: '#dd5555' },
  { id: 'power',    label: 'POWER GRID',         icon: '⚡',  color: '#f4ad3f' },
  { id: 'water',    label: 'WATER SUPPLY',       icon: '💧',  color: '#50e3c2' },
  { id: 'o2',       label: 'O2 / ATMOSPHERE',    icon: '💨',  color: '#88aacc' },
  { id: 'food',     label: 'FOOD PRODUCTION',    icon: '🌱',  color: '#5faa90' },
  { id: 'thermal',  label: 'THERMAL CONTROL',    icon: '🛡️',  color: '#998877' },
  { id: 'medical',  label: 'MEDICAL',            icon: '⚕️',  color: '#ee7788' },
  { id: 'crew',     label: 'CREW CAPACITY',      icon: '👥',  color: '#5da7ef' },
];

// Which nodes downstream propagate from each trigger
const CASCADE_EDGES = {
  heat:  ['env', 'thermal', 'water', 'power', 'food', 'o2', 'crew'],
  water: ['water', 'food', 'o2', 'crew'],
  power: ['power', 'water', 'o2', 'thermal', 'food', 'crew'],
  storm: ['env', 'power', 'thermal', 'water', 'food', 'crew'],
};

// ─── Simulation Engine ────────────────────────────────────────────────────────

/**
 * Compute a snapshot for a given day based on build capacity + active event.
 * Returns normalised percentages (0-100) for each resource.
 */
export function runSimDay(day, buildTotals, crew, activeEvent) {
  const x = day - 1; // 0-indexed day

  // Base capacity as percentage of requirement
  const powerReq  = buildTotals.powerUse  + crew * 2;
  const waterReq  = buildTotals.waterUse  + crew * 5;
  const foodReq   = buildTotals.foodUse   + crew * 2;
  const o2Req     = crew * 2;
  const thermalReq = crew * 3;
  const medReq    = Math.ceil(crew / 10) * 10;

  // Base health 0→100 (clamped)
  const safeDiv = (v, r) => Math.min(100, Math.max(0, r > 0 ? (v / r) * 100 : 100));

  let powerPct   = safeDiv(buildTotals.powerGen,   powerReq);
  let waterPct   = safeDiv(buildTotals.waterGen,   waterReq);
  let foodPct    = safeDiv(buildTotals.foodGen,    foodReq);
  let o2Pct      = safeDiv(buildTotals.o2Gen,      o2Req);
  let thermalPct = safeDiv(buildTotals.thermalGen, thermalReq);
  let medPct     = safeDiv(buildTotals.medGen,     medReq);
  let shieldPct  = Math.min(100, buildTotals.shieldingGen / (crew * 4) * 100);

  // Environmental baseline temp (Earth analog baseline ~52°C on hot site)
  let temp = 24 + x * 0.4; // steady climb over 30 days

  // Daily wear: resources degrade naturally (model drift)
  const drift = x * 0.6;

  powerPct   = Math.max(5,  powerPct   - drift * 0.35);
  waterPct   = Math.max(5,  waterPct   - drift * 0.50);
  foodPct    = Math.max(5,  foodPct    - drift * 0.40);
  o2Pct      = Math.max(5,  o2Pct      - drift * 0.30);
  thermalPct = Math.max(5,  thermalPct - drift * 0.20);
  medPct     = Math.max(5,  medPct     - drift * 0.10);

  // Active events: cascade penalties (proportional to how far into the event we are)
  const cascadeNodes = activeEvent ? new Set(CASCADE_EDGES[activeEvent] || []) : new Set();

  if (activeEvent === 'heat') {
    const spike = Math.min(x * 2.2, 18);
    temp += spike + 5;
    if (cascadeNodes.has('env'))     thermalPct = Math.max(5, thermalPct - spike * 1.1);
    if (cascadeNodes.has('water'))   waterPct   = Math.max(5, waterPct   - spike * 1.4);
    if (cascadeNodes.has('power'))   powerPct   = Math.max(5, powerPct   - spike * 0.5);
    if (cascadeNodes.has('food'))    foodPct    = Math.max(5, foodPct    - Math.max(0, waterPct < 40 ? (40-waterPct)*0.55 : 0));
    if (cascadeNodes.has('o2'))      o2Pct      = Math.max(5, o2Pct      - spike * 0.4);
  }

  if (activeEvent === 'water') {
    const drop = Math.min(x * 3.0, 60);
    if (cascadeNodes.has('water'))   waterPct   = Math.max(5, waterPct   - drop);
    if (cascadeNodes.has('food'))    foodPct    = Math.max(5, foodPct    - drop * 0.65);
    if (cascadeNodes.has('o2'))      o2Pct      = Math.max(5, o2Pct      - drop * 0.3);
  }

  if (activeEvent === 'power') {
    const cut = Math.min(x * 2.5, 50);
    if (cascadeNodes.has('power'))   powerPct   = Math.max(5, powerPct   - cut);
    if (cascadeNodes.has('water'))   waterPct   = Math.max(5, waterPct   - cut * 0.7);  // extractors stop
    if (cascadeNodes.has('o2'))      o2Pct      = Math.max(5, o2Pct      - cut * 0.6);
    if (cascadeNodes.has('thermal')) thermalPct = Math.max(5, thermalPct - cut * 0.8);
    if (cascadeNodes.has('food'))    foodPct    = Math.max(5, foodPct    - cut * 0.4);
  }

  if (activeEvent === 'storm') {
    const damage = Math.min(x * 2.8, 45);
    temp -= 8; // temperature drop
    if (cascadeNodes.has('power'))   powerPct   = Math.max(5, powerPct   - damage * 0.9);
    if (cascadeNodes.has('thermal')) thermalPct = Math.max(5, thermalPct - damage * 1.0);
    if (cascadeNodes.has('water'))   waterPct   = Math.max(5, waterPct   - damage * 0.6);
    if (cascadeNodes.has('food'))    foodPct    = Math.max(5, foodPct    - damage * 0.5);
  }

  // Crew capacity is a RESULT of all other systems (secondary cascade)
  const systemAvg = (powerPct + waterPct + foodPct + o2Pct + thermalPct) / 5;
  const crewCapPct = Math.max(0, Math.min(100, systemAvg - (systemAvg < 50 ? (50 - systemAvg) * 0.5 : 0)));

  // Detect which nodes are critical/warning
  const status = {};
  [
    ['env',     temp,       70,  45], // temp-based inverted
    ['power',   powerPct,   60,  35],
    ['water',   waterPct,   60,  35],
    ['o2',      o2Pct,      60,  35],
    ['food',    foodPct,    60,  30],
    ['thermal', thermalPct, 55,  30],
    ['medical', medPct,     60,  30],
    ['crew',    crewCapPct, 60,  30],
  ].forEach(([id, val, warn, crit]) => {
    if (id === 'env') {
      status[id] = val > 80 ? 'critical' : val > 60 ? 'warning' : 'nominal';
    } else {
      status[id] = val < crit ? 'critical' : val < warn ? 'warning' : 'nominal';
    }
  });

  return {
    day,
    temp: Math.round(temp * 10) / 10,
    power:   Math.round(powerPct),
    water:   Math.round(waterPct),
    food:    Math.round(foodPct),
    o2:      Math.round(o2Pct),
    thermal: Math.round(thermalPct),
    medical: Math.round(medPct),
    shielding: Math.round(shieldPct),
    crew:    Math.round(crewCapPct),
    status,
    cascadeNodes: activeEvent ? CASCADE_EDGES[activeEvent] : [],
  };
}

/**
 * Generate the full 30-day history for drawing the sparkline chart.
 */
export function buildHistory(buildTotals, crew, activeEvent) {
  return Array.from({ length: 30 }, (_, i) => runSimDay(i + 1, buildTotals, crew, activeEvent));
}

// ─── Cascade chain messages ───────────────────────────────────────────────────
export const CASCADE_MSGS = {
  heat: [
    { node: 'env',     msg: 'Surface temperature rises beyond nominal range.' },
    { node: 'thermal', msg: 'Thermal control system overwhelmed → crew space heating up.' },
    { node: 'water',   msg: 'Water demand spikes for cooling → reserve depletes faster.' },
    { node: 'power',   msg: 'Solar efficiency drops under thermal stress.' },
    { node: 'food',    msg: 'Greenhouse irrigation strained as water thins → crop yield falls.' },
    { node: 'o2',      msg: 'O2 generation partially hampered by power degradation.' },
    { node: 'crew',    msg: 'Multiple systems constrained → crew operational capacity exhausted.' },
  ],
  water: [
    { node: 'water',  msg: 'Water supply directly curtailed — reserve falling.' },
    { node: 'food',   msg: 'Greenhouse irrigation cut → food production collapses.' },
    { node: 'o2',     msg: 'Atmospheric recycling hampered without water input.' },
    { node: 'crew',   msg: 'Critical life-support margins breached → crew at risk.' },
  ],
  power: [
    { node: 'power',   msg: 'Power generation falls — 30% below demand.' },
    { node: 'water',   msg: 'Ice extractor offline without power → water stops flowing.' },
    { node: 'thermal', msg: 'Active heating/cooling disabled → habitat temperature swings.' },
    { node: 'o2',      msg: 'O2 electrolysis system offline → atmosphere thins.' },
    { node: 'food',    msg: 'Greenhouse lights and pumps off → food production drops.' },
    { node: 'crew',    msg: 'Settlement falls below survivable thresholds.' },
  ],
  storm: [
    { node: 'env',     msg: 'Dust/ice storm sweeps through the analog site.' },
    { node: 'power',   msg: 'Solar panels obscured → power generation crashes.' },
    { node: 'thermal', msg: 'Extreme temperature drop detected outside habitat.' },
    { node: 'water',   msg: 'Ice extraction suspended in storm conditions.' },
    { node: 'food',    msg: 'Greenhouse pressure differential drops → yield impact.' },
    { node: 'crew',    msg: 'Crew confined to shelter — operational capacity minimal.' },
  ],
};

// ─── HTML renderers ───────────────────────────────────────────────────────────

function statusColor(s) {
  return s === 'critical' ? 'var(--red)' : s === 'warning' ? 'var(--amber)' : 'var(--green)';
}
function statusLabel(s) {
  return s === 'critical' ? 'CRITICAL' : s === 'warning' ? 'CAUTION' : 'NOMINAL';
}

function telemetryCard(label, icon, val, unit, status, sub) {
  const pct = Math.min(100, Math.max(0, val));
  const col = statusColor(status);
  return `
    <div class="sim-tel-card ${status}">
      <div class="sim-tel-head">
        <span>${icon} ${label}</span>
        <span style="color:${col};font:700 8px var(--mono)">${statusLabel(status)}</span>
      </div>
      <div class="sim-tel-val" style="color:${col}">${val}${unit}</div>
      <div class="sim-bar-trk"><div class="sim-bar-fill" style="width:${pct}%;background:${col}"></div></div>
      <div class="sim-tel-sub">${sub}</div>
    </div>
  `;
}

function sparklineSVG(history, key, color) {
  if (!history.length) return '';
  const vals = history.map(d => d[key]);
  const min = Math.min(...vals), max = Math.max(...vals);
  const range = Math.max(max - min, 1);
  const pts = vals.map((v, i) => {
    const x = (i / (vals.length - 1)) * 760 + 20;
    const y = 90 - ((v - min) / range) * 70;
    return `${x},${y}`;
  }).join(' ');
  return `<polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>`;
}

function cascadeChainHTML(activeEvent, snap) {
  if (!activeEvent || !CASCADE_MSGS[activeEvent]) {
    return `<div class="sim-cascade-empty">
      <span style="font-size:22px;opacity:.4">⚡</span>
      <p>Inject an event to reveal the cascade failure chain.</p>
    </div>`;
  }
  const steps = CASCADE_MSGS[activeEvent];
  const nodeMap = {};
  CASCADE_NODES.forEach(n => nodeMap[n.id] = n);
  return steps.map((s, i) => {
    const node = nodeMap[s.node] || {};
    const st = snap.status[s.node] || 'nominal';
    const col = statusColor(st);
    return `
      <div class="sim-chain-step ${st}" style="--step-i:${i}">
        <div class="sim-chain-icon" style="border-color:${col};color:${col}">${node.icon || '●'}</div>
        <div class="sim-chain-body">
          <div class="sim-chain-label" style="color:${col}">${(node.label||s.node).toUpperCase()}</div>
          <div class="sim-chain-msg">${s.msg}</div>
        </div>
        ${st === 'critical' ? `<span class="sim-chain-badge critical">CRITICAL</span>` 
          : st === 'warning' ? `<span class="sim-chain-badge warning">CAUTION</span>` : ''}
      </div>
      ${i < steps.length - 1 ? '<div class="sim-chain-arrow">↓</div>' : ''}
    `;
  }).join('');
}

export function renderSimulate(buildState, simState) {
  const totals = getTotals(buildState);
  const crew = buildState.crewTarget;
  const snap = runSimDay(simState.day, totals, crew, simState.activeEvent);
  const history = buildHistory(totals, crew, simState.activeEvent);
  const isCritical = Object.values(snap.status).includes('critical');
  const isWarning  = !isCritical && Object.values(snap.status).includes('warning');

  // Summary row from build
  const buildSummary = `
    <div class="sim-build-row">
      <span>👥 Crew: <b>${crew}</b></span>
      <span>⚡ Power: <b>${totals.powerGen}/${totals.powerUse + crew*2} kW</b></span>
      <span>💧 Water: <b>${totals.waterGen}/${totals.waterUse + crew*5} L/d</b></span>
      <span>🌱 Food: <b>${totals.foodGen}/${totals.foodUse + crew*2} kg/d</b></span>
      <span>💨 O2: <b>${totals.o2Gen}/${crew*2}</b></span>
      <span style="color:${isCritical?'var(--red)':isWarning?'var(--amber)':'var(--green)'}">
        ${isCritical ? '⚠ CRITICAL STATE' : isWarning ? '⚠ CAUTION' : '● NOMINAL'}
      </span>
    </div>
  `;

  // Events
  const EVENTS = [
    { id: 'heat',  code: 'T↑',    label: 'Heat Spike',     detail: '+5°C surface / 7 days',     color: '#dd5555' },
    { id: 'water', code: 'H₂O↓',  label: 'Water Shortage', detail: '−30% extraction rate',       color: '#50e3c2' },
    { id: 'power', code: 'E↓',    label: 'Power Failure',  detail: '−30% generation',            color: '#f4ad3f' },
    { id: 'storm', code: '🌪',     label: 'Dust Storm',     detail: 'Solar blocked / cold front', color: '#88aacc' },
  ];

  const eventsHtml = EVENTS.map(e => `
    <button class="sim-evt-btn ${simState.activeEvent === e.id ? 'active' : ''}" data-event="${e.id}"
      style="${simState.activeEvent === e.id ? `border-color:${e.color};background:rgba(0,0,0,0.6)` : ''}">
      <span class="sim-evt-code" style="color:${e.color}">${e.code}</span>
      <div>
        <strong>${e.label}</strong>
        <small>${e.detail}</small>
      </div>
      <span class="sim-evt-arrow" style="color:${e.color}">${simState.activeEvent === e.id ? '● ON' : '+'}</span>
    </button>
  `).join('');

  // Chart SVG
  const chartSVG = `
    <svg viewBox="0 0 800 110" preserveAspectRatio="none" style="width:100%;height:100%">
      <rect width="800" height="110" fill="none"/>
      ${sparklineSVG(history, 'water',   '#50e3c2')}
      ${sparklineSVG(history, 'food',    '#5faa90')}
      ${sparklineSVG(history, 'power',   '#f4ad3f')}
      ${sparklineSVG(history, 'o2',      '#88aacc')}
      ${sparklineSVG(history, 'thermal', '#dd5555')}
      <!-- Day marker -->
      <line x1="${20 + (simState.day-1)/29*760}" y1="0" x2="${20 + (simState.day-1)/29*760}" y2="110" 
            stroke="rgba(255,255,255,0.35)" stroke-width="1.5" stroke-dasharray="3 2"/>
    </svg>
  `;

  return `
  <div class="sim-layout2" id="simWrap">
    <!-- TOP STRIP: build summary -->
    ${buildSummary}

    <!-- ROW 1: Chart + Events + Cascade -->
    <div class="sim-row1">
      <!-- Chart panel -->
      <div class="sim-card sim-chart-card">
        <div class="sim-card-hd">
          <div>
            <div class="kicker">SETTLEMENT TELEMETRY / 30-DAY RUN</div>
            <div class="sim-day-lbl">DAY <span id="simDayLbl" style="color:${isCritical?'var(--red)':isWarning?'var(--amber)':'var(--cyan)'}">${simState.day}</span> / 30</div>
          </div>
          <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
            <span style="font:8px var(--mono);color:#50e3c2">— Water</span>
            <span style="font:8px var(--mono);color:#5faa90">— Food</span>
            <span style="font:8px var(--mono);color:#f4ad3f">— Power</span>
            <span style="font:8px var(--mono);color:#88aacc">— O2</span>
            <span style="font:8px var(--mono);color:#dd5555">— Thermal</span>
          </div>
        </div>
        <div class="sim-chart-wrap">${chartSVG}</div>
        <div class="sim-controls2">
          <button id="simPrev" class="sim-ctl">◀</button>
          <button id="simPlayBtn" class="sim-ctl ${simState.running ? 'active' : ''}">${simState.running ? '⏸ PAUSE' : '▶ PLAY'}</button>
          <button id="simNext" class="sim-ctl">▶</button>
          <button id="simFast" class="sim-ctl">5×</button>
          <button id="simReset" class="sim-ctl">RESET</button>
          <input id="simScrub" type="range" min="1" max="30" value="${simState.day}" style="flex:1;accent-color:var(--cyan);">
        </div>
      </div>

      <!-- Events panel -->
      <div class="sim-card sim-events-card">
        <div class="kicker">EVENT INJECTOR</div>
        <p style="color:#667d90;font-size:8px;line-height:1.5;margin:4px 0 8px;">Inject a stress event to reveal cascading failures. Values are demo model scores.</p>
        <div class="sim-evt-list">${eventsHtml}</div>
        ${simState.activeEvent ? `
          <div class="sim-active-note">
            <span style="color:var(--amber)">⚠ ACTIVE:</span>
            ${simState.activeEvent.toUpperCase()} shock injected at Day ${simState.eventDay || simState.day}.
          </div>
        ` : `<div class="sim-active-note" style="color:#4e6678">No event active. Start with baseline, then inject a stressor to see cascades.</div>`}
        <button class="btn" id="simClearEvent" style="margin-top:8px;width:100%;display:${simState.activeEvent?'block':'none'}">CLEAR EVENT</button>
        <div class="sim-env-block">
          <div class="kicker" style="margin-top:12px">ENVIRONMENT</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:6px">
            <div class="sim-env-cell"><div class="sim-env-lbl">TEMPERATURE</div><div class="sim-env-val" style="color:${snap.status.env==='critical'?'var(--red)':snap.status.env==='warning'?'var(--amber)':'var(--text)'}">${snap.temp}°C</div></div>
            <div class="sim-env-cell"><div class="sim-env-lbl">ANALOG SITE</div><div class="sim-env-val">ATACAMA</div></div>
            <div class="sim-env-cell"><div class="sim-env-lbl">TARGET</div><div class="sim-env-val">JEZERO / MARS</div></div>
            <div class="sim-env-cell"><div class="sim-env-lbl">SHIELDING</div><div class="sim-env-val">${snap.shielding}%</div></div>
          </div>
        </div>
      </div>

      <!-- Cascade chain panel -->
      <div class="sim-card sim-cascade-card">
        <div class="kicker">CASCADE FAILURE CHAIN</div>
        <p style="color:#667d90;font-size:8px;line-height:1.4;margin:4px 0 8px;">
          ${simState.activeEvent
            ? `Active path for <b style="color:var(--amber)">${simState.activeEvent.toUpperCase()}</b> event — showing how failure propagates:`
            : 'Inject an event to see how failure propagates through the settlement.'}
        </p>
        <div class="sim-chain-wrap" id="simChainWrap">
          ${cascadeChainHTML(simState.activeEvent, snap)}
        </div>
        <button class="btn btn-primary" data-nav="trace" style="width:100%;margin-top:10px">OPEN TRACE GRAPH →</button>
      </div>
    </div>

    <!-- ROW 2: Resource telemetry cards -->
    <div class="sim-tel-grid" id="simTelGrid">
      ${telemetryCard('WATER',    '💧', snap.water,   '%', snap.status.water,   'Supply vs demand ratio')}
      ${telemetryCard('FOOD',     '🌱', snap.food,    '%', snap.status.food,    'Production vs demand')}
      ${telemetryCard('POWER',    '⚡', snap.power,   '%', snap.status.power,   'Generation vs load')}
      ${telemetryCard('O2',       '💨', snap.o2,      '%', snap.status.o2,      'Atmospheric integrity')}
      ${telemetryCard('THERMAL',  '🌡️', snap.thermal, '%', snap.status.thermal, 'Thermal control margin')}
      ${telemetryCard('MEDICAL',  '⚕️', snap.medical, '%', snap.status.medical, 'Healthcare capacity')}
      ${telemetryCard('SHIELDING','🛡️', snap.shielding,'%',snap.status.thermal, 'Radiation protection')}
      ${telemetryCard('CREW CAP', '👥', snap.crew,    '%', snap.status.crew,    'Operational capacity')}
    </div>
  </div>`;
}

// ─── CSS ──────────────────────────────────────────────────────────────────────
const CSS = `
.sim-layout2 { display:flex; flex-direction:column; gap:10px; min-height:100%; padding-bottom:40px; }

.sim-build-row { display:flex; gap:16px; flex-wrap:wrap; align-items:center; padding:8px 12px; background:#061320; border:1px solid #1b3348; font:500 8px var(--mono); color:#7090a8; }
.sim-build-row b { color:#a9d0f0; }

.sim-row1 { display:grid; grid-template-columns:1.6fr 1fr 1fr; gap:10px; }

.sim-card { background:#060f1a; border:1px solid #1a2d3d; padding:12px 14px; display:flex; flex-direction:column; }

/* Chart */
.sim-card-hd { display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:10px; gap:10px; }
.sim-day-lbl { font:700 18px var(--mono); margin-top:3px; }
.sim-chart-wrap { flex:1; min-height:110px; background:#03080e; border:1px solid #0f1d2a; border-radius:3px; overflow:hidden; }
.sim-controls2 { display:flex; gap:5px; margin-top:8px; align-items:center; flex-wrap:wrap; }
.sim-ctl { border:1px solid #253845; background:#07111a; color:#83a6c3; padding:5px 8px; font:700 8px var(--mono); cursor:pointer; }
.sim-ctl:hover { border-color:#4a7090; background:#0d2035; }
.sim-ctl.active { border-color:var(--cyan); color:var(--cyan); }

/* Events */
.sim-evt-list { display:flex; flex-direction:column; gap:6px; }
.sim-evt-btn { display:grid; grid-template-columns:32px 1fr auto; gap:8px; align-items:center; padding:9px 10px; border:1px solid #253a4a; background:#05101a; text-align:left; cursor:pointer; }
.sim-evt-btn:hover { border-color:#4a6f8b; background:#081a29; }
.sim-evt-btn.active { background:#0a1f2e; }
.sim-evt-code { font:700 11px var(--mono); text-align:center; }
.sim-evt-btn strong { display:block; font:600 9px var(--mono); color:#b8d0e5; }
.sim-evt-btn small { display:block; font:8px var(--mono); color:#5a7890; margin-top:2px; }
.sim-evt-arrow { font:700 9px var(--mono); }
.sim-active-note { margin-top:8px; font:8px var(--mono); color:#8aacbf; padding:8px; background:#061320; border-left:2px solid var(--amber); line-height:1.5; }
.sim-env-block { margin-top:4px; }
.sim-env-cell { padding:7px 8px; background:#040c14; border:1px solid #162738; }
.sim-env-lbl { font:600 7px var(--mono); color:#4e6a7e; letter-spacing:.5px; }
.sim-env-val { font:700 11px var(--mono); color:#a9cde6; margin-top:2px; }

/* Cascade */
.sim-cascade-empty { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:8px; text-align:center; font:9px var(--mono); color:#4e6a7e; padding:20px; }
.sim-chain-wrap { flex:1; overflow-y:auto; display:flex; flex-direction:column; gap:0; }
.sim-chain-step { display:flex; align-items:flex-start; gap:10px; padding:7px 8px; border-left:2px solid #1d3448; animation:fadeInUp 0.35s ease-out both; animation-delay:calc(var(--step-i) * 0.07s); }
.sim-chain-step.critical { border-left-color:var(--red); background:rgba(255,91,91,0.05); }
.sim-chain-step.warning  { border-left-color:var(--amber); background:rgba(244,173,63,0.05); }
.sim-chain-icon { width:26px; height:26px; border:1px solid; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px; flex-shrink:0; }
.sim-chain-label { font:700 8px var(--mono); letter-spacing:.4px; }
.sim-chain-msg { font:8px var(--mono); color:#667d8f; margin-top:2px; line-height:1.5; }
.sim-chain-badge { font:700 7px var(--mono); padding:2px 5px; border-radius:2px; flex-shrink:0; align-self:flex-start; margin-top:2px; }
.sim-chain-badge.critical { background:rgba(255,91,91,.15); color:var(--red); border:1px solid var(--red); }
.sim-chain-badge.warning  { background:rgba(244,173,63,.15); color:var(--amber); border:1px solid var(--amber); }
.sim-chain-arrow { text-align:left; padding-left:12px; font:700 12px var(--mono); color:#2d4a5e; line-height:1; }

/* Telemetry row */
.sim-tel-grid { display:grid; grid-template-columns:repeat(8,1fr); gap:7px; }
.sim-tel-card { padding:10px; background:#060f1a; border:1px solid #1a2d3d; }
.sim-tel-card.critical { border-color:#5a2020; }
.sim-tel-card.warning  { border-color:#5a4020; }
.sim-tel-head { display:flex; justify-content:space-between; font:600 7px var(--mono); color:#5a7a90; margin-bottom:4px; }
.sim-tel-val  { font:700 20px var(--mono); margin:4px 0; }
.sim-bar-trk  { height:4px; background:#0f1d2a; border-radius:2px; }
.sim-bar-fill { height:100%; border-radius:2px; transition:width 0.5s ease; }
.sim-tel-sub  { font:7px var(--mono); color:#4a6278; margin-top:4px; }

@media(max-width:1100px) {
  .sim-row1 { grid-template-columns:1fr 1fr; }
  .sim-cascade-card { grid-column:1/-1; }
  .sim-tel-grid { grid-template-columns:repeat(4,1fr); }
}
@media(max-width:700px) {
  .sim-row1 { grid-template-columns:1fr; }
  .sim-tel-grid { grid-template-columns:repeat(2,1fr); }
}
`;

let _simCSSInjected = false;
export function injectSimCSS() {
  if (_simCSSInjected) return;
  const s = document.createElement('style');
  s.id = 'sim-css';
  s.textContent = CSS;
  document.head.appendChild(s);
  _simCSSInjected = true;
}

// ─── State + Auto-play ticker ────────────────────────────────────────────────
export const simState = {
  day: 1,
  running: false,
  activeEvent: null,
  eventDay: null,
  _ticker: null,
};

function stopTicker() {
  if (simState._ticker) {
    clearInterval(simState._ticker);
    simState._ticker = null;
  }
}

/**
 * Wire all simulate screen events.
 * Self-contained — handles refresh + re-wire without needing main.js callbacks.
 */
export function attachSimulateEvents(buildStateRef) {
  stopTicker();

  function refresh() {
    const inner = document.getElementById('simInner');
    if (!inner) return;
    inner.innerHTML = renderSimulate(buildStateRef, simState);
    const chip = document.getElementById('simStatusChip');
    if (chip) chip.textContent = `DAY ${simState.day} / 30${simState.activeEvent ? ' ⚠ ' + simState.activeEvent.toUpperCase() : ''}`;
    wire();
  }

  function wire() {
    const w = document.getElementById('simWrap');
    if (!w) return;

    w.querySelector('#simPlayBtn')?.addEventListener('click', () => {
      simState.running = !simState.running;
      if (simState.running) {
        stopTicker();
        simState._ticker = setInterval(() => {
          if (simState.day >= 30) { stopTicker(); simState.running = false; refresh(); return; }
          simState.day++;
          refresh();
        }, 600);
      } else {
        stopTicker();
      }
      refresh();
    });

    w.querySelector('#simPrev')?.addEventListener('click', () => {
      stopTicker(); simState.running = false;
      simState.day = Math.max(1, simState.day - 1); refresh();
    });
    w.querySelector('#simNext')?.addEventListener('click', () => {
      stopTicker(); simState.running = false;
      simState.day = Math.min(30, simState.day + 1); refresh();
    });
    w.querySelector('#simFast')?.addEventListener('click', () => {
      stopTicker(); simState.running = false;
      simState.day = Math.min(30, simState.day + 5); refresh();
    });
    w.querySelector('#simReset')?.addEventListener('click', () => {
      stopTicker(); simState.running = false;
      simState.day = 1; simState.activeEvent = null; simState.eventDay = null; refresh();
    });
    w.querySelector('#simScrub')?.addEventListener('input', (e) => {
      stopTicker(); simState.running = false;
      simState.day = parseInt(e.target.value, 10); refresh();
    });

    w.querySelectorAll('.sim-evt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const ev = btn.dataset.event;
        stopTicker(); simState.running = false;
        simState.activeEvent = simState.activeEvent === ev ? null : ev;
        simState.eventDay = simState.activeEvent ? simState.day : null;
        refresh();
      });
    });

    w.querySelector('#simClearEvent')?.addEventListener('click', () => {
      simState.activeEvent = null; simState.eventDay = null; refresh();
    });

    // Wire up "OPEN TRACE GRAPH" to trigger the main nav trace button
    w.querySelector('[data-nav="trace"]')?.addEventListener('click', () => {
      const navBtn = document.querySelector('.nav button[data-nav="trace"]');
      if (navBtn) navBtn.click();
    });
  }

  wire();
}
