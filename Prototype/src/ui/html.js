import { STAGES, canEnter } from '../mission/store.js';
import { ANALOGS, CACHED_CLIMATE, byId, moonRemainder, planets } from '../data/catalog.js';
import { catalog } from '../data/catalog.js';

const FACILITY = {
  habitat: { label: 'Habitat', flow: ['crew'] },
  water: { label: 'Water tank', flow: ['water'] },
  energy: { label: 'Power', flow: ['energy'] },
  greenhouse: { label: 'Greenhouse', flow: ['food', 'water'] },
  backup: { label: 'Backup power', flow: ['energy'] }
};

export function badge(text, kind = 'info') {
  return `<span class="src-badge ${kind}">${text}</span>`;
}

export function approx(v) {
  return `<span class="approx">approximate</span> ${v}`;
}

function progressBar(state) {
  const order = STAGES.filter((s) => s.id !== 'landing' && s.id !== 'researcher');
  return `<ol class="stage-progress" aria-label="Mission stages">${order
    .map((s) => {
      const on = state.route === s.id;
      const open = canEnter(s.id, state);
      return `<li class="${on ? 'on' : ''} ${open ? 'open' : 'locked'}"><span>${s.label}</span></li>`;
    })
    .join('')}</ol>`;
}

function hud(state) {
  const analog = ANALOGS[state.analogKey] || ANALOGS.mars;
  const d = state.simResult?.days?.[state.simDay - 1];
  const gauges = d
    ? [['W', d.water], ['F', d.food], ['E', d.energy], ['C', d.crew]]
    : [
        ['W', 92],
        ['F', 88],
        ['E', 94],
        ['C', 35]
      ];
  const obj =
    {
      landing: 'Start tutorial or enter the portal',
      tutorial: 'Complete the guided cascade',
      explore: 'Select Moon or Mars and confirm analog',
      build: 'Place facilities and set initial stocks',
      simulate: 'Run 30 days and inject a shock',
      trace: 'Inspect each failure-chain node',
      intervene: 'Change configuration and re-run same seed',
      compare: 'Review simulator tradeoffs',
      researcher: 'Ask only about simulator output',
      report: 'Export the mission summary'
    }[state.route] || '';
  return `<aside class="mission-hud" aria-label="Mission HUD">
    <div class="mh-row"><span class="kicker">STAGE</span><b>${state.route.toUpperCase()}</b></div>
    <div class="mh-row"><span class="kicker">MISSION DAY</span><b class="tele">${String(state.simDay).padStart(2, '0')}</b></div>
    <div class="mh-row"><span class="kicker">TARGET</span><b>${analog.target.name}</b></div>
    <div class="gauges">${gauges
      .map(([k, v]) => {
        const cls = v < 25 ? 'critical' : v < 50 ? 'warning' : 'nominal';
        return `<div class="g ${cls}" title="${k}"><i style="height:${Math.max(4, Math.min(100, v))}%"></i><em>${k}</em></div>`;
      })
      .join('')}</div>
    <div class="mh-obj"><span class="kicker">OBJECTIVE</span><p>${obj}</p></div>
    <div class="mh-log" aria-live="polite">${state.log
      .slice(0, 4)
      .map((l) => `<div>${l.text}</div>`)
      .join('')}</div>
  </aside>`;
}

export function renderShell(state, extras = {}) {
  const sel = extras.selectedName || 'NO TARGET';
  const selBody = extras.selectedBody;
  const rem = selBody && (selBody.type === 'planet' || selBody.type === 'dwarf planet') ? moonRemainder(selBody) : null;
  const moonLabel = rem
    ? rem.extra > 0
      ? `${rem.drawn} drawn +${rem.extra} more (total: ${rem.total})`
      : `${rem.total}`
    : selBody?.type === 'moon'
      ? 'moon'
      : '—';
  const lockedNav = STAGES.map((s) => {
    const open = canEnter(s.id, state);
    return `<button class="${state.route === s.id ? 'active' : ''} ${open ? '' : 'is-locked'}" data-nav="${s.id}" ${open ? '' : 'disabled aria-disabled="true"'} title="${open ? s.label : 'Locked'}">${s.label}</button>`;
  }).join('');

  return `<div class="ui-shell">
<header class="topbar">
  <div class="brand" data-nav="landing" role="button" tabindex="0">
    <div class="brand-mark">HX</div>
    <div>
      <div class="brand-name">HABITAT-X</div>
      <div class="brand-sub">MISSION RESILIENCE / DIGITAL TWIN</div>
    </div>
  </div>
  <div class="spaceapps">
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg" width="36" height="36" alt="NASA insignia">
    <span>NASA SPACE APPS / 2026</span>
  </div>
  <nav class="nav">${lockedNav}</nav>
  <div class="sys"><span class="led"></span>CELESTIAL LINK / CACHED</div>
</header>
${progressBar(state)}
${hud(state)}
<div class="hud hud-card selection-dock" id="selectionDock">
  <div class="kicker">SELECTED BODY</div>
  <div class="selection-title">${sel}</div>
  <div class="selection-meta">${selBody?.fact || 'Click a planet or moon.'} ${selBody?.science_target ? badge('science target') : ''} ${selBody?.playable ? badge('playable', 'nominal') : ''} ${selBody?.future_scope ? badge('future scope') : ''} ${selBody?.approximate !== false ? badge('approximate') : ''}</div>
  <div class="selection-stats">
    <span><b>MOONS</b><em>${moonLabel}</em></span>
    <span><b>PERIOD</b><em>${selBody?.orbital_period_days ? Math.round(Math.abs(selBody.orbital_period_days)) + ' d' : '—'}</em></span>
    <span><b>TILT</b><em>${selBody?.axial_tilt_degrees != null ? selBody.axial_tilt_degrees.toFixed(1) + '°' : '—'}</em></span>
  </div>
  <div class="src-line">${badge('NASA Science')} as_of ${selBody?.as_of || catalog.metadata.as_of}</div>
  <button class="btn" id="clearSelection">RETURN TO FULL SYSTEM</button>
</div>
${screenLanding(state)}${screenTutorial(state)}${screenExplore(state)}${screenBuild(state)}${screenSim(state)}${screenTrace(state)}${screenIntervene(state)}${screenCompare(state)}${screenResearcher(state)}${screenReport(state)}
<div class="hud hud-card control-dock">
  <div class="kicker">NAVIGATION CONTROLS</div>
  <div class="scale-flag" aria-live="polite">SCALE / ${state.scale === 'true' ? 'TRUE SCALE' : 'EXPLORER'}</div>
  <div class="control-row">
    <button id="toggleOrbits" class="ctl ${state.showOrbits ? 'active' : ''}">ORBIT LINES</button>
    <button id="toggleLabels" class="ctl ${state.showLabels ? 'active' : ''}">LABELS</button>
    <button id="toggleScale" class="ctl">${state.scale === 'true' ? 'EXPLORER' : 'TRUE SCALE'}</button>
    <button id="toggleQuality" class="ctl">${state.quality === 'low' ? 'QUALITY LOW' : 'QUALITY AUTO'}</button>
  </div>
  <div class="control-row speed-row"><span class="mono">TIME RATE</span><input id="timeSpeed" type="range" min="0" max="40" step="0.1" value="${state.speed}"><b>${state.speed.toFixed(1)}×</b></div>
  <div class="audio-row">
    <button id="muteBtn" class="ctl">${state.settings.muted ? 'UNMUTE' : 'MUTE'}</button>
    <label>MASTER <input id="volMaster" type="range" min="0" max="1" step="0.01" value="${state.settings.master}"></label>
  </div>
  <label class="tiny"><input type="checkbox" id="sysCursor" ${state.settings.systemCursor ? 'checked' : ''}> Use system cursor</label>
  <label class="tiny"><input type="checkbox" id="reduceSound" ${state.settings.reduceSound ? 'checked' : ''}> Reduce sound</label>
</div>
<footer class="legal-footer">NASA insignia used unmodified per NASA media guidelines. HABITAT-X is an independent Space Apps participant project. <strong>Built for NASA Space Apps Challenge 2026. Not endorsed by NASA.</strong></footer>
</div>`;
}

function screenLanding(state) {
  const showBtns = state.introDone ? 'ready' : '';
  return `<section class="screen ${state.route === 'landing' ? 'active' : ''}" data-screen="landing">
    <div class="landing-copy hud ${showBtns}">
      <div class="eyebrow">NASA-DATA-POWERED / EXPERIMENTAL RESILIENCE</div>
      <h1 id="wordmark" class="wordmark" aria-label="HABITAT-X">${[...'HABITAT-X'].map((ch, i) => `<span style="--i:${i}">${ch}</span>`).join('')}</h1>
      <p class="tagline">Before a Mission Fails, Find Out Why.</p>
      <p>FIND an Earth analog → BUILD a settlement → SIMULATE → STRESS-TEST → TRACE the failure chain → INTERVENE → COMPARE → REPORT. The simulator computes every number. Language models only translate what-ifs and explain output.</p>
      <div class="actions landing-cta ${state.introDone ? 'in' : ''}">
        <button class="btn btn-primary" data-nav="tutorial" id="startTutorial">START TUTORIAL</button>
        <button class="btn" data-nav="explore" id="enterPortal">ENTER PORTAL</button>
        ${state.introDone ? '' : '<button class="btn" id="skipIntro">SKIP INTRO</button>'}
      </div>
      <div class="landing-note">${badge('NASA / JPL cached')} <span>Moon + Mars playable</span> <span>Decision support, not prediction</span></div>
    </div>
    <div class="mission-rail hud hud-card glass-grid">
      <div class="kicker">MISSION OVERVIEW</div>
      <div class="rail-row"><span>Playable</span><b>MOON / MARS</b></div>
      <div class="rail-row"><span>Analog</span><b>EARTH SITES</b></div>
      <div class="rail-row"><span>Demo crew</span><b>${state.build.crewSize}</b></div>
      <div class="rail-row"><span>Seed</span><b class="tele">${state.seed}</b></div>
    </div>
    <button class="sound-toggle" id="soundToggle">${state.settings.muted ? '🔇 MUTED' : '🔊 SOUND'}</button>
  </section>`;
}

function screenTutorial(state) {
  const steps = [
    ['01', 'HEAT SPIKE', 'A +5 °C shock is injected into the same seeded run.'],
    ['02', 'WATER DEMAND', 'Cooling load raises daily draw.'],
    ['03', 'RESERVE CRITICAL', 'Water margin crosses 12%.'],
    ['04', 'AGRICULTURE', 'Crop output is gated by water fraction.'],
    ['05', 'CREW WORKLOAD', 'Workload proxy rises — not a medical score.'],
    ['06', 'YOUR TURN', 'Now try it yourself — the portal keeps this mission state.']
  ];
  const s = steps[state.tutorial];
  return `<section class="screen ${state.route === 'tutorial' ? 'active' : ''}" data-screen="tutorial">
    <div class="view-header"><div><div class="eyebrow">TUTORIAL / GUIDED WALKTHROUGH</div><h2>Learn the Resilience Loop</h2></div>
    <div class="header-actions"><span class="chip">STEP ${state.tutorial + 1} / ${steps.length}</span>
    <button class="btn btn-primary" id="tutorialNext">${state.tutorial === steps.length - 1 ? 'NOW TRY IT YOURSELF →' : 'NEXT STEP →'}</button></div></div>
    <div class="hud-card glass-grid tutor-card"><div class="kicker">ACTIVE EVENT</div><h3>${s[1]}</h3><p>${s[2]}</p>
    <div class="tutor-steps">${steps.map((x, i) => `<button data-tutorial="${i}" class="${i === state.tutorial ? 'on' : ''}"><b>${x[0]}</b> ${x[1]}</button>`).join('')}</div></div>
  </section>`;
}

function screenExplore(state) {
  const analog = ANALOGS[state.planet === 'moon' ? 'moon' : 'mars'];
  const scores = analog.scores;
  return `<section class="screen ${state.route === 'explore' ? 'active' : ''}" data-screen="explore">
    <div class="explore-ui hud">
      <div class="view-header"><div><div class="eyebrow">01 / EXPLORE</div><h2>Planetary Target → Earth Analog</h2></div>
      <div class="header-actions">${badge(analog.scoresLabel)} ${badge(analog.source)}
        <button class="btn btn-primary" id="confirmAnalog">CONFIRM ANALOG →</button></div></div>
      <div class="explore-left hud-card panel">
        <div class="kicker">TARGET WORLD</div>
        <div class="planet-pick">${[['mars', 'MARS'], ['moon', 'MOON']].map(
          (x) => `<button class="planet-card ${state.planet === x[0] ? 'active' : ''}" data-planet="${x[0]}"><strong>${x[1]}</strong><small>playable</small></button>`
        ).join('')}
        <button class="planet-card dim" disabled title="Future scope"><strong>EUROPA</strong><small>science target</small></button></div>
        <p class="science-note">Earth analog ≠ Moon/Mars. Matching is environmental, not a mission prediction.</p>
        <div class="src-line">${badge('site coordinates')} Jezero 18.38°N 77.58°E · Shackleton 89.9°S</div>
      </div>
      <div class="explore-right hud-card panel">
        <div class="kicker">EARTH ANALOG</div>
        <div class="similarity"><strong>${scores.overall}</strong><span>% overall<br>${approx('')}</span></div>
        ${[['Temperature', scores.temperature], ['Terrain / elevation', scores.terrain], ['Soil moisture', scores.soil], ['Environment / NDVI', scores.ndvi]]
          .map((m) => `<div class="metric"><div class="metric-head"><span>${m[0]}</span><b>${m[1]}%</b></div><div class="metric-bar"><i style="width:${m[1]}%"></i></div></div>`)
          .join('')}
        <p><b>${analog.analog.name}</b> · ${analog.analog.lat.toFixed(2)}°, ${analog.analog.lon.toFixed(2)}°</p>
        <button class="btn" id="openAnalogDetails">ANALOG DETAILS</button>
      </div>
      <div class="explore-bottom">${planets()
        .slice(0, 8)
        .map((p) => {
          const rem = moonRemainder(p);
          return `<button class="planet-card hud-card" data-focus="${p.id}"><div><strong>${p.name}</strong><small>${rem.extra ? `+${rem.extra} more (total: ${rem.total})` : rem.total + ' moons'}</small></div></button>`;
        })
        .join('')}</div>
    </div>
  </section>`;
}

function screenBuild(state) {
  const b = state.build;
  const fields = [
    ['WATER', [['waterReserve', b.waterReserve, 0, 16000, 'L'], ['waterDaily', b.waterDaily, 0, 500, 'L/day'], ['waterBackup', b.waterBackup, 0, 5000, 'L']]],
    ['FOOD', [['foodStock', b.foodStock, 0, 5000, 'kg'], ['foodDaily', b.foodDaily, 0, 120, 'kg/day'], ['cropCapacity', b.cropCapacity, 0, 100, '%']]],
    ['ENERGY', [['energyGen', b.energyGen, 0, 180, 'kWh/day'], ['energyStorage', b.energyStorage, 0, 400, 'kWh'], ['energyBackup', b.energyBackup, 0, 100, '%']]],
    ['CREW', [['shelterCap', b.shelterCap, 0, 60, 'people'], ['crewSize', b.crewSize, 0, 40, 'people'], ['workload', b.workload, 0, 95, '%']]]
  ];
  const climate = state.planet === 'moon' ? CACHED_CLIMATE.devon : CACHED_CLIMATE.atacama;
  return `<section class="screen ${state.route === 'build' ? 'active' : ''}" data-screen="build">
    <div class="view-header"><div><div class="eyebrow">02 / BUILD</div><h2>Configure the Settlement</h2></div>
      <div class="header-actions"><button class="btn" id="undoBuild">UNDO</button><button class="btn btn-primary" id="lockBuild">LOCK CONFIG →</button></div></div>
    <div class="builder-grid">
      <div class="hud-card panel builder-panel"><div class="kicker">INITIAL CONDITIONS</div>
        <div class="forms">${fields
          .map(
            ([t, fs]) =>
              `<div class="form-group"><h3>${t}</h3>${fs
                .map(
                  (f) =>
                    `<label class="field"><div><span>${f[0]}</span><output id="out-${f[0]}">${f[1]} ${f[4]}</output></div><input type="range" id="${f[0]}" min="${f[2]}" max="${f[3]}" value="${f[1]}" data-unit="${f[4]}"></label>`
                )
                .join('')}</div>`
          )
          .join('')}</div>
        <p class="science-note">${badge('NASA POWER cached')} ${climate.source} · elev ${climate.elev_m} m · ${climate.tmin_c}–${climate.tmax_c} °C</p>
      </div>
      <div class="hud-card settlement-stage" id="buildCanvas">
        <span class="illus-tag">illustrative</span>
        <div class="palette">${Object.entries(FACILITY)
          .map(([k, v]) => `<button class="fac" data-fac="${k}" draggable="true">${v.label}</button>`)
          .join('')}</div>
        <div class="yard" id="yard">${state.build.facilities
          .map((f) => `<div class="placed" data-id="${f.id}" style="left:${f.x}%;top:${f.y}%">${FACILITY[f.type]?.label || f.type}<i class="flow"></i></div>`)
          .join('')}</div>
      </div>
    </div>
  </section>`;
}

function screenSim(state) {
  const d = state.liveDay || { water: 90, food: 88, energy: 90, crew: 40, temp: 22 };
  const isCritical = d.water < 25 || d.food < 25 || d.energy < 25;
  const banner = state.shock ? `<div class="event-banner" role="status">SHOCK / ${state.shock.toUpperCase()} injected — visual + caption, not sound-only</div>` : '';
  return `<section class="screen ${state.route === 'simulate' ? 'active' : ''}" data-screen="simulate">
    ${banner}
    <div class="view-header"><div><div class="eyebrow">03–04 / SIMULATE + STRESS</div><h2>Telemetry Center</h2></div>
      <div class="header-actions"><span class="chip ${state.shock ? 'critical' : isCritical ? 'warning' : ''}">DAY ${state.simDay} / 30</span>
        <button class="btn" id="simPlay">${state.simPlaying ? '⏸ PAUSE' : '▶ PLAY'}</button>
        <button class="btn" id="simStep">STEP</button>
        <button class="btn btn-primary" id="finishSim">TRACE FAILURE →</button></div></div>
    <div class="sim-layout">
      <div class="hud-card panel">
        <input id="simScrub" type="range" min="1" max="30" value="${state.simDay}">
        <div class="sim-controls"><button id="prevDay">◀</button><button id="nextDay">▶</button><button id="fastDay">5×</button><button id="resetSim">RESET</button></div>
        <div class="telemetry">${tele('WATER', d.water, 'Reserve')} ${tele('FOOD', d.food, 'Supply')} ${tele('ENERGY', d.energy, 'Capacity')} ${tele('CREW', d.crew, 'Workload proxy')}</div>
      </div>
      <div class="hud-card panel"><div class="kicker">EVENT INJECTOR</div>
        ${[['heat', 'Heat +5°C'], ['water', 'Water −20%'], ['power', 'Power −30%'], ['crew', 'Crew +5']].map((e) => `<button class="event-btn" data-event="${e[0]}">${e[1]}</button>`).join('')}
        <p class="science-note">Events are user shocks. Numbers below come from the deterministic engine (seed ${state.seed}).</p>
      </div>
      <div class="hud-card panel"><div class="kicker">ENVIRONMENT</div><div class="tele big">${(d.temp || 0).toFixed(1)}°</div>
        <p class="science-note">Color grading follows simulator temperature for the analog site, not a live Mars forecast.</p></div>
    </div>
  </section>`;
}

function tele(name, v, sub) {
  const danger = v < 25;
  const warning = v < 50 && !danger;
  return `<div class="telemetry-box hud-card ${danger ? 'critical' : warning ? 'warning' : ''}"><div class="tele-head"><span>${name}</span><span class="${danger ? 'critical' : warning ? 'warning' : 'nominal'}">${danger ? 'CRITICAL' : warning ? 'CAUTION' : 'NOMINAL'}</span></div><strong class="tele">${Math.round(v)}%</strong><div class="progress"><i style="width:${Math.max(0, Math.min(100, v))}%"></i></div><small>${sub}</small></div>`;
}

function screenTrace(state) {
  const chain = state.simResult?.chain || [];
  return `<section class="screen ${state.route === 'trace' ? 'active' : ''}" data-screen="trace">
    <div class="view-header"><div><div class="eyebrow">05 / TRACE</div><h2>Failure-Chain Trace</h2></div>
      <div class="header-actions"><button class="btn btn-primary" id="doneTrace">OPEN INTERVENTION LAB →</button></div></div>
    <div class="trace-layout">
      <div class="hud-card graph-canvas" id="failGraph">${chain
        .map(
          (n, i) =>
            `<button class="trace-node tn-dyn ${state.selectedNode === n.id ? 'active' : ''}" data-node="${n.id}" style="left:${8 + (i % 4) * 22}%;top:${10 + Math.floor(i / 4) * 32}%"><strong>${n.label}</strong><small>${n.changed}</small></button>`
        )
        .join('')}</div>
      <div class="hud-card panel inspector" id="inspector">
        <div class="kicker">NODE INSPECTOR</div>
        <h3 id="nodeTitle">Select a node</h3>
        <div class="inspector-section"><div class="kicker">WHAT CHANGED</div><p id="nodeMetric"></p></div>
        <div class="inspector-section"><div class="kicker">WHY</div><p id="nodeCause"></p></div>
        <div class="inspector-section"><div class="kicker">DEPENDENCY</div><p id="nodeDep"></p></div>
        <div class="inspector-section"><div class="kicker">DOWNSTREAM</div><p id="nodeDownstream"></p></div>
      </div>
    </div>
  </section>`;
}

function screenIntervene(state) {
  const a = state.simResult;
  const b = state.interventionResult;
  return `<section class="screen ${state.route === 'intervene' ? 'active' : ''}" data-screen="intervene">
    <div class="view-header"><div><div class="eyebrow">06 / INTERVENE</div><h2>Intervention Lab</h2></div>
      <div class="header-actions"><button class="btn btn-primary" id="runIntervention">RUN SAME SCENARIO →</button></div></div>
    <div class="intervene-grid">
      <div class="hud-card panel">
        ${['water', 'demand', 'energy', 'crew', 'crop']
          .map((k) => `<label class="switch-row"><span><strong>${k}</strong></span><input class="switch" type="checkbox" id="int-${k}" ${state.interventions[k] ? 'checked' : ''}></label>`)
          .join('')}
        <label class="field"><div><span>Water storage uplift</span><output id="waterUpliftOut">${state.waterUplift}%</output></div><input type="range" min="0" max="100" value="${state.waterUplift}" id="waterUplift"></label>
        <label class="field"><div><span>Crew workload cut</span><output id="workloadCutOut">${state.workloadCut}%</output></div><input type="range" min="0" max="40" value="${state.workloadCut}" id="workloadCut"></label>
      </div>
      <div class="hud-card panel">
        <div class="compare-runs">
          <div class="run"><b>RUN A / BASELINE</b><div class="day">${a?.failureDay ?? '—'} <small>FAIL DAY</small></div><div>Score ${a?.resilienceScore ?? '—'}</div></div>
          <div class="arrow-center">→</div>
          <div class="run after"><b>RUN B / INTERVENED</b><div class="day">${b?.failureDay ?? '—'} <small>FAIL DAY</small></div><div>Score ${b?.resilienceScore ?? '—'}</div></div>
        </div>
        <p class="science-note">Same seed ${state.seed}. Ghost outline in 3D is illustrative of added storage/backup — not NASA hardware.</p>
        <button class="btn" id="gotoCompare">COMPARE STRATEGIES →</button>
      </div>
    </div>
  </section>`;
}

function screenCompare(state) {
  const rows = state.compareTable || [];
  return `<section class="screen ${state.route === 'compare' ? 'active' : ''}" data-screen="compare">
    <div class="view-header"><div><div class="eyebrow">07 / COMPARE</div><h2>Strategy Comparison</h2></div>
      <div class="header-actions"><button class="btn btn-primary" id="gotoReport">OPEN REPORT →</button></div></div>
    <div class="hud-card panel">
      <div class="table">${rows || '<p>Run intervention first. All cells are simulator outputs.</p>'}</div>
    </div>
  </section>`;
}

function screenResearcher(state) {
  return `<section class="screen ${state.route === 'researcher' ? 'active' : ''}" data-screen="researcher">
    <div class="view-header"><div><div class="eyebrow">COPILOT</div><h2>Ask the Simulation</h2></div>
      <div class="header-actions">${badge('NUMBERS FROM SIM', 'nominal')}</div></div>
    <div class="research-layout">
      <div class="hud-card panel chat">
        <div class="messages" id="messages"><div class="message bot"><span>RESEARCHER</span><p>I only quote values from the current simulator run. I never invent numbers. If the engine is empty, run Simulate first. Backend/Claude is optional — this demo works offline.</p></div></div>
        <form class="chatbar" id="chatForm"><input id="chatInput" placeholder='Try: "What if we add 30% more water storage?"'><button class="btn btn-primary">ASK</button></form>
        <div class="quick"><button data-q="Why did water become critical?">WHY WATER?</button><button data-q="What if +30% water storage">+30% WATER</button><button data-q="Explain the failure chain">CHAIN</button></div>
      </div>
    </div>
  </section>`;
}

function screenReport(state) {
  const a = state.simResult;
  const b = state.interventionResult;
  return `<section class="screen ${state.route === 'report' ? 'active' : ''}" data-screen="report">
    <div class="view-header"><div><div class="eyebrow">08 / REPORT</div><h2>Mission Resilience Report</h2></div>
      <div class="header-actions"><button class="btn" id="reportExport">PRINT VIEW</button></div></div>
    <div class="report-grid">
      <div class="report-kpi hud-card"><span>RESILIENCE</span><strong class="tele">${a?.resilienceScore ?? '—'}</strong><small>simulator score</small></div>
      <div class="report-kpi hud-card"><span>FAILURE DAY</span><strong class="tele">${a?.failureDay ?? 'none'}</strong><small>${a?.failureCode || 'nominal'}</small></div>
      <div class="report-kpi hud-card"><span>RECOVERY</span><strong class="tele">${a?.recoveryTime ?? '—'}</strong><small>days after fail flag</small></div>
      <div class="report-kpi hud-card"><span>INTERVENED FAIL</span><strong class="tele">${b?.failureDay ?? '—'}</strong><small>same seed</small></div>
    </div>
    <p class="report-footer">Experimental decision-support summary. Does not predict mission survival. Not endorsed by NASA.</p>
  </section>`;
}

export function analogModal(state) {
  const analog = ANALOGS[state.planet === 'moon' ? 'moon' : 'mars'];
  return `<div class="modal" id="analogModal" role="dialog"><div class="modal-card hud-card">
    <h3>Analog details</h3>
    <p>Target ${analog.target.name} (${analog.target.lat}°, ${analog.target.lon}°) linked to ${analog.analog.name} (${analog.analog.lat}°, ${analog.analog.lon}°).</p>
    <p>${badge(analog.scoresLabel)} Overall ${analog.scores.overall}. ${analog.source}.</p>
    <button class="btn" id="closeModal">CLOSE</button>
  </div></div>`;
}

export { FACILITY };
