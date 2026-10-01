const KEY = 'lifeboat.mission.v2';

export const STAGES = [
  { id: 'landing', label: 'HOME', unlock: () => true },
  { id: 'tutorial', label: 'TUTORIAL', unlock: () => true },
  { id: 'explore', label: 'EXPLORE', unlock: (s) => s.progress.tutorialDone || s.skipTutorial },
  { id: 'build', label: 'BUILD', unlock: (s) => s.progress.analogSelected },
  { id: 'simulate', label: 'SIMULATE', unlock: (s) => s.progress.built },
  { id: 'trace', label: 'TRACE', unlock: (s) => s.progress.simulated },
  { id: 'intervene', label: 'INTERVENE', unlock: (s) => s.progress.traced },
  { id: 'compare', label: 'COMPARE', unlock: (s) => s.progress.intervened },
  { id: 'researcher', label: 'RESEARCHER', unlock: (s) => s.progress.simulated },
  { id: 'report', label: 'REPORT', unlock: (s) => s.progress.compared }
];

export function defaultMission() {
  return {
    route: 'landing',
    skipTutorial: false,
    planet: 'mars',
    analogKey: 'mars',
    selectedBody: 'mars',
    playing: true,
    speed: 8,
    paused: false,
    days: 0,
    showOrbits: true,
    showLabels: true,
    scale: 'explorer',
    quality: 'auto',
    tutorial: 0,
    simDay: 1,
    simPlaying: false,
    shock: null,
    seed: 20260929,
    build: {
      waterReserve: 8400,
      waterDaily: 260,
      waterBackup: 1200,
      foodStock: 2100,
      foodDaily: 58,
      cropCapacity: 72,
      energyGen: 94,
      energyStorage: 180,
      energyBackup: 35,
      shelterCap: 28,
      crewSize: 20,
      workload: 62,
      facilities: [
        { id: 'hab', type: 'habitat', x: 48, y: 42 },
        { id: 'tank', type: 'water', x: 32, y: 58 },
        { id: 'array', type: 'energy', x: 64, y: 56 }
      ]
    },
    undo: [],
    interventions: { water: true, demand: false, energy: true, crew: true, crop: false },
    waterUplift: 35,
    workloadCut: 15,
    simResult: null,
    interventionResult: null,
    selectedNode: 'temperature',
    log: [{ t: Date.now(), text: 'Mission console online. Cached NASA reference data loaded.' }],
    progress: {
      tutorialDone: false,
      analogSelected: false,
      built: false,
      simulated: false,
      traced: false,
      intervened: false,
      compared: false
    },
    settings: {
      master: 0.22,
      ambient: 0.45,
      ui: 0.5,
      simulation: 0.5,
      alerts: 0.55,
      muted: false,
      reduceSound: false,
      systemCursor: false,
      reducedMotion: false
    },
    achievements: []
  };
}

export function loadMission() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultMission();
    return { ...defaultMission(), ...JSON.parse(raw), settings: { ...defaultMission().settings, ...(JSON.parse(raw).settings || {}) } };
  } catch {
    return defaultMission();
  }
}

export function saveMission(state) {
  try {
    const { simResult, interventionResult, ...rest } = state;
    localStorage.setItem(
      KEY,
      JSON.stringify({
        ...rest,
        simResult: simResult
          ? { failureDay: simResult.failureDay, resilienceScore: simResult.resilienceScore, failureCode: simResult.failureCode, endState: simResult.endState }
          : null,
        interventionResult: interventionResult
          ? { failureDay: interventionResult.failureDay, resilienceScore: interventionResult.resilienceScore, endState: interventionResult.endState }
          : null
      })
    );
  } catch {
    /* quota / private mode */
  }
}

export function canEnter(route, state) {
  const stage = STAGES.find((s) => s.id === route);
  return stage ? stage.unlock(state) : false;
}

export function log(state, text) {
  state.log = [{ t: Date.now(), text }, ...state.log].slice(0, 40);
}

export function grant(state, id, label) {
  if (state.achievements.some((a) => a.id === id)) return;
  state.achievements.push({ id, label, t: Date.now() });
  log(state, `Recorded: ${label}`);
}
