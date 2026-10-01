import catalog from '../../datasets/solar_system.json';

export { catalog };

export function bodies() {
  return catalog.bodies;
}

export function byId(id) {
  return catalog.bodies.find((b) => b.id === id);
}

export function planets() {
  return catalog.bodies.filter((b) => b.type === 'planet');
}

export function moonsOf(parentId) {
  return catalog.bodies.filter((b) => b.type === 'moon' && b.parent === parentId);
}

export function moonRemainder(parent) {
  const drawn = moonsOf(parent.id).length;
  const extra = Math.max(0, (parent.moon_count || 0) - drawn);
  return { drawn, extra, total: parent.moon_count || 0 };
}

export const ANALOGS = {
  mars: {
    target: { id: 'jezero', name: 'Jezero Crater', lat: 18.38, lon: 77.58, body: 'mars' },
    analog: { id: 'atacama', name: 'Atacama Desert, Chile', lat: -23.86, lon: -69.14, body: 'earth' },
    scores: { overall: 84, temperature: 87, terrain: 81, soil: 93, ndvi: 79 },
    scoresLabel: 'approximate',
    source: 'Cached analog model — not a live NASA POWER query'
  },
  moon: {
    target: { id: 'shackleton', name: 'Shackleton rim (south pole)', lat: -89.9, lon: 0, body: 'moon' },
    analog: { id: 'devon', name: 'Devon Island, Canada', lat: 75.33, lon: -89.79, body: 'earth' },
    scores: { overall: 79, temperature: 82, terrain: 87, soil: 74, ndvi: 61 },
    scoresLabel: 'approximate',
    source: 'Cached analog model — not a live NASA POWER query'
  }
};

export const CACHED_CLIMATE = {
  atacama: { elev_m: 2400, tmin_c: -2, tmax_c: 24, source: 'NASA POWER climatology (cached demo)', as_of: '2024-12-01' },
  devon: { elev_m: 500, tmin_c: -35, tmax_c: 8, source: 'NASA POWER climatology (cached demo)', as_of: '2024-12-01' }
};
