/**
 * HABITAT-X — Crew Resilience Module
 * Human Performance Layer: shows individual crew stats driven by simState events.
 * Build → Simulate → Crew is the full chain.
 */

import { simState } from '../simulate/simulate.js';
import { buildState } from '../build/build.js';

// ─── Crew Roster ──────────────────────────────────────────────────────────────
const BASE_CREW = [
  { id: 'chen',   name: 'Sarah Chen',   role: 'Commander',    color: '#5da7ef', initials: 'SC', slp: 70, fat: 22, act: 88, wl: 78 },
  { id: 'tanaka', name: 'Yuki Tanaka',  role: 'Engineer',     color: '#50e3c2', initials: 'YT', slp: 74, fat: 20, act: 82, wl: 72 },
  { id: 'robb',   name: 'Marcus Robb',  role: 'Geologist',    color: '#f4ad3f', initials: 'MR', slp: 64, fat: 12, act: 76, wl: 65 },
  { id: 'diwei',  name: 'Amara Diwei',  role: 'Doctor',       color: '#ee7788', initials: 'AD', slp: 70, fat: 34, act: 71, wl: 80 },
  { id: 'sharma', name: 'Priya Sharma', role: 'Life Science',  color: '#998877', initials: 'PS', slp: 88, fat: 20, act: 90, wl: 68 },
  { id: 'reeves', name: 'Tom Reeves',   role: 'Crew Member',  color: '#88aacc', initials: 'TR', slp: 88, fat: 14, act: 85, wl: 60 },
];

export const crewState = {
  selectedId: 'chen',
  scanning: false,
  day: 1,
};

// ─── Event impact on crew stats ───────────────────────────────────────────────
function getEventModifiers(activeEvent, day) {
  const x = Math.min(day - 1, 29);
  switch (activeEvent) {
    case 'heat':
      return { slp: -(x * 0.8), fat: +(x * 1.2), act: -(x * 0.5), wl: +(x * 1.0) };
    case 'water':
      return { slp: -(x * 0.6), fat: +(x * 1.5), act: -(x * 1.0), wl: +(x * 0.8) };
    case 'power':
      return { slp: -(x * 1.0), fat: +(x * 0.9), act: -(x * 0.7), wl: +(x * 1.2) };
    case 'storm':
      return { slp: -(x * 1.2), fat: +(x * 1.0), act: -(x * 1.5), wl: +(x * 0.6) };
    default:
      return { slp: 0, fat: 0, act: 0, wl: 0 };
  }
}

function applyMods(base, mods) {
  return {
    slp: Math.round(Math.max(5, Math.min(100, base.slp + mods.slp))),
    fat: Math.round(Math.max(0, Math.min(100, base.fat + mods.fat))),
    act: Math.round(Math.max(5, Math.min(100, base.act + mods.act))),
    wl:  Math.round(Math.max(5, Math.min(100, base.wl  + mods.wl))),
  };
}

function getCrewStats(member) {
  const mods = getEventModifiers(simState.activeEvent, simState.day);
  // Each crew member has slight personal variation on mods
  const varMod = { slp: mods.slp * (0.85 + Math.random() * 0.3), fat: mods.fat * (0.85 + Math.random() * 0.3), act: mods.act * (0.85 + Math.random() * 0.3), wl: mods.wl * (0.85 + Math.random() * 0.3) };
  return applyMods(member, varMod);
}

function fleetResilience(allStats) {
  const avg = allStats.reduce((sum, s) => sum + (s.slp * 0.4 + (100 - s.fat) * 0.3 + s.act * 0.3), 0) / allStats.length;
  return Math.round(avg);
}

// ─── 24H Activity Trace Data ─────────────────────────────────────────────────
function activityTrace(memberId, activeEvent, day) {
  // Seeded pseudo-random per crew member
  const seed = memberId.charCodeAt(0) + memberId.charCodeAt(1);
  const base = Array.from({ length: 25 }, (_, h) => {
    // Simulate circadian rhythm: low at night, peak mid-morning and late afternoon
    const circ = 40 + 35 * Math.sin((h - 6) * Math.PI / 12);
    const noise = (Math.sin(h * seed * 0.37 + day * 0.7) * 12);
    return Math.max(5, Math.min(100, circ + noise));
  });

  // Event effects on activity pattern
  const mods = getEventModifiers(activeEvent, day);
  return base.map(v => Math.max(5, Math.min(100, v + mods.act)));
}

// ─── SVG Sparkline ───────────────────────────────────────────────────────────
function activitySVG(data, color = '#5da7ef') {
  const W = 760, H = 100;
  const min = Math.min(...data), max = Math.max(...data);
  const range = Math.max(max - min, 1);
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * W;
    const y = H - ((v - min) / range) * (H - 10) - 5;
    return `${x},${y}`;
  }).join(' ');
  // Glow area fill
  const areaBottom = data.map((v, i) => {
    const x = (i / (data.length - 1)) * W;
    return `${x},${H}`;
  }).join(' ');
  const allPts = pts + ` ${(data.length - 1) * (W / (data.length - 1))},${H} 0,${H}`;
  return `
    <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" style="width:100%;height:100%;display:block">
      <defs>
        <linearGradient id="actGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${color}" stop-opacity="0.18"/>
          <stop offset="100%" stop-color="${color}" stop-opacity="0.01"/>
        </linearGradient>
        <radialGradient id="peakGlow" cx="50%" cy="55%" r="35%">
          <stop offset="0%" stop-color="#f4ad3f" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#f4ad3f" stop-opacity="0"/>
        </radialGradient>
        <filter id="lineGlow">
          <feGaussianBlur stdDeviation="1.8" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#peakGlow)"/>
      <polygon points="${allPts}" fill="url(#actGrad)"/>
      <polyline points="${pts}" fill="none" stroke="${color}" stroke-width="2.2"
        stroke-linejoin="round" stroke-linecap="round" filter="url(#lineGlow)"/>
    </svg>`;
}

// ─── Bar Component ────────────────────────────────────────────────────────────
function statBar(label, value, color, dangerBelow = null, dangerAbove = null) {
  let barColor = color;
  let status = 'NOMINAL';
  if (dangerBelow !== null && value < dangerBelow) { barColor = '#ff5b5b'; status = 'CRITICAL'; }
  else if (dangerAbove !== null && value > dangerAbove) { barColor = '#ff5b5b'; status = 'CRITICAL'; }
  else if ((dangerBelow !== null && value < dangerBelow + 20) || (dangerAbove !== null && value > dangerAbove - 15)) { barColor = '#f4ad3f'; status = 'CAUTION'; }
  return `
    <div class="cr-bar-row">
      <div class="cr-bar-label">
        <span>${label}</span>
        <span style="color:${barColor}">${value}%${status !== 'NOMINAL' ? ' · ' + status : ''}</span>
      </div>
      <div class="cr-bar-trk">
        <div class="cr-bar-fill" style="width:${value}%;background:${barColor}"></div>
      </div>
    </div>`;
}

// ─── Alert logic ──────────────────────────────────────────────────────────────
function getAlerts(allStats, activeEvent, day) {
  const alerts = [];
  allStats.forEach((s, i) => {
    const m = BASE_CREW[i];
    if (s.fat > 60) alerts.push({ level: 'critical', msg: `${m.name}: Fatigue index critical (${s.fat}%)` });
    else if (s.fat > 45) alerts.push({ level: 'warning', msg: `${m.name}: Fatigue index elevated (${s.fat}%)` });
    if (s.slp < 40) alerts.push({ level: 'critical', msg: `${m.name}: Sleep quality below threshold (${s.slp}%)` });
    else if (s.slp < 55) alerts.push({ level: 'warning', msg: `${m.name}: Sleep quality reduced (${s.slp}%)` });
  });
  return alerts;
}

const SIM_DAY_MARKERS = [
  { d: 'D04', label: 'Baseline nominal', color: '#4e6579' },
  { d: 'D07', label: 'Fatigue peak',     color: '#4e6579' },
  { d: 'D12', label: 'Sleep compression',color: '#4e6579' },
  { d: 'D18', label: 'Critical stress',  color: '#f4ad3f' },
  { d: 'D27', label: 'Recovery phase',   color: '#4e6579' },
];

const ENV_LINKS = [
  { id: 'heat',  icon: 'T↑', label: 'HEAT EVENT',    sub: 'Elevates fatigue index' },
  { id: 'water', icon: 'H₂O↓',label: 'WATER STRESS', sub: 'Elevates dehydration' },
  { id: 'power', icon: 'E↓', label: 'POWER LOSS',    sub: 'Reduces lighting, mood' },
  { id: 'storm', icon: '🌪',  label: 'CREW EXPAND',  sub: 'Reduces crew density / transition' },
];

// ─── Main Render ─────────────────────────────────────────────────────────────
export function renderCrew() {
  const day = simState.day;
  const activeEvent = simState.activeEvent;

  // Compute live stats for all crew
  const allStats = BASE_CREW.map(m => getCrewStats(m));
  const resilience = fleetResilience(allStats);

  const sel = BASE_CREW.find(m => m.id === crewState.selectedId) || BASE_CREW[0];
  const selStats = allStats[BASE_CREW.indexOf(sel)];
  const trace = activityTrace(sel.id, activeEvent, day);
  const alerts = getAlerts(allStats, activeEvent, day);

  // Roster items
  const rosterHTML = BASE_CREW.map((m, i) => {
    const s = allStats[i];
    const isActive = m.id === crewState.selectedId;
    const fatCrit = s.fat > 60;
    const slpCrit = s.slp < 40;
    const hasCrit = fatCrit || slpCrit;
    return `
      <button class="cr-roster-item ${isActive ? 'active' : ''} ${hasCrit ? 'crit' : ''}"
        data-crew="${m.id}" style="${isActive ? `border-left-color:${m.color}` : ''}">
        <div class="cr-avatar" style="background:${m.color}22;border-color:${m.color};color:${m.color}">${m.initials}</div>
        <div class="cr-roster-body">
          <div class="cr-roster-name">${m.name}</div>
          <div class="cr-roster-role">${m.role}</div>
          <div class="cr-roster-stats">
            <span>SLP <b style="color:${s.slp < 50 ? '#ff5b5b' : '#78bde8'}">${s.slp}%</b></span>
            <span>FAT <b style="color:${s.fat > 50 ? '#ff5b5b' : s.fat > 35 ? '#f4ad3f' : '#78bde8'}">${s.fat}%</b></span>
          </div>
        </div>
        ${hasCrit ? '<span class="cr-alert-dot"></span>' : ''}
      </button>`;
  }).join('');

  // Alert panel
  const alertsHTML = alerts.length === 0
    ? `<div class="cr-alert-ok"><span style="color:var(--green)">● </span>ALL CREW WITHIN NOMINAL OPERATING PARAMETERS. No alerts at current simulation day.</div>`
    : alerts.map(a => `<div class="cr-alert-item ${a.level}">
        <span class="cr-alert-icon">${a.level === 'critical' ? '⚠' : '◆'}</span>
        <span>${a.msg}</span>
      </div>`).join('');

  return `
  <div class="cr-layout" id="crewWrap">
    <!-- LEFT: Roster -->
    <div class="cr-left">
      <div class="cr-section-hd">CREW ROSTER</div>
      <div class="cr-roster" id="crRoster">
        ${rosterHTML}
      </div>
      <div class="cr-fleet">
        <div class="cr-fleet-label">FLEET RESILIENCE</div>
        <div class="cr-fleet-score" style="color:${resilience < 40 ? 'var(--red)' : resilience < 65 ? 'var(--amber)' : 'var(--green)'}">
          ${resilience}<span class="cr-pct">%</span>
        </div>
        <div class="cr-fleet-sub">COMPOSITE SCORE / ALL CREW</div>
      </div>
    </div>

    <!-- CENTER -->
    <div class="cr-center">
      <!-- Member header -->
      <div class="cr-member-hd">
        <div>
          <div class="kicker">SELECTED CREW MEMBER</div>
          <div class="cr-member-title">${sel.name} / ${sel.role}</div>
        </div>
        <button class="btn" id="crResetBtn">RESET BASELINE</button>
      </div>

      <!-- Stat bars -->
      <div class="cr-bars-grid">
        <div class="cr-bars-col">
          ${statBar('SLEEP QUALITY',  selStats.slp, '#50e3c2',  50,  null)}
          ${statBar('FATIGUE INDEX',  selStats.fat, '#f4ad3f',  null, 60)}
        </div>
        <div class="cr-bars-col">
          ${statBar('ACTIVITY LEVEL', selStats.act, '#5da7ef',  40,  null)}
          ${statBar('WORKLOAD',        selStats.wl,  '#88aacc',  null, 80)}
        </div>
      </div>

      <!-- Activity trace -->
      <div class="cr-card cr-chart-card">
        <div class="cr-chart-hd">
          <span class="kicker">MOVEMENT PATTERN / 24H ACTIVITY TRACE</span>
          <span style="font:8px var(--mono);color:#4e6579">DAY ${day} / ${sel.name.toUpperCase()}</span>
        </div>
        <div class="cr-chart" id="crChart">
          ${activitySVG(trace, sel.color)}
        </div>
        <div class="cr-time-labels">
          <span>00H</span><span>06H</span><span>12H</span><span>18H</span><span>24H</span>
        </div>
      </div>

      <!-- Environment → Crew links -->
      <div class="cr-env-section">
        <div class="kicker" style="margin-bottom:8px">ENVIRONMENT → CREW LINK</div>
        <div class="cr-env-grid">
          ${ENV_LINKS.map(e => {
            const isActive = activeEvent === e.id;
            return `<div class="cr-env-card ${isActive ? 'active' : ''}">
              <div class="cr-env-icon" style="color:${isActive ? 'var(--amber)' : '#4e6579'}">${e.icon}</div>
              <div class="cr-env-label" style="color:${isActive ? 'var(--amber)' : '#6e8294'}">${e.label}</div>
              <div class="cr-env-sub">${e.sub}</div>
              <div class="cr-env-dot" style="background:${isActive ? 'var(--amber)' : '#223444'}"></div>
            </div>`;
          }).join('')}
        </div>
      </div>
    </div>

    <!-- RIGHT: Alerts + Day Markers -->
    <div class="cr-right">
      <div class="cr-card">
        <div class="cr-section-hd">CREW ALERTS</div>
        <div class="cr-alerts" id="crAlerts">${alertsHTML}</div>
      </div>

      <div class="cr-card" style="margin-top:8px">
        <div class="cr-section-hd">SIM DAY MARKERS</div>
        <div class="cr-day-markers">
          ${SIM_DAY_MARKERS.map(m => `
            <div class="cr-day-row" style="${m.d === 'D18' ? 'color:var(--amber)' : ''}">
              <b style="color:${m.d === 'D18' ? 'var(--amber)' : '#3e5a6e'};min-width:28px">${m.d}</b>
              <span>${m.label}</span>
            </div>`).join('')}
        </div>
      </div>

      <div class="cr-card" style="margin-top:8px">
        <div class="cr-section-hd">MEASUREMENT NOTE</div>
        <div class="cr-meas-note">
          The utilisation metrics are prototype indicators. Assume that settlement simulation data, a production system would integrate wearable sensor streams, sleep tracking, and calendar schedules from the lunar/Mars crew.
        </div>
      </div>

      <div class="cr-scan-status cr-card" style="margin-top:8px;${crewState.scanning ? '' : 'display:none'}">
        <div class="cr-section-hd" style="color:var(--cyan)">SCAN RUNNING</div>
        <div class="cr-meas-note">Analysing crew biometric patterns across all ${BASE_CREW.length} crew members for Day ${day}…</div>
        <div class="cr-scan-bar"><div id="crScanFill" class="cr-scan-fill"></div></div>
      </div>
    </div>
  </div>`;
}

// ─── CSS ──────────────────────────────────────────────────────────────────────
const CREW_CSS = `
.cr-layout { display:grid; grid-template-columns:185px 1fr 240px; gap:10px; height:100%; min-height:0; }

/* Left */
.cr-left { display:flex; flex-direction:column; gap:8px; overflow-y:auto; }
.cr-section-hd { font:700 8px var(--mono); letter-spacing:1.2px; color:#4e6a7e; text-transform:uppercase; margin-bottom:6px; }
.cr-roster { display:flex; flex-direction:column; gap:4px; flex:1; }
.cr-roster-item { display:grid; grid-template-columns:36px 1fr auto; gap:8px; align-items:center; padding:8px 9px; border:1px solid #1a2d3d; background:#050e19; text-align:left; cursor:pointer; position:relative; }
.cr-roster-item:hover { border-color:#3a6080; background:#07141f; }
.cr-roster-item.active { border-left:2px solid; background:#071927; }
.cr-roster-item.crit { border-right:2px solid var(--red); }
.cr-avatar { width:34px; height:34px; border-radius:50%; border:1px solid; display:flex; align-items:center; justify-content:center; font:700 10px var(--mono); flex-shrink:0; }
.cr-roster-name { font:600 9px var(--mono); color:#b8d4ea; }
.cr-roster-role { font:8px var(--mono); color:#4e6579; margin-top:1px; }
.cr-roster-stats { font:7px var(--mono); color:#4e6579; margin-top:3px; display:flex; gap:8px; }
.cr-roster-stats b { font-weight:700; }
.cr-alert-dot { width:7px; height:7px; border-radius:50%; background:var(--red); animation:warningPulse 1.5s infinite; }
.cr-fleet { padding:12px; background:#060f1a; border:1px solid #1a2d3d; }
.cr-fleet-label { font:700 7px var(--mono); color:#4e6a7e; letter-spacing:1px; }
.cr-fleet-score { font:700 42px var(--mono); margin:6px 0 2px; line-height:1; }
.cr-pct { font-size:20px; }
.cr-fleet-sub { font:7px var(--mono); color:#3e5a6e; }

/* Center */
.cr-center { display:flex; flex-direction:column; gap:8px; min-height:0; overflow-y:auto; }
.cr-member-hd { display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; padding:10px 12px; background:#060f1a; border:1px solid #1a2d3d; }
.cr-member-title { font:700 18px var(--mono); margin-top:4px; color:#d1e6f6; }
.cr-bars-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
.cr-bars-col { background:#060f1a; border:1px solid #1a2d3d; padding:10px 12px; display:flex; flex-direction:column; gap:8px; }
.cr-bar-row { display:flex; flex-direction:column; gap:4px; }
.cr-bar-label { display:flex; justify-content:space-between; font:600 8px var(--mono); color:#5a7a90; }
.cr-bar-trk { height:5px; background:#0e1d29; border-radius:3px; }
.cr-bar-fill { height:100%; border-radius:3px; transition:width 0.6s ease; }
.cr-card { background:#060f1a; border:1px solid #1a2d3d; padding:10px 12px; }
.cr-chart-card { flex:1; min-height:160px; }
.cr-chart-hd { display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
.cr-chart { flex:1; min-height:130px; background:#03080e; border:1px solid #0e1d2a; border-radius:2px; overflow:hidden; }
.cr-time-labels { display:flex; justify-content:space-between; font:7px var(--mono); color:#3e5a6e; margin-top:4px; padding:0 4px; }
.cr-env-section { padding:10px 12px; background:#060f1a; border:1px solid #1a2d3d; }
.cr-env-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:6px; }
.cr-env-card { padding:9px; background:#04080e; border:1px solid #1a2d3d; text-align:center; position:relative; }
.cr-env-card.active { border-color:#5a4010; background:#0a1100; }
.cr-env-icon { font:700 12px var(--mono); margin-bottom:3px; }
.cr-env-label { font:700 7px var(--mono); letter-spacing:.4px; }
.cr-env-sub { font:6.5px var(--mono); color:#3e5569; margin-top:3px; line-height:1.4; }
.cr-env-dot { width:6px; height:6px; border-radius:50%; margin:6px auto 0; }

/* Right */
.cr-right { display:flex; flex-direction:column; overflow-y:auto; gap:0; }
.cr-alerts { display:flex; flex-direction:column; gap:5px; }
.cr-alert-ok { font:8px var(--mono); color:#5a7a6e; line-height:1.6; padding:4px 0; }
.cr-alert-item { display:flex; gap:6px; align-items:flex-start; font:8px var(--mono); line-height:1.5; padding:5px 0; border-bottom:1px solid #0f1d2a; }
.cr-alert-item.critical { color:#e08080; }
.cr-alert-item.warning  { color:#c8a050; }
.cr-alert-icon { flex-shrink:0; }
.cr-day-markers { display:flex; flex-direction:column; gap:0; }
.cr-day-row { display:flex; gap:10px; padding:6px 0; border-bottom:1px solid #0f1d2a; font:8px var(--mono); color:#4e6579; }
.cr-meas-note { font:8px var(--mono); color:#4e6579; line-height:1.6; }
.cr-scan-bar { height:3px; background:#0e1d29; border-radius:2px; margin-top:8px; overflow:hidden; }
.cr-scan-fill { height:100%; background:var(--cyan); animation:scanPulse 1.2s ease-in-out infinite; }
@keyframes scanPulse { 0%{width:0} 50%{width:100%} 100%{width:0} }

@media(max-width:1100px) {
  .cr-layout { grid-template-columns:160px 1fr; }
  .cr-right { grid-column:1/-1; }
  .cr-env-grid { grid-template-columns:repeat(2,1fr); }
}
@media(max-width:700px) {
  .cr-layout { grid-template-columns:1fr; }
  .cr-bars-grid { grid-template-columns:1fr; }
  .cr-env-grid { grid-template-columns:1fr 1fr; }
}
`;

let _crewCSSInjected = false;
export function injectCrewCSS() {
  if (_crewCSSInjected) return;
  const s = document.createElement('style');
  s.id = 'crew-css';
  s.textContent = CREW_CSS;
  document.head.appendChild(s);
  _crewCSSInjected = true;
}

// ─── Event Wiring ─────────────────────────────────────────────────────────────
export function attachCrewEvents() {
  function refresh() {
    const inner = document.getElementById('crewInner');
    if (!inner) return;
    inner.innerHTML = renderCrew();
    wire();
  }

  function runScan() {
    crewState.scanning = true;
    refresh();
    setTimeout(() => { crewState.scanning = false; refresh(); }, 2000);
  }

  function wire() {
    const w = document.getElementById('crewWrap');
    if (!w) return;

    // Roster selection
    w.querySelectorAll('.cr-roster-item').forEach(btn => {
      btn.addEventListener('click', () => {
        crewState.selectedId = btn.dataset.crew;
        refresh();
      });
    });

    // Reset baseline
    w.querySelector('#crResetBtn')?.addEventListener('click', () => {
      simState.day = 1;
      simState.activeEvent = null;
      simState.eventDay = null;
      refresh();
    });
  }

  wire();

  // Header button: RUN CREW SCAN
  const scanBtn = document.getElementById('crScanBtn');
  if (scanBtn) {
    scanBtn.addEventListener('click', () => {
      runScan();
    });
  }
}
