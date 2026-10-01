/**
 * HABITAT-X — High Performance Build Module
 * Fast, 60fps in-place DOM updates with continuous tool stamping
 */

export const BUILDINGS = {
  habitat: {
    id: 'habitat', name: 'Core Habitat', icon: '⛺', color: '#5da7ef',
    desc: 'Provides shelter for crew. Consumes power/water.',
    cost: 400,
    stats: { shelter: 8, power: -15, water: -10, food: -5, o2: -2, thermal: 5, shielding: 10, medical: 0 }
  },
  solar: {
    id: 'solar', name: 'Solar Array', icon: '☀️', color: '#f4ad3f',
    desc: 'Generates power during the day.',
    cost: 150,
    stats: { shelter: 0, power: 25, water: 0, food: 0, o2: 0, thermal: 0, shielding: 0, medical: 0 }
  },
  water_extractor: {
    id: 'water_extractor', name: 'Ice Extractor', icon: '💧', color: '#50e3c2',
    desc: 'Extracts subsurface water/ice. Consumes power.',
    cost: 250,
    stats: { shelter: 0, power: -10, water: 30, food: 0, o2: 0, thermal: 0, shielding: 0, medical: 0 }
  },
  greenhouse: {
    id: 'greenhouse', name: 'Greenhouse', icon: '🌱', color: '#5faa90',
    desc: 'Produces food and recycles air.',
    cost: 300,
    stats: { shelter: 0, power: -5, water: -15, food: 20, o2: 10, thermal: 0, shielding: 0, medical: 0 }
  },
  battery: {
    id: 'battery', name: 'Battery Bank', icon: '🔋', color: '#e2b15e',
    desc: 'Stores excess power for night operations.',
    cost: 120,
    stats: { shelter: 0, power: 0, water: 0, food: 0, o2: 0, thermal: 0, shielding: 0, medical: 0, storePower: 100 }
  },
  tank: {
    id: 'tank', name: 'Water Tank', icon: '🛢️', color: '#6da8c8',
    desc: 'Stores excess water for emergencies.',
    cost: 100,
    stats: { shelter: 0, power: 0, water: 0, food: 0, o2: 0, thermal: 0, shielding: 0, medical: 0, storeWater: 200 }
  },
  o2_gen: {
    id: 'o2_gen', name: 'O2 System', icon: '💨', color: '#88aacc',
    desc: 'Extracts oxygen via ISRU (Sabatier/MOXIE).',
    cost: 200,
    stats: { shelter: 0, power: -20, water: 0, food: 0, o2: 30, shielding: 0, thermal: 0, medical: 0 }
  },
  shielding: {
    id: 'shielding', name: 'Regolith Shield', icon: '🛡️', color: '#998877',
    desc: 'Critical radiation protection for crew.',
    cost: 150,
    stats: { shelter: 0, power: 0, water: 0, food: 0, o2: 0, shielding: 50, thermal: 10, medical: 0 }
  },
  thermal: {
    id: 'thermal', name: 'Thermal Control', icon: '🌡️', color: '#dd5555',
    desc: 'Active heating/cooling for extreme environments.',
    cost: 100,
    stats: { shelter: 0, power: -15, water: 0, food: 0, o2: 0, shielding: 0, thermal: 40, medical: 0 }
  },
  medbay: {
    id: 'medbay', name: 'Medical Bay', icon: '⚕️', color: '#ee7788',
    desc: 'Healthcare and emergency response.',
    cost: 350,
    stats: { shelter: 0, power: -10, water: -5, food: 0, o2: 0, shielding: 0, thermal: 0, medical: 20 }
  }
};

const GRID_COLS = 12;
const GRID_ROWS = 8;

export const buildState = {
  initialBudget: 4000,
  crewTarget: 24,
  grid: Array(GRID_ROWS).fill(null).map(() => Array(GRID_COLS).fill(null)),
  selectedCell: null,
  activeTool: 'solar',
  hoverOption: null
};

// Start with 2 core habitats
buildState.grid[3][5] = { id: 'b1', buildingId: 'habitat' };
buildState.grid[3][6] = { id: 'b2', buildingId: 'habitat' };

export function getTotals(state) {
  let totals = {
    powerGen: 0, powerUse: 0, waterGen: 0, waterUse: 0, foodGen: 0, foodUse: 0,
    shelter: 0, storageP: 0, storageW: 0, o2Gen: 0, o2Use: 0, thermalGen: 0,
    shieldingGen: 0, medGen: 0, cost: 0
  };
  
  for (let r = 0; r < GRID_ROWS; r++) {
    for (let c = 0; c < GRID_COLS; c++) {
      const cell = state.grid[r][c];
      if (cell && BUILDINGS[cell.buildingId]) {
        const b = BUILDINGS[cell.buildingId];
        if (b.stats.power > 0) totals.powerGen += b.stats.power; else totals.powerUse -= b.stats.power;
        if (b.stats.water > 0) totals.waterGen += b.stats.water; else totals.waterUse -= b.stats.water;
        if (b.stats.food > 0) totals.foodGen += b.stats.food; else totals.foodUse -= b.stats.food;
        if (b.stats.o2 > 0) totals.o2Gen += b.stats.o2; else totals.o2Use -= (b.stats.o2 || 0);
        totals.shelter += b.stats.shelter || 0;
        totals.thermalGen += b.stats.thermal || 0;
        totals.shieldingGen += b.stats.shielding || 0;
        totals.medGen += b.stats.medical || 0;
        if (b.stats.storePower) totals.storageP += b.stats.storePower;
        if (b.stats.storeWater) totals.storageW += b.stats.storeWater;
        totals.cost += b.cost;
      }
    }
  }
  return totals;
}

const METRICS_DEF = [
  { key: 'shelter', label: 'SHELTER CAPACITY', unit: 'caps', color: '#5da7ef' },
  { key: 'power', label: 'POWER GENERATION', unit: 'kW', color: '#f4ad3f' },
  { key: 'storageP', label: 'POWER STORAGE', unit: 'kWh', color: '#e2b15e' },
  { key: 'water', label: 'WATER SUPPLY', unit: 'L/d', color: '#50e3c2' },
  { key: 'storageW', label: 'WATER STORAGE', unit: 'L', color: '#6da8c8' },
  { key: 'food', label: 'FOOD PRODUCTION', unit: 'kg/d', color: '#5faa90' },
  { key: 'o2', label: 'O2 GENERATION', unit: 'units', color: '#88aacc' },
  { key: 'thermal', label: 'THERMAL CONTROL', unit: 'units', color: '#dd5555' },
  { key: 'shielding', label: 'RADIATION SHIELDING', unit: 'units', color: '#998877' },
  { key: 'med', label: 'MEDICAL CAPACITY', unit: 'beds', color: '#ee7788' }
];

function calcRequirements(totals, crew) {
  return {
    shelter: { val: totals.shelter, req: crew },
    power: { val: totals.powerGen, req: totals.powerUse + (crew * 2) },
    storageP: { val: totals.storageP, req: Math.round((totals.powerUse + (crew * 2)) * 0.5) },
    water: { val: totals.waterGen, req: totals.waterUse + (crew * 5) },
    storageW: { val: totals.storageW, req: Math.round((totals.waterUse + (crew * 5)) * 2) },
    food: { val: totals.foodGen, req: totals.foodUse + (crew * 2) },
    o2: { val: totals.o2Gen, req: crew * 2 },
    thermal: { val: totals.thermalGen, req: crew * 3 },
    shielding: { val: totals.shieldingGen, req: crew * 4 },
    med: { val: totals.medGen, req: Math.ceil(crew / 10) * 10 }
  };
}

function renderResourceBarsHTML(reqs) {
  return METRICS_DEF.map(m => {
    const r = reqs[m.key];
    const pct = Math.min(100, Math.max(0, (r.val / (r.req || 1)) * 100));
    const isDanger = r.val < r.req;
    const barColor = isDanger ? 'var(--amber)' : m.color;
    return `
      <div class="bld-res-bar" data-stat="${m.key}">
        <div class="bld-res-hd">
          <span>${m.label}</span>
          <span class="stat-val" style="color:${barColor}">${r.val} / ${r.req} ${m.unit}</span>
        </div>
        <div class="bld-res-trk">
          <div class="bld-res-fill" style="width:${pct}%;background:${barColor}"></div>
          ${r.req > 0 ? `<div class="bld-res-target" style="left:100%"></div>` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function renderCellInspector(state) {
  if (!state.selectedCell) return '';
  const { r, c } = state.selectedCell;
  const cell = state.grid[r][c];
  if (!cell || !BUILDINGS[cell.buildingId]) return '';
  const b = BUILDINGS[cell.buildingId];
  return `
    <div class="bld-tool-info" style="margin-bottom:10px;border:1px solid #28445e;background:#061320;padding:8px 10px;border-radius:3px;">
      <div class="kicker" style="display:flex;justify-content:space-between;">
        <span>TILE [${r}, ${c}]</span>
        <span style="color:${b.color}">${b.name.toUpperCase()}</span>
      </div>
      <div class="bld-b-hd" style="display:flex;align-items:center;gap:8px;padding:4px 0;">
        <span style="font-size:18px;">${b.icon}</span>
        <div><strong style="font-size:10px;color:#d5ecff;">${b.name}</strong> <small style="color:#6d8aa0;display:block;font-size:8px;">${b.desc}</small></div>
      </div>
      <button class="btn bld-btn-demolish" id="btnDemolish" style="padding:5px 8px;font-size:8px;margin-top:4px;">DEMOLISH (+${Math.floor(b.cost * 0.5)} M$ REFUND)</button>
    </div>
  `;
}

export function renderBuild(state) {
  const totals = getTotals(state);
  const remBudget = state.initialBudget - totals.cost;
  const crew = state.crewTarget;
  const reqs = calcRequirements(totals, crew);

  let gridHtml = '';
  for (let r = 0; r < GRID_ROWS; r++) {
    for (let c = 0; c < GRID_COLS; c++) {
      const cell = state.grid[r][c];
      const isSelected = state.selectedCell && state.selectedCell.r === r && state.selectedCell.c === c;
      if (cell && BUILDINGS[cell.buildingId]) {
        const b = BUILDINGS[cell.buildingId];
        gridHtml += `<div class="bld-cell filled ${isSelected ? 'selected' : ''}" data-r="${r}" data-c="${c}" style="border-color:${b.color}">
          <span class="bld-cell-icon">${b.icon}</span>
        </div>`;
      } else {
        gridHtml += `<div class="bld-cell empty ${isSelected ? 'selected' : ''}" data-r="${r}" data-c="${c}"></div>`;
      }
    }
  }

  let optionsListHtml = '';
  for (const key in BUILDINGS) {
    const b = BUILDINGS[key];
    const canAfford = remBudget >= b.cost;
    const isActive = state.activeTool === key;
    optionsListHtml += `
      <button class="bld-opt-card ${canAfford ? '' : 'locked'} ${isActive ? 'active-tool' : ''}" data-build="${key}">
        <div class="bld-opt-top">
          <span class="bld-opt-ic">${b.icon}</span>
          <div class="bld-opt-name">
            <strong>${b.name}</strong>
            ${isActive ? '<span class="tool-badge">ACTIVE</span>' : ''}
          </div>
          <div class="bld-opt-cost ${canAfford ? '' : 'red'}">${b.cost} M$</div>
        </div>
        <div class="bld-opt-stats" style="flex-wrap: wrap;">
          ${b.stats.power !== 0 ? `<span style="color:${b.stats.power > 0 ? '#50e3c2' : '#f5a623'}">⚡ ${b.stats.power > 0 ? '+' : ''}${b.stats.power}</span>` : ''}
          ${b.stats.water !== 0 ? `<span style="color:${b.stats.water > 0 ? '#5da7ef' : '#f5a623'}">💧 ${b.stats.water > 0 ? '+' : ''}${b.stats.water}</span>` : ''}
          ${b.stats.food !== 0 ? `<span style="color:${b.stats.food > 0 ? '#5faa90' : '#f5a623'}">🌱 ${b.stats.food > 0 ? '+' : ''}${b.stats.food}</span>` : ''}
          ${b.stats.o2 !== 0 ? `<span style="color:${b.stats.o2 > 0 ? '#88aacc' : '#f5a623'}">💨 ${b.stats.o2 > 0 ? '+' : ''}${b.stats.o2}</span>` : ''}
          ${b.stats.thermal !== 0 ? `<span style="color:#dd5555">🌡️ +${b.stats.thermal}</span>` : ''}
          ${b.stats.shielding !== 0 ? `<span style="color:#998877">🛡️ +${b.stats.shielding}</span>` : ''}
          ${b.stats.medical !== 0 ? `<span style="color:#ee7788">⚕️ +${b.stats.medical}</span>` : ''}
          ${b.stats.shelter !== 0 ? `<span>⛺ +${b.stats.shelter}</span>` : ''}
          ${b.stats.storePower ? `<span style="color:#e2b15e">🔋 +${b.stats.storePower}</span>` : ''}
          ${b.stats.storeWater ? `<span style="color:#6da8c8">🛢️ +${b.stats.storeWater}</span>` : ''}
        </div>
      </button>
    `;
  }

  const isViable = Object.values(reqs).every(r => r.val >= r.req) && remBudget >= 0;

  return `<div class="bld-layout" id="bldWrap">
    <!-- LEFT PANEL -->
    <div class="bld-left hud-card">
      <div class="kicker">MISSION CONSTRAINTS</div>
      
      <div class="bld-input-group">
        <label>INITIAL BUDGET (M$)</label>
        <input type="number" id="inpBudget" value="${state.initialBudget}" min="500" max="10000" step="100">
        <div class="bld-rem ${remBudget < 0 ? 'red' : ''}">Remaining: <strong id="lblRemBudget">${remBudget} M$</strong></div>
      </div>
      
      <div class="bld-input-group">
        <label>MISSION CREW TARGET</label>
        <input type="number" id="inpCrew" value="${crew}" min="4" max="100" step="2">
        <div class="bld-rem">Defines base power/water/O2 demand</div>
      </div>

      <div class="kicker" style="margin-top: 14px;">SETTLEMENT BALANCE</div>
      
      <div class="bld-res-group" id="bldResGroup">
        ${renderResourceBarsHTML(reqs)}
      </div>
      
      <div class="bld-status-box ${isViable ? 'ok' : 'warn'}" id="bldStatusBox" style="margin-top:auto">
        <strong id="bldStatusTitle">${isViable ? 'SYSTEMS NOMINAL' : 'SYSTEMS CRITICAL'}</strong>
        <p id="bldStatusDesc">${isViable ? 'Settlement can support the target crew.' : 'Resources insufficient for mission target.'}</p>
      </div>
      
      <button class="btn btn-primary" id="btnConfirmBuild" style="width:100%; margin-top:8px">CONFIRM SETTLEMENT →</button>
    </div>

    <!-- CENTER PANEL -->
    <div class="bld-center hud-card">
      <div class="bld-center-hd">
        <div>
          <div class="kicker">SETTLEMENT TOPOLOGY</div>
          <p style="font-size: 10px; color: #728c9f; margin: 3px 0 0;">Pick any tool on the right, then click grid cells to stamp modules in real time.</p>
        </div>
        <div class="bld-grid-legend">
          <span>⛺ Habitat</span>
          <span>☀️ Solar</span>
          <span>💧 Water</span>
          <span>🌱 Food</span>
        </div>
      </div>
      <div class="bld-grid-wrap">
        <div class="bld-grid" id="bldGrid" style="grid-template-columns: repeat(${GRID_COLS}, 1fr);">
          ${gridHtml}
        </div>
      </div>
    </div>

    <!-- RIGHT PANEL -->
    <div class="bld-right hud-card" id="bldRightPanel">
      <div id="bldInspectorSlot">${renderCellInspector(state)}</div>
      <div class="kicker" style="display:flex;justify-content:space-between;align-items:center;">
        <span>BUILD PALETTE</span>
        <span style="font-size:7px;color:#50e3c2;">CLICK TOOL TO STAMP</span>
      </div>
      <div class="bld-options-list" id="bldOptionsList">
        ${optionsListHtml}
      </div>
    </div>
  </div>`;
}

// ─── CSS ─────────────────────────────────────────────────────────────────────

const CSS = `
.bld-layout { display: grid; grid-template-columns: 280px 1fr 300px; gap: 10px; min-height: 100%; padding-bottom: 50px; }

.bld-left, .bld-center, .bld-right { display: flex; flex-direction: column; overflow-y: auto; padding: 14px; background: rgba(5,14,24,0.95); border: 1px solid #1a2d3d; will-change: scroll-position; }
.bld-left::-webkit-scrollbar, .bld-center::-webkit-scrollbar, .bld-right::-webkit-scrollbar { width: 3px; }
.bld-left::-webkit-scrollbar-thumb, .bld-center::-webkit-scrollbar-thumb, .bld-right::-webkit-scrollbar-thumb { background: #1d3344; }

/* Left */
.bld-input-group { margin: 6px 0 4px; padding: 8px 10px; background: #06111a; border: 1px solid #233748; }
.bld-input-group label { display: block; font: 600 8px var(--mono); color: #5a7b92; letter-spacing: 0.5px; margin-bottom: 4px; }
.bld-input-group input { width: 100%; background: #040c14; border: 1px solid #35566f; color: #a5d3f5; font: 700 15px var(--mono); padding: 5px 8px; margin-bottom: 4px; outline: none; }
.bld-input-group input:focus { border-color: #5da7ef; }
.bld-rem { font: 8px var(--mono); color: #4e6a7e; }
.bld-rem strong { font-size: 11px; color: #50e3c2; }
.bld-rem.red strong { color: var(--red); }

.bld-res-group { display: flex; flex-direction: column; gap: 8px; margin-top: 8px; }
.bld-res-bar { display: flex; flex-direction: column; gap: 3px; }
.bld-res-hd { display: flex; justify-content: space-between; font: 600 8px var(--mono); color: #728c9f; }
.bld-res-trk { height: 5px; background: #14212b; position: relative; border-radius: 2px; }
.bld-res-fill { height: 100%; border-radius: 2px; }
.bld-res-target { position: absolute; top: -2px; bottom: -2px; width: 2px; background: #fff; z-index: 2; transform: translateX(-50%); }

.bld-status-box { padding: 10px; border: 1px solid; text-align: center; }
.bld-status-box.ok { border-color: #2a5a40; background: rgba(10,30,20,0.6); color: var(--green); }
.bld-status-box.warn { border-color: #6a3030; background: rgba(30,10,10,0.6); color: var(--red); }
.bld-status-box strong { font: 700 11px var(--mono); letter-spacing: 1px; display: block; margin-bottom: 3px; }
.bld-status-box p { font: 8px var(--mono); opacity: 0.8; margin: 0; }

/* Center Grid */
.bld-center-hd { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; gap: 15px;}
.bld-grid-legend { display: flex; gap: 8px; font: 700 8px var(--mono); color: #506a7c; flex-shrink: 0;}
.bld-grid-wrap { flex: 1; display: flex; align-items: center; justify-content: center; background: #040c14; border: 1px solid #101d29; border-radius: 4px; padding: 16px; }
.bld-grid { display: grid; gap: 3px; width: 100%; max-width: 600px; aspect-ratio: 12/8; }
.bld-cell { background: #071522; border: 1px solid #1a2f42; border-radius: 3px; cursor: pointer; display: flex; align-items: center; justify-content: center; position: relative; user-select: none; }
.bld-cell:hover { background: #0d2338; border-color: #3b658a; }
.bld-cell.selected { background: #12314e; border-color: #5da7ef; }
.bld-cell.filled { background: #081a28; border-width: 2px; }
.bld-cell-icon { font-size: 19px; pointer-events: none; }

/* Right */
.bld-options-list { display: flex; flex-direction: column; gap: 5px; margin-top: 6px; }
.bld-opt-card { display: flex; flex-direction: column; gap: 4px; padding: 8px 10px; background: #05101a; border: 1px solid #1f364a; text-align: left; cursor: pointer; border-radius: 3px; }
.bld-opt-card:hover:not(.locked) { border-color: #4a8ec4; background: #081a29; }
.bld-opt-card.active-tool { border-color: #50e3c2 !important; background: #07202c !important; }
.bld-opt-card.locked { opacity: 0.45; cursor: not-allowed; border-color: #302020; }
.bld-opt-top { display: flex; align-items: center; gap: 7px; }
.bld-opt-ic { font-size: 15px; }
.bld-opt-name { flex: 1; font: 600 10px var(--mono); color: #b8d8f0; display: flex; align-items: center; gap: 5px; }
.tool-badge { font: 700 7px var(--mono); color: #50e3c2; background: rgba(80,227,194,0.12); padding: 1px 3px; border-radius: 2px; border: 1px solid rgba(80,227,194,0.4); }
.bld-opt-cost { font: 700 10px var(--mono); color: var(--green); }
.bld-opt-cost.red { color: var(--red); }
.bld-opt-stats { display: flex; gap: 6px; font: 600 8px var(--mono); color: #627b8e; padding-top: 4px; border-top: 1px solid #162838; }

.bld-btn-demolish { background: rgba(60,20,20,0.6) !important; border-color: #8c3b3b !important; color: #e58585 !important; width: 100%; cursor: pointer; }
.bld-btn-demolish:hover { background: rgba(90,30,30,0.8) !important; }

@media(max-width:1000px){ .bld-layout { grid-template-columns: 1fr 1fr; } .bld-center { grid-column: 1/-1; order: -1; min-height: 280px; } }
`;

let _cssInjected = false;
export function injectBuildCSS() {
  if (_cssInjected) return;
  const s = document.createElement('style');
  s.id = 'build-css';
  s.textContent = CSS;
  document.head.appendChild(s);
  _cssInjected = true;
}

// ─── Fast In-Place Update Routine (<1ms) ──────────────────────────────────────

function updateFastStats(wrap, state) {
  const totals = getTotals(state);
  const remBudget = state.initialBudget - totals.cost;
  const crew = state.crewTarget;
  const reqs = calcRequirements(totals, crew);

  // 1. Budget
  const lblRem = wrap.querySelector('#lblRemBudget');
  if (lblRem) {
    lblRem.textContent = remBudget + ' M$';
    lblRem.parentElement.className = 'bld-rem ' + (remBudget < 0 ? 'red' : '');
  }

  // 2. Resource bars (Direct in-place update)
  METRICS_DEF.forEach(m => {
    const barEl = wrap.querySelector(`.bld-res-bar[data-stat="${m.key}"]`);
    if (barEl) {
      const r = reqs[m.key];
      const pct = Math.min(100, Math.max(0, (r.val / (r.req || 1)) * 100));
      const isDanger = r.val < r.req;
      const barColor = isDanger ? 'var(--amber)' : m.color;
      
      const valEl = barEl.querySelector('.stat-val');
      const fillEl = barEl.querySelector('.bld-res-fill');
      if (valEl) {
        valEl.textContent = `${r.val} / ${r.req} ${m.unit}`;
        valEl.style.color = barColor;
      }
      if (fillEl) {
        fillEl.style.width = pct + '%';
        fillEl.style.background = barColor;
      }
    }
  });

  // 3. Viability box
  const isViable = Object.values(reqs).every(r => r.val >= r.req) && remBudget >= 0;
  const statusBox = wrap.querySelector('#bldStatusBox');
  const statusTitle = wrap.querySelector('#bldStatusTitle');
  const statusDesc = wrap.querySelector('#bldStatusDesc');
  if (statusBox && statusTitle && statusDesc) {
    statusBox.className = 'bld-status-box ' + (isViable ? 'ok' : 'warn');
    statusTitle.textContent = isViable ? 'SYSTEMS NOMINAL' : 'SYSTEMS CRITICAL';
    statusDesc.textContent = isViable ? 'Settlement can support the target crew.' : 'Resources insufficient for mission target.';
  }

  // 4. Update option cards affordability
  wrap.querySelectorAll('.bld-opt-card').forEach(btn => {
    const b = BUILDINGS[btn.dataset.build];
    if (b) {
      const canAfford = remBudget >= b.cost;
      btn.classList.toggle('locked', !canAfford);
      const costEl = btn.querySelector('.bld-opt-cost');
      if (costEl) costEl.className = 'bld-opt-cost ' + (canAfford ? '' : 'red');
      btn.classList.toggle('active-tool', state.activeTool === b.id);
      
      const nameEl = btn.querySelector('.bld-opt-name');
      if (nameEl) {
        nameEl.innerHTML = `<strong>${b.name}</strong>${state.activeTool === b.id ? '<span class="tool-badge">ACTIVE</span>' : ''}`;
      }
    }
  });

  // 5. Inspector slot
  const slot = wrap.querySelector('#bldInspectorSlot');
  if (slot) {
    slot.innerHTML = renderCellInspector(state);
    wireDemolish(wrap, state);
  }
}

function updateCellDOM(cellEl, cellData) {
  if (!cellEl) return;
  if (cellData && BUILDINGS[cellData.buildingId]) {
    const b = BUILDINGS[cellData.buildingId];
    cellEl.className = 'bld-cell filled';
    cellEl.style.borderColor = b.color;
    cellEl.innerHTML = `<span class="bld-cell-icon">${b.icon}</span>`;
  } else {
    cellEl.className = 'bld-cell empty';
    cellEl.style.borderColor = '';
    cellEl.innerHTML = '';
  }
}

function wireDemolish(wrap, state) {
  const demoBtn = wrap.querySelector('#btnDemolish');
  if (demoBtn && state.selectedCell) {
    demoBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const { r, c } = state.selectedCell;
      state.grid[r][c] = null;
      
      const cellEl = wrap.querySelector(`.bld-cell[data-r="${r}"][data-c="${c}"]`);
      updateCellDOM(cellEl, null);
      updateFastStats(wrap, state);
    });
  }
}

export function attachBuildEvents(state, onUpdate, onComplete) {
  const wrap = document.getElementById('bldWrap');
  if (!wrap) return;

  // Input changes
  const inpBudget = wrap.querySelector('#inpBudget');
  if (inpBudget) {
    inpBudget.addEventListener('input', (e) => {
      state.initialBudget = parseInt(e.target.value, 10) || 0;
      updateFastStats(wrap, state);
    });
  }
  
  const inpCrew = wrap.querySelector('#inpCrew');
  if (inpCrew) {
    inpCrew.addEventListener('input', (e) => {
      state.crewTarget = parseInt(e.target.value, 10) || 24;
      updateFastStats(wrap, state);
    });
  }

  // Confirm settlement
  const btnConfirm = wrap.querySelector('#btnConfirmBuild');
  if (btnConfirm) {
    btnConfirm.addEventListener('click', onComplete);
  }

  // Palette tool selection
  wrap.querySelectorAll('.bld-opt-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const buildId = btn.dataset.build;
      state.activeTool = buildId;
      
      // If a cell was selected, build immediately
      if (state.selectedCell) {
        const { r, c } = state.selectedCell;
        const b = BUILDINGS[buildId];
        const totals = getTotals(state);
        const rem = state.initialBudget - totals.cost;
        if (rem >= b.cost) {
          state.grid[r][c] = { id: Date.now().toString(), buildingId: buildId };
          const cellEl = wrap.querySelector(`.bld-cell[data-r="${r}"][data-c="${c}"]`);
          updateCellDOM(cellEl, state.grid[r][c]);
        }
      }
      updateFastStats(wrap, state);
    });
  });

  // Grid click
  wrap.querySelectorAll('.bld-cell').forEach(cell => {
    cell.addEventListener('click', () => {
      const r = parseInt(cell.dataset.r, 10);
      const c = parseInt(cell.dataset.c, 10);
      
      wrap.querySelectorAll('.bld-cell.selected').forEach(el => el.classList.remove('selected'));
      cell.classList.add('selected');
      state.selectedCell = { r, c };

      if (state.activeTool && BUILDINGS[state.activeTool]) {
        const b = BUILDINGS[state.activeTool];
        const totals = getTotals(state);
        const rem = state.initialBudget - totals.cost;
        
        if (!state.grid[r][c] && rem >= b.cost) {
          state.grid[r][c] = { id: Date.now().toString(), buildingId: state.activeTool };
          updateCellDOM(cell, state.grid[r][c]);
        }
      }

      updateFastStats(wrap, state);
    });
  });

  wireDemolish(wrap, state);
}
