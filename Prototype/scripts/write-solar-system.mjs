/**
 * Writes datasets/solar_system.json — NASA Science moon counts as of Aug 2026.
 * Run: node scripts/write-solar-system.mjs
 */
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const AS_OF = '2026-08-31';
const SRC = {
  moonsIndex: 'https://science.nasa.gov/solar-system/moons/',
  mercury: 'https://science.nasa.gov/mercury/',
  venus: 'https://science.nasa.gov/venus/',
  earth: 'https://science.nasa.gov/moon/',
  mars: 'https://science.nasa.gov/mars/moons/',
  jupiter: 'https://science.nasa.gov/jupiter/jupiter-moons/',
  saturn: 'https://science.nasa.gov/saturn/moons/',
  uranus: 'https://science.nasa.gov/uranus/moons/',
  neptune: 'https://science.nasa.gov/neptune/moons/',
  pluto: 'https://science.nasa.gov/dwarf-planets/pluto/',
  ceres: 'https://science.nasa.gov/dwarf-planets/ceres/'
};

function body(extra) {
  return {
    texture: null,
    as_of: AS_OF,
    source_url: extra.source_url,
    approximate: true,
    ...extra
  };
}

const moon = (id, name, parent, radius_km, orb_km, period, rot, tilt, source_url, fact, extras = {}) =>
  body({
    id, name, type: 'moon', parent,
    radius_km,
    orbital_distance_au: orb_km / 149597870.7,
    orbital_distance_km: orb_km,
    orbital_period_days: period,
    rotation_period_days: rot,
    axial_tilt_degrees: tilt,
    moon_count: 0,
    playable: id === 'moon',
    science_target: ['europa', 'titan', 'enceladus'].includes(id),
    habitat_site: false,
    source_url,
    fact,
    ...extras
  });

const bodies = [
  body({
    id: 'sun', name: 'Sun', type: 'star', parent: null,
    radius_km: 696340, orbital_distance_au: 0, orbital_period_days: 0,
    rotation_period_days: 25.38, axial_tilt_degrees: 7.25, moon_count: 0,
    color: '#f4b65b', eccentricity: 0, inclination_deg: 0, playable: false,
    source_url: 'https://science.nasa.gov/sun/',
    fact: 'G-type main-sequence star at the center of the solar system.'
  }),
  body({
    id: 'mercury', name: 'Mercury', type: 'planet', parent: 'sun',
    radius_km: 2439.7, orbital_distance_au: 0.387098, orbital_period_days: 87.969,
    rotation_period_days: 58.646, axial_tilt_degrees: 0.034, moon_count: 0,
    color: '#9a9a93', eccentricity: 0.2056, inclination_deg: 7.005, playable: false,
    source_url: SRC.mercury,
    fact: 'No confirmed moons. Extreme day/night temperature contrast.'
  }),
  body({
    id: 'venus', name: 'Venus', type: 'planet', parent: 'sun',
    radius_km: 6051.8, orbital_distance_au: 0.723332, orbital_period_days: 224.701,
    rotation_period_days: -243.025, axial_tilt_degrees: 177.36, moon_count: 0,
    color: '#c9986e', eccentricity: 0.0068, inclination_deg: 3.395, playable: false,
    future_scope: true, science_target: true, habitat_site: false,
    source_url: SRC.venus,
    fact: 'No confirmed moons. Future-scope science target — not a HABITAT-X habitat site.'
  }),
  body({
    id: 'earth', name: 'Earth', type: 'planet', parent: 'sun',
    radius_km: 6371.0, orbital_distance_au: 1.0, orbital_period_days: 365.256,
    rotation_period_days: 0.997269, axial_tilt_degrees: 23.44, moon_count: 1,
    color: '#3e83c4', eccentricity: 0.0167, inclination_deg: 0.000, playable: false,
    texture: 'https://images-assets.nasa.gov/image/PIA18033/PIA18033~orig.jpg',
    source_url: SRC.earth,
    fact: 'One confirmed moon. Analog matching uses Earth sites only.'
  }),
  body({
    id: 'mars', name: 'Mars', type: 'planet', parent: 'sun',
    radius_km: 3389.5, orbital_distance_au: 1.52368, orbital_period_days: 686.98,
    rotation_period_days: 1.025957, axial_tilt_degrees: 25.19, moon_count: 2,
    color: '#b85f45', eccentricity: 0.0934, inclination_deg: 1.850, playable: true,
    texture: 'https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/09/6/6453_mars-globe-valles-marineris-enhanced-full2.jpg',
    source_url: SRC.mars,
    fact: 'Two confirmed moons: Phobos and Deimos. Playable HABITAT-X target.'
  }),
  body({
    id: 'ceres', name: 'Ceres', type: 'dwarf planet', parent: 'sun',
    radius_km: 469.7, orbital_distance_au: 2.767, orbital_period_days: 1681.6,
    rotation_period_days: 0.3781, axial_tilt_degrees: 4.0, moon_count: 0,
    color: '#b8b0a4', eccentricity: 0.0758, inclination_deg: 10.59, playable: false,
    future_scope: true, science_target: true, habitat_site: false,
    source_url: SRC.ceres,
    fact: 'Largest object in the main asteroid belt. Future-scope science target, not a habitat site.'
  }),
  body({
    id: 'jupiter', name: 'Jupiter', type: 'planet', parent: 'sun',
    radius_km: 69911, orbital_distance_au: 5.2026, orbital_period_days: 4332.59,
    rotation_period_days: 0.41354, axial_tilt_degrees: 3.13, moon_count: 115,
    color: '#b99572', eccentricity: 0.0489, inclination_deg: 1.303, playable: false,
    source_url: SRC.jupiter,
    fact: '115 moons officially recognized by the IAU (NASA Jupiter Moons page). Only major moons are drawn.'
  }),
  body({
    id: 'saturn', name: 'Saturn', type: 'planet', parent: 'sun',
    radius_km: 58232, orbital_distance_au: 9.5549, orbital_period_days: 10759.22,
    rotation_period_days: 0.44401, axial_tilt_degrees: 26.73, moon_count: 293,
    color: '#cabda3', eccentricity: 0.0565, inclination_deg: 2.485, playable: false, rings: true,
    source_url: SRC.saturn,
    fact: '293 confirmed moons as of August 2026 (NASA Saturn Moons page). Only major moons are drawn.'
  }),
  body({
    id: 'uranus', name: 'Uranus', type: 'planet', parent: 'sun',
    radius_km: 25362, orbital_distance_au: 19.2184, orbital_period_days: 30688.5,
    rotation_period_days: -0.71833, axial_tilt_degrees: 97.77, moon_count: 29,
    color: '#7bbfd0', eccentricity: 0.0463, inclination_deg: 0.773, playable: false, rings: true,
    source_url: SRC.uranus,
    fact: '29 known moons as of August 2026 (NASA Uranus Moons page). Five major moons are drawn.'
  }),
  body({
    id: 'neptune', name: 'Neptune', type: 'planet', parent: 'sun',
    radius_km: 24622, orbital_distance_au: 30.1104, orbital_period_days: 60195,
    rotation_period_days: 0.67125, axial_tilt_degrees: 28.32, moon_count: 16,
    color: '#4f76bd', eccentricity: 0.0095, inclination_deg: 1.770, playable: false,
    source_url: SRC.neptune,
    fact: '16 officially recognized moons (NASA Neptune Moons page). Major moons Triton, Proteus, Nereid are drawn.'
  }),
  body({
    id: 'pluto', name: 'Pluto', type: 'dwarf planet', parent: 'sun',
    radius_km: 1188.3, orbital_distance_au: 39.482, orbital_period_days: 90560,
    rotation_period_days: -6.3872, axial_tilt_degrees: 122.53, moon_count: 5,
    color: '#c4a07a', eccentricity: 0.2488, inclination_deg: 17.16, playable: false,
    future_scope: true, science_target: true, habitat_site: false,
    source_url: SRC.pluto,
    fact: 'Dwarf planet with five known moons. Future-scope science target, not a habitat site.'
  }),
  moon('moon', 'Moon', 'earth', 1737.4, 384400, 27.321661, 27.321661, 6.68, SRC.earth,
    'Tidally locked: the same face points toward Earth. Playable HABITAT-X target.',
    { color: '#cfc8bc', texture: 'https://images-assets.nasa.gov/image/PIA14011/PIA14011~orig.jpg', playable: true }),
  moon('phobos', 'Phobos', 'mars', 11.08, 9376, 0.31891, 0.31891, 0.0, SRC.mars,
    'Inner moon of Mars; irregular shape. Illustrative mesh is labeled in-scene.', { color: '#8a7a70' }),
  moon('deimos', 'Deimos', 'mars', 6.2, 23463, 1.263, 1.263, 0.0, SRC.mars,
    'Outer moon of Mars.', { color: '#9a8b7c' }),
  moon('io', 'Io', 'jupiter', 1821.6, 421700, 1.769138, 1.769138, 0.0, SRC.jupiter,
    'Most volcanically active body in the solar system.', { color: '#e0c45a' }),
  moon('europa', 'Europa', 'jupiter', 1560.8, 671034, 3.551181, 3.551181, 0.1, SRC.jupiter,
    'Ocean moon / science target. Not a HABITAT-X human habitat site.', { color: '#c9d4e0', science_target: true, future_scope: true }),
  moon('ganymede', 'Ganymede', 'jupiter', 2634.1, 1070412, 7.154553, 7.154553, 0.2, SRC.jupiter,
    'Largest moon in the solar system.', { color: '#9a8b76' }),
  moon('callisto', 'Callisto', 'jupiter', 2410.3, 1882709, 16.68902, 16.68902, 0.0, SRC.jupiter,
    'Heavily cratered Galilean moon.', { color: '#6d645c' }),
  moon('mimas', 'Mimas', 'saturn', 198.2, 185539, 0.942422, 0.942422, 0.0, SRC.saturn,
    'Innermost major mid-sized icy moon of Saturn.', { color: '#d8d4cc' }),
  moon('enceladus', 'Enceladus', 'saturn', 252.1, 237948, 1.370218, 1.370218, 0.0, SRC.saturn,
    'Ocean moon with south-polar plumes. Science target, not a habitat site.', { color: '#e8eef4', science_target: true, future_scope: true }),
  moon('tethys', 'Tethys', 'saturn', 531.0, 294619, 1.887802, 1.887802, 0.0, SRC.saturn,
    'Icy Saturnian moon.', { color: '#d0ccc4' }),
  moon('dione', 'Dione', 'saturn', 561.4, 377396, 2.736915, 2.736915, 0.0, SRC.saturn,
    'Icy Saturnian moon.', { color: '#c8c2b8' }),
  moon('rhea', 'Rhea', 'saturn', 763.8, 527108, 4.518212, 4.518212, 0.0, SRC.saturn,
    'Second-largest moon of Saturn.', { color: '#c0b8ac' }),
  moon('titan', 'Titan', 'saturn', 2574.7, 1221870, 15.9454, 15.9454, 0.0, SRC.saturn,
    'Thick atmosphere and surface liquids. Science target, not a habitat site.', { color: '#c48a3a', science_target: true, future_scope: true }),
  moon('iapetus', 'Iapetus', 'saturn', 734.5, 3560820, 79.3215, 79.3215, 0.0, SRC.saturn,
    'Two-tone Saturnian moon on a distant orbit.', { color: '#6a5344' }),
  moon('miranda', 'Miranda', 'uranus', 235.8, 129390, 1.413479, 1.413479, 0.0, SRC.uranus,
    'Innermost major moon of Uranus.', { color: '#b8c0c4' }),
  moon('ariel', 'Ariel', 'uranus', 578.9, 191020, 2.520379, 2.520379, 0.0, SRC.uranus,
    'Major Uranian moon.', { color: '#c5d0d4' }),
  moon('umbriel', 'Umbriel', 'uranus', 584.7, 266300, 4.144177, 4.144177, 0.0, SRC.uranus,
    'Dark major moon of Uranus.', { color: '#6a6e74' }),
  moon('titania', 'Titania', 'uranus', 788.4, 435910, 8.705872, 8.705872, 0.0, SRC.uranus,
    'Largest moon of Uranus.', { color: '#9aa4aa' }),
  moon('oberon', 'Oberon', 'uranus', 761.4, 583520, 13.46324, 13.46324, 0.0, SRC.uranus,
    'Outermost major moon of Uranus.', { color: '#8a9096' }),
  moon('proteus', 'Proteus', 'neptune', 210, 117647, 1.122315, 1.122315, 0.0, SRC.neptune,
    'Second-largest Neptunian moon; irregular.', { color: '#7a7e84' }),
  moon('triton', 'Triton', 'neptune', 1353.4, 354759, -5.87685, 5.87685, 0.0, SRC.neptune,
    'Largest moon of Neptune; retrograde captured orbit.', { color: '#c8cce0' }),
  moon('nereid', 'Nereid', 'neptune', 170, 5513818, 360.136, 360.136, 0.0, SRC.neptune,
    'Distant irregular moon of Neptune.', { color: '#a8b0b8' }),
  moon('charon', 'Charon', 'pluto', 606, 19591, 6.3872, 6.3872, 0.0, SRC.pluto,
    'Pluto’s large companion. Future-scope only.', { color: '#b0a090', future_scope: true, science_target: true })
];

const data = {
  metadata: {
    name: 'HABITAT-X Solar System Data',
    version: '2.0.0',
    as_of: AS_OF,
    source: 'NASA Science — Solar System Exploration',
    source_url: SRC.moonsIndex,
    moon_count_sources: SRC,
    notes: [
      'Moon counts change as new satellites are confirmed. Counts below are taken from NASA Science planet-moons pages retrieved 2026-09-29.',
      'Jupiter: 115 officially recognized moons — https://science.nasa.gov/jupiter/jupiter-moons/',
      'Saturn: 293 confirmed moons as of August 2026 — https://science.nasa.gov/saturn/moons/',
      'Uranus: 29 known moons as of August 2026 — https://science.nasa.gov/uranus/moons/',
      'Neptune: 16 officially recognized moons — https://science.nasa.gov/neptune/moons/',
      'Mercury 0, Venus 0, Earth 1, Mars 2 (Phobos, Deimos) — NASA Science planet pages.',
      'Orbital elements are visualization-grade (J2000-era approximate), labeled approximate — not spacecraft navigation ephemerides.',
      'Only major named moons are rendered. Remaining moons appear as +N more (total: X). Fake moons are never drawn.',
      'Playable habitat targets are Moon and Mars only. Europa, Titan, Enceladus, Venus, Pluto, Ceres are science / future-scope objects, not human habitat sites.'
    ],
    license: 'U.S. government works / NASA media as cited per body; parameters compiled for HABITAT-X visualization'
  },
  bodies
};

const out = join(__dirname, '..', 'datasets', 'solar_system.json');
writeFileSync(out, JSON.stringify(data, null, 2));
console.log('Wrote', out, 'bodies:', bodies.length);
