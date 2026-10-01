/**
 * HABITAT-X — Explore Module (v2)
 * Moon/Mars Site Picker → Earth Analog Matcher
 *
 * FIX: scan ticker updates DOM directly (no full re-render during scan)
 * FIX: all events scoped to explore section
 * FIX: layout fills screen without overlapping 3D HUD elements
 */

// ─── Data ────────────────────────────────────────────────────────────────────

export const MOON_SITES = [
  {
    id: 'shackleton', name: 'Shackleton Crater Rim', body: 'moon',
    lat: -89.9, lon: 0, type: 'Permanently Shadowed Region',
    highlight: 'Water-ice confirmed by LCROSS / LRO',
    tags: ['PSR', 'water-ice', 'south pole'],
    env: { tempMin: -173, tempMax: -93, radiation: 'High (rim exposed)', terrain: 'Rugged crater rim', water: 'Subsurface ice confirmed' },
    why: 'South-pole PSR with confirmed ice deposits and near-continuous sunlight on the rim for power generation.',
    icon: '🌕', color: '#8bb8dd',
  },
  {
    id: 'aristarchus', name: 'Aristarchus Plateau', body: 'moon',
    lat: 26.8, lon: -48.5, type: 'Volcanic Plateau',
    highlight: 'Highest albedo / possible outgassing',
    tags: ['volcanic', 'resources', 'geology'],
    env: { tempMin: -183, tempMax: 117, radiation: 'High (no atmosphere)', terrain: 'Highland plateau', water: 'Trace pyroclastic' },
    why: 'Rich in pyroclastic deposits; potential regolith resources and strong science targets.',
    icon: '🌕', color: '#c5a872',
  },
  {
    id: 'malapert', name: 'Malapert Massif', body: 'moon',
    lat: -86, lon: 0, type: 'Near-Polar Massif',
    highlight: 'Line-of-sight to Earth + sunlit peak',
    tags: ['communications', 'solar', 'relay'],
    env: { tempMin: -150, tempMax: -60, radiation: 'Moderate', terrain: 'Elevated massif', water: 'Nearby PSR deposits' },
    why: 'Communications relay advantage + near-continuous solar power potential from elevated peak.',
    icon: '🌕', color: '#aad4b8',
  },
];

export const MARS_SITES = [
  {
    id: 'jezero', name: 'Jezero Crater', body: 'mars',
    lat: 18.38, lon: 77.58, type: 'Ancient Lake Delta',
    highlight: 'Perseverance rover landing site',
    tags: ['delta', 'ancient lake', 'Perseverance'],
    env: { tempMin: -73, tempMax: 20, radiation: 'High (thin atmosphere)', terrain: 'Flat delta + crater rim', water: 'Subsurface brine possible' },
    why: 'Flat delta floor ideal for landing + geology rich in biosignature potential. Primary NASA target.',
    icon: '🔴', color: '#e07b54',
  },
  {
    id: 'hellas', name: 'Hellas Basin (North Rim)', body: 'mars',
    lat: -35, lon: 70, type: 'Impact Basin',
    highlight: 'Thickest atmosphere on Mars (~1200 m below datum)',
    tags: ['thick atmosphere', 'low elevation', 'pressure'],
    env: { tempMin: -90, tempMax: 10, radiation: 'Moderate (lower elevation)', terrain: 'Sediment plains', water: 'Possible subsurface' },
    why: 'Higher atmospheric pressure reduces radiation dose and helps thermal management for crew.',
    icon: '🔴', color: '#c85f36',
  },
  {
    id: 'valles', name: 'Valles Marineris (East Wall)', body: 'mars',
    lat: -13.9, lon: -59.2, type: 'Canyon System',
    highlight: 'Deep canyon walls shield from radiation',
    tags: ['canyon', 'shielding', 'equatorial'],
    env: { tempMin: -60, tempMax: 25, radiation: 'Low-Moderate (canyon shielded)', terrain: 'Canyon floor + cliffs', water: 'RSL trace evidence' },
    why: 'Canyon walls provide natural radiation shielding and unique layered geology for science.',
    icon: '🔴', color: '#d4704a',
  },
];

export const ANALOGS_DB = {
  shackleton: [
    { id: 'devon', name: 'Devon Island, Canada', lat: 75.33, lon: -89.79, country: 'Canada',
      biome: 'Arctic Desert', nasaDatasets: ['NASA POWER', 'MODIS LST', 'SMAP'],
      scores: { overall: 82, temperature: 88, terrain: 85, soil: 74, ndvi: 62, radiation: 78 },
      climate: { tMin: -40, tMax: 8, precip: 130, elev: 500 },
      why: 'Mars-like cold desert with permafrost, minimal vegetation, rugged terrain. Home to NASA\'s Haughton-Mars Project.',
      badge: 'NASA HMP FIELD SITE', badgeColor: '#50e3c2' },
    { id: 'svalbard', name: 'Ny-Ålesund, Svalbard', lat: 78.9, lon: 11.9, country: 'Norway',
      biome: 'High Arctic', nasaDatasets: ['NASA POWER', 'ICESat-2', 'GEDI'],
      scores: { overall: 78, temperature: 85, terrain: 79, soil: 71, ndvi: 58, radiation: 72 },
      climate: { tMin: -30, tMax: 7, precip: 400, elev: 10 },
      why: 'Permanently frozen ground, polar night/day cycles, extreme cold validated by long-term research.',
      badge: 'POLAR RESEARCH STATION', badgeColor: '#5da7ef' },
    { id: 'mcmurdo', name: 'McMurdo Dry Valleys, Antarctica', lat: -77.5, lon: 161, country: 'Antarctica',
      biome: 'Polar Desert', nasaDatasets: ['MODIS LST', 'Landsat', 'SMAP'],
      scores: { overall: 76, temperature: 91, terrain: 72, soil: 68, ndvi: 45, radiation: 80 },
      climate: { tMin: -50, tMax: 0, precip: 30, elev: 300 },
      why: 'Driest, coldest desert on Earth. No soil bacteria. NASA uses it to study limits of life.',
      badge: 'LIFE-LIMITS ANALOG', badgeColor: '#f4ad3f' },
  ],
  aristarchus: [
    { id: 'lanzarote', name: 'Timanfaya, Lanzarote', lat: 29.0, lon: -13.75, country: 'Spain',
      biome: 'Volcanic Desert', nasaDatasets: ['NASA POWER', 'ASTER', 'Landsat'],
      scores: { overall: 79, temperature: 76, terrain: 88, soil: 81, ndvi: 52, radiation: 74 },
      climate: { tMin: 12, tMax: 29, precip: 130, elev: 600 },
      why: 'Young volcanic landscape with lava fields. ESA astronaut training conducted here.',
      badge: 'ESA TRAINING SITE', badgeColor: '#b07aee' },
    { id: 'askja', name: 'Askja Highlands, Iceland', lat: 65.05, lon: -16.75, country: 'Iceland',
      biome: 'Volcanic Highland', nasaDatasets: ['NASA POWER', 'Landsat', 'NASADEM'],
      scores: { overall: 75, temperature: 68, terrain: 85, soil: 79, ndvi: 48, radiation: 69 },
      climate: { tMin: -10, tMax: 15, precip: 800, elev: 1000 },
      why: 'Rhyolite and basalt fields. Apollo astronauts trained here for lunar geology.',
      badge: 'APOLLO TRAINING SITE', badgeColor: '#f4ad3f' },
  ],
  malapert: [
    { id: 'devon', name: 'Devon Island, Canada', lat: 75.33, lon: -89.79, country: 'Canada',
      biome: 'Arctic Desert', nasaDatasets: ['NASA POWER', 'MODIS LST', 'SMAP'],
      scores: { overall: 80, temperature: 85, terrain: 82, soil: 71, ndvi: 60, radiation: 75 },
      climate: { tMin: -40, tMax: 8, precip: 130, elev: 500 },
      why: 'Best terrestrial analog for polar lunar missions. Combined remote + extreme cold environment.',
      badge: 'NASA HMP FIELD SITE', badgeColor: '#50e3c2' },
    { id: 'ellesmere', name: 'Ellesmere Island, Canada', lat: 79.8, lon: -85.0, country: 'Canada',
      biome: 'High Arctic', nasaDatasets: ['NASA POWER', 'ICESat-2'],
      scores: { overall: 74, temperature: 82, terrain: 78, soil: 68, ndvi: 50, radiation: 72 },
      climate: { tMin: -45, tMax: 5, precip: 80, elev: 200 },
      why: 'Extreme cold, minimal precipitation, near-polar. Good comms-relay terrain analog.',
      badge: 'POLAR ANALOG', badgeColor: '#5da7ef' },
  ],
  jezero: [
    { id: 'atacama', name: 'Atacama Desert, Chile', lat: -23.86, lon: -69.14, country: 'Chile',
      biome: 'Hyper-Arid Desert', nasaDatasets: ['NASA POWER', 'SMAP', 'MODIS NDVI', 'NASADEM'],
      scores: { overall: 84, temperature: 87, terrain: 81, soil: 93, ndvi: 79, radiation: 82 },
      climate: { tMin: -2, tMax: 24, precip: 15, elev: 2400 },
      why: 'Driest non-polar desert on Earth. Extreme UV. NASA\'s primary Mars analog for astrobiology.',
      badge: 'NASA ASTROBIO PRIME', badgeColor: '#50e3c2' },
    { id: 'dry_valleys', name: 'Antarctic Dry Valleys', lat: -77.5, lon: 161, country: 'Antarctica',
      biome: 'Polar Desert', nasaDatasets: ['MODIS LST', 'Landsat', 'SMAP'],
      scores: { overall: 76, temperature: 84, terrain: 71, soil: 80, ndvi: 44, radiation: 85 },
      climate: { tMin: -50, tMax: 0, precip: 30, elev: 300 },
      why: 'Perchlorate-rich soil mirrors Martian chemistry. No liquid water. Life-limits boundary.',
      badge: 'COLD ARID ANALOG', badgeColor: '#f4ad3f' },
    { id: 'colorado', name: 'Colorado Plateau (Utah)', lat: 38.5, lon: -110.0, country: 'USA',
      biome: 'Desert Canyon', nasaDatasets: ['NASA POWER', 'Landsat', 'NASADEM'],
      scores: { overall: 71, temperature: 72, terrain: 84, soil: 76, ndvi: 65, radiation: 68 },
      climate: { tMin: -5, tMax: 38, precip: 300, elev: 1500 },
      why: 'Canyon geology mirrors Jezero\'s delta morphology. Mars Desert Research Station operates here.',
      badge: 'MDRS FIELD SITE', badgeColor: '#5da7ef' },
  ],
  hellas: [
    { id: 'dead_sea', name: 'Dead Sea Basin, Jordan', lat: 31.5, lon: 35.5, country: 'Jordan/Israel',
      biome: 'Below Sea-Level Desert', nasaDatasets: ['NASA POWER', 'MODIS', 'SRTM'],
      scores: { overall: 72, temperature: 74, terrain: 77, soil: 69, ndvi: 58, radiation: 70 },
      climate: { tMin: 10, tMax: 40, precip: 100, elev: -430 },
      why: 'Low-elevation basin with dense, hot, arid air mirrors Hellas thick-atmosphere advantage.',
      badge: 'LOW ELEVATION ANALOG', badgeColor: '#f4ad3f' },
    { id: 'atacama_h', name: 'Atacama Desert, Chile', lat: -23.86, lon: -69.14, country: 'Chile',
      biome: 'Hyper-Arid Desert', nasaDatasets: ['NASA POWER', 'SMAP', 'MODIS NDVI'],
      scores: { overall: 69, temperature: 71, terrain: 73, soil: 82, ndvi: 70, radiation: 74 },
      climate: { tMin: -2, tMax: 24, precip: 15, elev: 2400 },
      why: 'Arid soil chemistry closest to Martian regolith despite different elevation profile.',
      badge: 'SOIL ANALOG', badgeColor: '#50e3c2' },
  ],
  valles: [
    { id: 'colorado_v', name: 'Colorado Plateau (Utah/Arizona)', lat: 38.5, lon: -110.0, country: 'USA',
      biome: 'Desert Canyon', nasaDatasets: ['NASA POWER', 'Landsat', 'NASADEM'],
      scores: { overall: 83, temperature: 76, terrain: 91, soil: 79, ndvi: 66, radiation: 75 },
      climate: { tMin: -5, tMax: 38, precip: 300, elev: 1500 },
      why: 'Deep canyon terrain and exposed layered geology — closest Earth match for Valles Marineris wall.',
      badge: 'PRIME TERRAIN MATCH', badgeColor: '#50e3c2' },
    { id: 'puna', name: 'Puna de Atacama, Argentina', lat: -24, lon: -67.5, country: 'Argentina',
      biome: 'High-Altitude Desert', nasaDatasets: ['NASA POWER', 'SMAP', 'ASTER'],
      scores: { overall: 77, temperature: 79, terrain: 83, soil: 80, ndvi: 61, radiation: 82 },
      climate: { tMin: -15, tMax: 20, precip: 100, elev: 3800 },
      why: 'Highest UV radiation on Earth outside polar regions. Thin air, extreme thermal swings.',
      badge: 'RADIATION ANALOG', badgeColor: '#f4ad3f' },
    { id: 'wadi_rum', name: 'Wadi Rum, Jordan', lat: 29.58, lon: 35.4, country: 'Jordan',
      biome: 'Desert Canyon', nasaDatasets: ['NASA POWER', 'Landsat', 'NASADEM'],
      scores: { overall: 73, temperature: 77, terrain: 86, soil: 74, ndvi: 62, radiation: 72 },
      climate: { tMin: 2, tMax: 38, precip: 30, elev: 750 },
      why: 'Red sandstone canyon walls, extreme aridity. Used for Mars science analog work.',
      badge: 'VISUAL + ARID ANALOG', badgeColor: '#5da7ef' },
  ],
};

export const exploreState = {
  body: 'mars',
  selectedSiteId: 'jezero',
  selectedAnalogId: null,
  scanning: false,
  scanProgress: 0,
  scanComplete: false,
  confirmedAnalogId: null,
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function scoreColor(v) {
  return v >= 80 ? 'var(--green)' : v >= 65 ? 'var(--amber)' : 'var(--red)';
}
function scoreGrade(v) {
  return v >= 80 ? 'HIGH' : v >= 65 ? 'MOD' : 'LOW';
}

function radarBar(label, v) {
  return `<div class="xb">
    <span class="xb-l">${label}</span>
    <div class="xb-t"><div class="xb-f" style="width:${v}%;background:${scoreColor(v)}"></div></div>
    <span class="xb-v" style="color:${scoreColor(v)}">${v}%</span>
  </div>`;
}

function siteCard(site, isActive) {
  return `<button class="xs-card ${isActive ? 'active' : ''}" data-site="${site.id}">
    <span class="xs-icon">${site.icon}</span>
    <div class="xs-info">
      <strong>${site.name}</strong>
      <small>${site.type}</small>
      <div class="xs-tags">${site.tags.slice(0, 2).map(t => `<span>${t}</span>`).join('')}</div>
    </div>
    <span class="xs-coord">${site.lat.toFixed(1)}°</span>
  </button>`;
}

function analogCard(analog, isSelected, rank) {
  const s = analog.scores;
  return `<button class="xa-card ${isSelected ? 'selected' : ''}" data-analog="${analog.id}">
    <div class="xa-rank">#${rank}</div>
    <div class="xa-body">
      <div class="xa-top">
        <div class="xa-name-wrap">
          <strong class="xa-name">${analog.name}</strong>
          <small>${analog.biome} · ${analog.country}</small>
          <span class="xa-badge" style="border-color:${analog.badgeColor};color:${analog.badgeColor}">${analog.badge}</span>
        </div>
        <div class="xa-score" style="color:${scoreColor(s.overall)}">
          <span class="xa-num">${s.overall}</span><span class="xa-pct">%</span>
          <div class="xa-grade">${scoreGrade(s.overall)}</div>
        </div>
      </div>
      <div class="xa-mini-bars">
        ${['temperature','terrain','soil','ndvi','radiation'].map(k =>
          `<div class="xa-mb" title="${k}">
            <span>${k.slice(0,4).toUpperCase()}</span>
            <div class="xa-mb-t"><div class="xa-mb-f" style="width:${s[k]}%;background:${scoreColor(s[k])}"></div></div>
          </div>`
        ).join('')}
      </div>
      <div class="xa-why">${analog.why}</div>
    </div>
  </button>`;
}

function detailPanel(site, analog) {
  if (!analog) {
    return `<div class="xd-empty">
      <div class="xd-empty-icon">🌍</div>
      <p>Select an Earth analog to see the detailed match comparison</p>
    </div>`;
  }
  const s = analog.scores;
  return `
    <div class="xd-hd">
      <div class="kicker">MATCH DETAIL</div>
      <div class="xd-overall" style="color:${scoreColor(s.overall)}">${s.overall}%</div>
    </div>
    <div class="xd-pair">
      <div class="xd-pair-item">
        <span class="kicker">TARGET</span>
        <strong>${site.name}</strong>
        <small>${site.lat.toFixed(2)}°, ${site.lon.toFixed(2)}°</small>
      </div>
      <div class="xd-arrow">→</div>
      <div class="xd-pair-item">
        <span class="kicker">ANALOG</span>
        <strong>${analog.name}</strong>
        <small>${analog.lat.toFixed(2)}°, ${analog.lon.toFixed(2)}°</small>
      </div>
    </div>
    <div class="xd-why">${analog.why}</div>
    <div class="xd-bars">
      ${radarBar('Temperature', s.temperature)}
      ${radarBar('Terrain / Elev', s.terrain)}
      ${radarBar('Soil Moisture', s.soil)}
      ${radarBar('Vegetation NDVI', s.ndvi)}
      ${radarBar('UV / Radiation', s.radiation)}
    </div>
    <div class="xd-climate">
      <div class="xd-cc"><span>TEMP MIN</span><b>${analog.climate.tMin}°C</b></div>
      <div class="xd-cc"><span>TEMP MAX</span><b>${analog.climate.tMax}°C</b></div>
      <div class="xd-cc"><span>PRECIP</span><b>${analog.climate.precip} mm</b></div>
      <div class="xd-cc"><span>ELEV</span><b>${analog.climate.elev} m</b></div>
    </div>
    <div class="xd-datasets">
      <div class="kicker" style="margin-bottom:5px">NASA DATASETS (DEMO)</div>
      ${analog.nasaDatasets.map(d => `<span class="xd-ds">${d}</span>`).join('')}
    </div>
    <div class="xd-disclaim">⚠ Scores are prototype model values. Live backend queries NASA POWER, SMAP, MODIS, NASADEM.</div>`;
}

function scanBox(progress, complete) {
  const pct = Math.round(progress);
  const datasets = ['NASA POWER climatology', 'SMAP soil moisture', 'MODIS LST surface temp', 'NASADEM terrain elevation', 'MODIS NDVI vegetation'];
  const done = Math.min(datasets.length, Math.floor((progress / 100) * datasets.length));
  return `<div class="xs-scan-box" id="xScanBox">
    <div class="xs-scan-top">
      <div class="xs-scan-led ${complete ? 'done' : 'pulse'}"></div>
      <span>${complete ? '✓ SCAN COMPLETE' : 'SCANNING EARTH DATABASE…'}</span>
      <span class="xs-scan-pct" id="xScanPct">${pct}%</span>
    </div>
    <div class="xs-scan-track"><div class="xs-scan-fill" id="xScanFill" style="width:${pct}%"></div></div>
    <div class="xs-scan-list" id="xScanList">
      ${datasets.map((d, i) => `<div class="xs-ds ${i < done ? 'done' : i === done && !complete ? 'act' : ''}">
        <span class="xs-ds-ic">${i < done ? '✓' : i === done && !complete ? '⟳' : '○'}</span>
        <span>${d}</span>
        ${i < done ? `<span class="xs-ds-v">${70 + Math.round(Math.sin(i * 12.9898) * 13)}%</span>` : ''}
      </div>`).join('')}
    </div>
    <div class="xs-scan-note">Demo: scores are model-derived. Live: NASA POWER API, SMAP L3, MODIS MOD11A2, NASADEM 30m.</div>
  </div>`;
}

// ─── Main render ─────────────────────────────────────────────────────────────

export function renderExplore(es) {
  const sites = es.body === 'moon' ? MOON_SITES : MARS_SITES;
  const site = sites.find(s => s.id === es.selectedSiteId) || sites[0];
  const analogs = ANALOGS_DB[site.id] || [];
  const selAnalog = analogs.find(a => a.id === es.selectedAnalogId) || null;

  return `<div class="xe-wrap" id="xeWrap">

    <!-- LEFT -->
    <div class="xe-left">
      <div class="hud-card xe-body-pick">
        <div class="kicker">01 · TARGET WORLD</div>
        <div class="xe-body-row">
          <button class="xe-bb ${es.body === 'mars' ? 'on' : ''}" data-expl-body="mars">
            <span>🔴</span><strong>MARS</strong><small>${MARS_SITES.length} sites</small>
          </button>
          <button class="xe-bb ${es.body === 'moon' ? 'on' : ''}" data-expl-body="moon">
            <span>🌕</span><strong>MOON</strong><small>${MOON_SITES.length} sites</small>
          </button>
        </div>
      </div>

      <div class="hud-card xe-site-pick">
        <div class="kicker">02 · PICK A SITE</div>
        <div class="xs-list">
          ${sites.map(s => siteCard(s, s.id === site.id)).join('')}
        </div>
      </div>

      <div class="hud-card xe-env">
        <div class="kicker">SITE ENVIRONMENT</div>
        <div class="xe-env-name">${site.name}</div>
        <div class="xe-env-hl">💡 ${site.highlight}</div>
        <div class="xe-env-grid">
          <div class="xe-env-c"><span>TEMP</span><b>${site.env.tempMin}° → ${site.env.tempMax}°C</b></div>
          <div class="xe-env-c"><span>RADIATION</span><b>${site.env.radiation}</b></div>
          <div class="xe-env-c"><span>TERRAIN</span><b>${site.env.terrain}</b></div>
          <div class="xe-env-c"><span>WATER</span><b>${site.env.water}</b></div>
        </div>
      </div>
    </div>

    <!-- CENTER -->
    <div class="xe-center">
      <div class="xe-center-hd">
        <div>
          <div class="kicker">03 · EARTH ANALOG MATCH</div>
          <div class="xe-center-title">Finding analogs for <b>${site.name}</b></div>
        </div>
        <button class="btn btn-primary xe-scan-btn" id="xScanBtn">
          ${es.scanComplete ? '🔁 RE-SCAN' : es.scanning ? '⟳ SCANNING…' : '⚡ FIND ANALOGS'}
        </button>
      </div>

      ${(es.scanning || es.scanComplete) ? scanBox(es.scanProgress, es.scanComplete) : `
        <div class="xe-prescan">
          <div class="xe-prescan-icon">🌍</div>
          <p>Click <b>FIND ANALOGS</b> to search Earth for locations matching <b>${site.name}</b></p>
          <div class="xe-prescan-dims">Matching on: Temperature · Terrain · Soil · Vegetation · Radiation</div>
        </div>
      `}

      ${es.scanComplete ? `
        <div class="xe-results-hd">
          <span class="kicker">RANKED RESULTS — ${analogs.length} ANALOG${analogs.length > 1 ? 'S' : ''} FOUND</span>
          ${analogs[0] ? `<span class="xe-best">BEST MATCH ${analogs[0].scores.overall}%</span>` : ''}
        </div>
        <div class="xe-analog-list">
          ${analogs.map((a, i) => analogCard(a, es.selectedAnalogId === a.id, i + 1)).join('')}
        </div>
      ` : ''}
    </div>

    <!-- RIGHT -->
    <div class="xe-right">
      <div class="hud-card xe-detail" id="xDetail">
        ${detailPanel(site, selAnalog)}
      </div>

      ${selAnalog ? `<button class="btn btn-primary xe-confirm" id="xConfirm">CONFIRM ANALOG → BUILD ›</button>` : ''}

      <div class="hud-card xe-how">
        <div class="kicker">HOW MATCHING WORKS</div>
        <div class="xe-how-steps">
          <div class="xe-hs"><b>01</b><span>Site coordinates from NASA mission data</span></div>
          <div class="xe-hs"><b>02</b><span>NASA POWER · SMAP · MODIS · NASADEM queried</span></div>
          <div class="xe-hs"><b>03</b><span>Per-dimension similarity scored and weighted</span></div>
          <div class="xe-hs"><b>04</b><span>Earth candidates ranked; top 3 shown</span></div>
        </div>
        <div class="xe-how-note">Demo uses pre-computed model scores. Full backend queries NASA APIs live.</div>
      </div>
    </div>

  </div>`;
}

// ─── CSS ─────────────────────────────────────────────────────────────────────

const CSS = `
/* === EXPLORE WRAP === */
.xe-wrap{display:grid;grid-template-columns:260px 1fr 290px;gap:8px;height:100%;overflow:hidden}
.xe-left,.xe-center,.xe-right{display:flex;flex-direction:column;gap:8px;overflow-y:auto;overflow-x:hidden;padding-right:2px}
.xe-left::-webkit-scrollbar,.xe-center::-webkit-scrollbar,.xe-right::-webkit-scrollbar{width:3px}
.xe-left::-webkit-scrollbar-thumb,.xe-center::-webkit-scrollbar-thumb,.xe-right::-webkit-scrollbar-thumb{background:#1d3344}

/* === BODY PICKER === */
.xe-body-pick{padding:11px;flex-shrink:0}
.xe-body-row{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px}
.xe-bb{display:flex;flex-direction:column;align-items:center;gap:3px;padding:10px 6px;border:1px solid #263d4f;background:#040d14;color:#7898b0;cursor:pointer;transition:all .2s}
.xe-bb span{font-size:20px}
.xe-bb strong{font:600 10px var(--mono);letter-spacing:1px}
.xe-bb small{font:8px var(--mono);color:#4e6a7e}
.xe-bb:hover{border-color:#4a7ea0;background:#07141e;transform:translateY(-1px)}
.xe-bb.on{border-color:#4a90d9;background:#071929;color:#c2def5;box-shadow:0 0 16px rgba(74,144,217,.15)}

/* === SITE PICKER === */
.xe-site-pick{padding:11px;flex:1;min-height:0}
.xs-list{display:flex;flex-direction:column;gap:5px;margin-top:8px}
.xs-card{display:grid;grid-template-columns:28px 1fr 36px;gap:7px;align-items:center;padding:9px 10px;border:1px solid #222f3d;background:#050e17;color:#8bacc5;text-align:left;cursor:pointer;transition:all .2s;width:100%}
.xs-card:hover{border-color:#3d6a8a;background:#071526;transform:translateX(2px)}
.xs-card.active{border-color:#4a8ec4;background:#091a2a;color:#cce0f5;box-shadow:inset 0 0 18px rgba(74,142,196,.06),0 0 12px rgba(74,142,196,.1)}
.xs-icon{font-size:16px;text-align:center}
.xs-info strong{display:block;font:600 9px var(--mono);color:#c0dcf0;margin-bottom:2px}
.xs-info small{display:block;font:8px var(--mono);color:#4e6a7e}
.xs-tags{display:flex;gap:3px;margin-top:3px;flex-wrap:wrap}
.xs-tags span{padding:1px 4px;border:1px solid #222f3d;color:#445665;font:7px var(--mono)}
.xs-coord{font:8px var(--mono);color:#374e5f;white-space:nowrap}

/* === ENV CARD === */
.xe-env{padding:11px;flex-shrink:0}
.xe-env-name{font:600 10px var(--mono);color:#9dc5e2;margin:6px 0 3px}
.xe-env-hl{font:8px var(--mono);color:#4d8aa6;padding:5px 7px;border-left:2px solid #2f5f7a;background:rgba(7,20,30,.6);margin-bottom:7px;line-height:1.5}
.xe-env-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#182838}
.xe-env-c{padding:7px 8px;background:#060f18}
.xe-env-c span{display:block;font:7px var(--mono);color:#3d5a70;margin-bottom:2px}
.xe-env-c b{font:500 8px var(--mono);color:#7aaed0;line-height:1.4}

/* === CENTER HEADER === */
.xe-center-hd{display:flex;justify-content:space-between;align-items:flex-end;gap:10px;flex-shrink:0;padding-bottom:4px}
.xe-center-title{font:500 13px var(--font);color:#9ec8e5;margin-top:2px}
.xe-center-title b{color:#d5ecff}
.xe-scan-btn{white-space:nowrap;flex-shrink:0}

/* === PRE-SCAN === */
.xe-prescan{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:28px 18px;border:1px dashed #24404f;background:#030a11;text-align:center;gap:9px;flex-shrink:0}
.xe-prescan-icon{font-size:32px;animation:float 4s ease-in-out infinite}
.xe-prescan p{color:#567383;font-size:10px;line-height:1.6;max-width:280px;margin:0}
.xe-prescan b{color:#7ab4ce}
.xe-prescan-dims{font:8px var(--mono);color:#375060;padding:5px 9px;border:1px solid #1d3040}

/* === SCAN BOX === */
.xs-scan-box{border:1px solid #1f3d50;background:#04101a;padding:11px;flex-shrink:0}
.xs-scan-top{display:flex;align-items:center;gap:7px;margin-bottom:7px;font:600 9px var(--mono);color:#6da8c8}
.xs-scan-pct{margin-left:auto;font:700 13px var(--mono);color:#5fc8ec}
.xs-scan-led{width:8px;height:8px;border-radius:50%;background:var(--cyan);flex-shrink:0}
.xs-scan-led.pulse{animation:blink .7s infinite}
.xs-scan-led.done{background:var(--green)}
.xs-scan-track{height:3px;background:#162535;border-radius:2px;margin-bottom:9px;overflow:hidden}
.xs-scan-fill{height:100%;background:linear-gradient(90deg,var(--blue),var(--cyan));border-radius:2px;transition:width .15s linear}
.xs-scan-list{display:flex;flex-direction:column;gap:3px}
.xs-ds{display:flex;align-items:center;gap:7px;padding:3px 6px;font:8px var(--mono);color:#3f5869}
.xs-ds.done{color:#5faa90}
.xs-ds.act{color:#6aa8cc;background:rgba(93,167,222,.05)}
.xs-ds-ic{width:12px;text-align:center;flex-shrink:0}
.xs-ds.act .xs-ds-ic{animation:spin 1s linear infinite;display:inline-block}
.xs-ds-v{margin-left:auto;color:var(--green);font:600 8px var(--mono)}
.xs-scan-note{margin-top:7px;font:7px var(--mono);color:#2f4858;padding-top:6px;border-top:1px solid #182a38}

/* === RESULTS === */
.xe-results-hd{display:flex;align-items:center;justify-content:space-between;flex-shrink:0;padding:4px 0 2px}
.xe-best{padding:3px 8px;border:1px solid #2a6040;background:#060f0a;color:var(--green);font:700 8px var(--mono)}
.xe-analog-list{display:flex;flex-direction:column;gap:5px}

/* === ANALOG CARD === */
.xa-card{display:grid;grid-template-columns:24px 1fr;gap:8px;padding:10px;border:1px solid #1e3040;background:#050e18;text-align:left;cursor:pointer;transition:all .22s;width:100%;align-items:flex-start}
.xa-card:hover{border-color:#3a6c8e;background:#071524;transform:translateX(2px);box-shadow:0 4px 16px rgba(0,0,0,.3)}
.xa-card.selected{border-color:#4285c8;background:#081928;box-shadow:inset 0 0 20px rgba(66,133,200,.06),0 0 16px rgba(66,133,200,.12)}
.xa-rank{font:700 11px var(--mono);color:#2f4d62;padding-top:2px}
.xa-top{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:6px}
.xa-name-wrap{flex:1;min-width:0}
.xa-name{display:block;font:600 10px var(--mono);color:#b8d8f0;margin-bottom:2px}
.xa-name-wrap small{display:block;font:8px var(--mono);color:#456070;margin-bottom:4px}
.xa-badge{display:inline-block;padding:2px 5px;border:1px solid;font:600 7px var(--mono);letter-spacing:.3px}
.xa-score{text-align:right;flex-shrink:0}
.xa-num{font:700 22px var(--mono)}
.xa-pct{font:700 9px var(--mono);vertical-align:super}
.xa-grade{font:700 7px var(--mono);letter-spacing:.5px;margin-top:1px}
.xa-mini-bars{display:flex;gap:4px;margin-bottom:6px}
.xa-mb{flex:1;display:flex;flex-direction:column;gap:2px}
.xa-mb span{font:6px var(--mono);color:#354f62;text-align:center}
.xa-mb-t{height:3px;background:#142030;border-radius:1px}
.xa-mb-f{height:100%;border-radius:1px;transition:width .5s ease}
.xa-why{font:8px var(--mono);color:#4a6579;line-height:1.55}

/* === RIGHT DETAIL === */
.xe-detail{padding:13px;flex:1;min-height:0;overflow-y:auto}
.xe-detail::-webkit-scrollbar{width:3px}
.xe-detail::-webkit-scrollbar-thumb{background:#1d3344}
.xd-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;height:180px;gap:10px;color:#3a5668;text-align:center}
.xd-empty-icon{font-size:28px;opacity:.5}
.xd-empty p{font:9px var(--mono);line-height:1.6;max-width:200px;margin:0}
.xd-hd{display:flex;justify-content:space-between;align-items:center;margin-bottom:9px}
.xd-overall{font:700 22px var(--mono)}
.xd-pair{display:grid;grid-template-columns:1fr auto 1fr;gap:6px;align-items:center;margin-bottom:9px;background:#060f18;border:1px solid #182a38;padding:9px}
.xd-pair-item span{display:block;margin-bottom:2px}
.xd-pair-item strong{display:block;font:600 9px var(--mono);color:#a8cce5;margin-bottom:2px}
.xd-pair-item small{display:block;font:8px var(--mono);color:#3f5c6e}
.xd-arrow{font:500 16px var(--mono);color:#3e5a6e;text-align:center}
.xd-why{font:8px var(--mono);color:#4d6c82;line-height:1.6;padding:7px 8px;border-left:2px solid #2d5570;background:rgba(6,18,28,.7);margin-bottom:9px}
.xd-bars{display:flex;flex-direction:column;gap:5px;margin-bottom:9px}
.xb{display:grid;grid-template-columns:90px 1fr 32px;gap:5px;align-items:center}
.xb-l{font:8px var(--mono);color:#445e6e}
.xb-t{height:4px;background:#152333;border-radius:2px;overflow:hidden}
.xb-f{height:100%;border-radius:2px;transition:width .7s ease}
.xb-v{font:600 8px var(--mono);text-align:right}
.xd-climate{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#162535;margin-bottom:9px}
.xd-cc{padding:7px 5px;background:#050e18}
.xd-cc span{display:block;font:7px var(--mono);color:#354f62;margin-bottom:2px}
.xd-cc b{font:600 9px var(--mono);color:#7aaed0}
.xd-datasets{padding:7px 8px;border:1px solid #182a38;background:#040c14;margin-bottom:7px}
.xd-ds{display:inline-block;margin:3px 3px 0 0;padding:2px 6px;border:1px solid #233d50;color:#3f6070;font:7px var(--mono)}
.xd-disclaim{font:7px var(--mono);color:#2f4858;line-height:1.5;padding:5px 7px;border:1px solid #162430;background:#030a11}

/* === CONFIRM + HOW === */
.xe-confirm{width:100%;padding:11px;font:700 9px var(--mono);letter-spacing:1px;flex-shrink:0}
.xe-how{padding:11px;flex-shrink:0}
.xe-how-steps{display:flex;flex-direction:column;gap:7px;margin:8px 0}
.xe-hs{display:flex;gap:8px;align-items:flex-start}
.xe-hs b{font:700 8px var(--mono);color:#2f5068;border:1px solid #243c50;width:22px;height:22px;display:grid;place-items:center;flex-shrink:0}
.xe-hs span{font:8px var(--mono);color:#4a6475;line-height:1.55}
.xe-how-note{font:7px var(--mono);color:#2e4557;padding-top:6px;border-top:1px solid #1a2f3d;margin-top:4px}

@media(max-width:1100px){.xe-wrap{grid-template-columns:230px 1fr 260px}}
@media(max-width:850px){.xe-wrap{grid-template-columns:1fr 1fr}.xe-left{grid-column:1/-1;flex-direction:row;overflow-x:auto;overflow-y:visible}.xe-right{grid-column:1/-1}}
`;

let _cssInjected = false;
export function injectExploreCSS() {
  if (_cssInjected) return;
  const s = document.createElement('style');
  s.id = 'explore-css';
  s.textContent = CSS;
  document.head.appendChild(s);
  _cssInjected = true;
}

// ─── Scan ticker — updates DOM directly, no full re-render ──────────────────

let _scanTimer = null;

export function startScan(es, onComplete) {
  if (_scanTimer) clearInterval(_scanTimer);
  es.scanning = true;
  es.scanComplete = false;
  es.scanProgress = 0;

  _scanTimer = setInterval(() => {
    es.scanProgress = Math.min(100, es.scanProgress + (1.8 + Math.random() * 2.8));

    // Direct DOM update — no full re-render
    const fill = document.getElementById('xScanFill');
    const pct = document.getElementById('xScanPct');
    const led = document.querySelector('.xs-scan-led');
    if (fill) fill.style.width = es.scanProgress + '%';
    if (pct) pct.textContent = Math.round(es.scanProgress) + '%';

    // Update dataset items
    const done = Math.min(5, Math.floor((es.scanProgress / 100) * 5));
    const items = document.querySelectorAll('.xs-ds');
    items.forEach((item, i) => {
      item.classList.remove('done', 'act');
      const ic = item.querySelector('.xs-ds-ic');
      if (i < done) {
        item.classList.add('done');
        if (ic) ic.textContent = '✓';
        if (!item.querySelector('.xs-ds-v')) {
          const v = document.createElement('span');
          v.className = 'xs-ds-v';
          v.textContent = (70 + Math.round(Math.sin(i * 12.9898) * 13)) + '%';
          item.appendChild(v);
        }
      } else if (i === done) {
        item.classList.add('act');
        if (ic) ic.textContent = '⟳';
      } else {
        if (ic) ic.textContent = '○';
      }
    });

    if (es.scanProgress >= 100) {
      clearInterval(_scanTimer);
      es.scanning = false;
      es.scanComplete = true;
      if (led) { led.classList.remove('pulse'); led.classList.add('done'); }
      onComplete(); // Full re-render only when scan finishes
    }
  }, 90);
}

// ─── Event attachment ─────────────────────────────────────────────────────────

export function attachExploreEvents(es, onUpdate, onConfirm) {
  const wrap = document.getElementById('xeWrap');
  if (!wrap) return;

  // Body buttons
  wrap.querySelectorAll('[data-expl-body]').forEach(btn => {
    btn.addEventListener('click', () => {
      const newBody = btn.dataset.explBody;
      if (es.body === newBody) return;
      es.body = newBody;
      const sites = newBody === 'moon' ? MOON_SITES : MARS_SITES;
      es.selectedSiteId = sites[0].id;
      es.selectedAnalogId = null;
      es.scanning = false;
      es.scanComplete = false;
      es.scanProgress = 0;
      if (_scanTimer) clearInterval(_scanTimer);
      onUpdate();
    });
  });

  // Site cards
  wrap.querySelectorAll('[data-site]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (es.selectedSiteId === btn.dataset.site) return;
      es.selectedSiteId = btn.dataset.site;
      es.selectedAnalogId = null;
      es.scanning = false;
      es.scanComplete = false;
      es.scanProgress = 0;
      if (_scanTimer) clearInterval(_scanTimer);
      onUpdate();
    });
  });

  // Analog cards
  wrap.querySelectorAll('[data-analog]').forEach(btn => {
    btn.addEventListener('click', () => {
      es.selectedAnalogId = btn.dataset.analog;
      // Update detail panel directly
      const detail = document.getElementById('xDetail');
      if (detail) {
        const sites = es.body === 'moon' ? MOON_SITES : MARS_SITES;
        const site = sites.find(s => s.id === es.selectedSiteId);
        const analogs = ANALOGS_DB[site?.id] || [];
        const analog = analogs.find(a => a.id === es.selectedAnalogId);
        detail.innerHTML = detailPanel(site, analog);
      }
      // Update card selection state
      wrap.querySelectorAll('[data-analog]').forEach(c => c.classList.toggle('selected', c.dataset.analog === es.selectedAnalogId));
      // Show confirm button
      const rightCol = wrap.querySelector('.xe-right');
      if (rightCol && !document.getElementById('xConfirm')) {
        const btn2 = document.createElement('button');
        btn2.id = 'xConfirm';
        btn2.className = 'btn btn-primary xe-confirm';
        btn2.textContent = 'CONFIRM ANALOG → BUILD ›';
        btn2.addEventListener('click', () => onConfirm(es));
        rightCol.insertBefore(btn2, document.getElementById('xDetail').nextSibling);
      }
    });
  });

  // Scan button
  const scanBtn = document.getElementById('xScanBtn');
  if (scanBtn) {
    scanBtn.addEventListener('click', () => {
      if (es.scanning) return;
      // Update button immediately
      scanBtn.textContent = '⟳ SCANNING…';
      scanBtn.disabled = true;

      // Show scan box if not yet present
      const center = wrap.querySelector('.xe-center');
      const preScan = center?.querySelector('.xe-prescan');
      if (preScan) {
        preScan.outerHTML = scanBox(0, false);
      }

      startScan(es, () => {
        // Scan complete — do a targeted update
        scanBtn.textContent = '🔁 RE-SCAN';
        scanBtn.disabled = false;
        onUpdate(); // Now do a full re-render to show results
      });
    });
  }

  // Confirm button
  const confirmBtn = document.getElementById('xConfirm');
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => onConfirm(es));
  }
}
