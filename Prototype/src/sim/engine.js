/** Deterministic day-stepped settlement simulation. Same inputs + seed => same output. */

export function clamp(n, lo, hi) {
  return Math.max(lo, Math.min(hi, n));
}

export function createRng(seed) {
  let s = (Number(seed) >>> 0) || 20260929;
  return function rng() {
    s = (Math.imul(1664525, s) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

export function defaultInputs() {
  return {
    seed: 20260929,
    duration: 30,
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
    shock: null,
    waterStorageUpliftPct: 0,
    demandCutPct: 0,
    energyBackupBoostPct: 0,
    workloadCutPct: 0,
    cropDemandCutPct: 0
  };
}

export function normalizeInputs(raw = {}) {
  const d = defaultInputs();
  const n = { ...d, ...raw };
  n.seed = Number.isFinite(+n.seed) ? (+n.seed >>> 0) : d.seed;
  n.duration = Math.max(0, Math.floor(+n.duration || 0));
  n.waterReserve = Math.max(0, +n.waterReserve || 0);
  n.waterDaily = Math.max(0, +n.waterDaily || 0);
  n.waterBackup = Math.max(0, +n.waterBackup || 0);
  n.foodStock = Math.max(0, +n.foodStock || 0);
  n.foodDaily = Math.max(0, +n.foodDaily || 0);
  n.cropCapacity = clamp(+n.cropCapacity || 0, 0, 100);
  n.energyGen = Math.max(0, +n.energyGen || 0);
  n.energyStorage = Math.max(0, +n.energyStorage || 0);
  n.energyBackup = clamp(+n.energyBackup || 0, 0, 100);
  n.shelterCap = Math.max(0, +n.shelterCap || 0);
  n.crewSize = Math.max(0, Math.floor(+n.crewSize || 0));
  n.workload = clamp(+n.workload || 0, 0, 100);
  n.waterStorageUpliftPct = clamp(+n.waterStorageUpliftPct || 0, 0, 200);
  n.demandCutPct = clamp(+n.demandCutPct || 0, 0, 80);
  n.energyBackupBoostPct = clamp(+n.energyBackupBoostPct || 0, 0, 100);
  n.workloadCutPct = clamp(+n.workloadCutPct || 0, 0, 80);
  n.cropDemandCutPct = clamp(+n.cropDemandCutPct || 0, 0, 80);
  n.shock = n.shock || null;
  return n;
}

const NODES = [
  { id: 'temperature', label: 'Temperature load' },
  { id: 'water-demand', label: 'Water demand' },
  { id: 'water-reserve', label: 'Water reserve' },
  { id: 'agriculture', label: 'Agriculture' },
  { id: 'food-production', label: 'Food production' },
  { id: 'food-reserve', label: 'Food reserve' },
  { id: 'energy', label: 'Energy' },
  { id: 'crew-capacity', label: 'Crew capacity' }
];

export function nodeCatalog() {
  return NODES;
}

/**
 * Run a full mission. All numbers come from this function.
 */
export function runSimulation(raw) {
  const inputs = normalizeInputs(raw);
  const rng = createRng(inputs.seed);
  const days = [];

  if (inputs.duration === 0) {
    return summarize(inputs, days, 'duration_zero', null);
  }

  const waterCap = inputs.waterReserve * (1 + inputs.waterStorageUpliftPct / 100) + inputs.waterBackup;
  let water = waterCap;
  let food = inputs.foodStock;
  const energyCap = inputs.energyStorage * (1 + inputs.energyBackupBoostPct / 100);
  let energy = energyCap;
  let crewAble = inputs.crewSize;
  let fail = null;
  let failDay = null;

  const demandScale = 1 - inputs.demandCutPct / 100;
  const cropScale = 1 - inputs.cropDemandCutPct / 100;
  const workScale = 1 - inputs.workloadCutPct / 100;

  for (let day = 1; day <= inputs.duration; day++) {
    const weather = 0.35 + rng() * 0.15;
    let heatExtra = 0;
    let waterAvail = 1;
    let powerAvail = 1;
    let crewAdd = 0;
    if (inputs.shock === 'heat' && day >= 6) heatExtra = 5;
    if (inputs.shock === 'water') waterAvail = 0.8;
    if (inputs.shock === 'power') powerAvail = 0.7;
    if (inputs.shock === 'crew') crewAdd = 5;

    const heads = inputs.crewSize + crewAdd;
    if (heads === 0) {
      days.push(record(day, 0, 0, 0, 0, 20 + weather, heatExtra, 'crew_zero'));
      fail = fail || 'crew_zero';
      failDay = failDay || day;
      continue;
    }

    const cooling = heatExtra * 18;
    const waterNeed = (inputs.waterDaily * heads / Math.max(1, inputs.crewSize) + cooling) * demandScale * (2 - waterAvail);
    water -= waterNeed;
    if (water < 0) water = 0;

    const waterFrac = waterCap > 0 ? water / waterCap : 0;
    const agri = inputs.cropCapacity / 100 * clamp(waterFrac / 0.35, 0, 1) * cropScale;
    const foodGrown = 22 * agri;
    const foodNeed = inputs.foodDaily * heads / Math.max(1, inputs.crewSize) * cropScale;
    food += foodGrown - foodNeed;
    if (food < 0) food = 0;

    const gen = inputs.energyGen * powerAvail * (1 + inputs.energyBackup / 200);
    energy += gen - (38 + heads * 1.1 + heatExtra * 2.2);
    energy = clamp(energy, 0, energyCap || 1);

    const waterPct = waterCap > 0 ? (water / waterCap) * 100 : 0;
    const foodPct = inputs.foodStock > 0 ? clamp((food / (inputs.foodStock * 1.4)) * 100, 0, 100) : 0;
    const energyPct = energyCap > 0 ? (energy / energyCap) * 100 : 0;
    const load = clamp(
      (inputs.workload * workScale) + (waterPct < 40 ? 18 : 0) + (foodPct < 40 ? 12 : 0) + (energyPct < 40 ? 10 : 0) + heatExtra * 1.4,
      0,
      100
    );
    crewAble = waterPct <= 0 || foodPct <= 0 ? 0 : heads;

    const temp = 18 + weather * 8 + heatExtra + (1 - waterFrac) * 4;
    let flag = null;
    if (waterPct <= 0) flag = 'water_depleted';
    else if (foodPct <= 0) flag = 'food_depleted';
    else if (energyPct <= 0) flag = 'energy_depleted';
    else if (waterPct < 12) flag = 'water_critical';
    else if (load > 92) flag = 'crew_exhausted';

    if (flag && !fail) {
      fail = flag;
      failDay = day;
    }

    days.push(record(day, waterPct, foodPct, energyPct, load, temp, heatExtra, flag));
  }

  return summarize(inputs, days, fail, failDay);
}

function record(day, water, food, energy, crew, temp, heatExtra, flag) {
  return {
    day,
    water: round1(water),
    food: round1(food),
    energy: round1(energy),
    crew: round1(crew),
    temp: round1(temp),
    heatExtra: round1(heatExtra),
    flag
  };
}

function round1(n) {
  return Math.round(n * 10) / 10;
}

function summarize(inputs, days, fail, failDay) {
  const last = days[days.length - 1] || { water: 0, food: 0, energy: 0, crew: 0, temp: 0 };
  const critical = days.find((d) => d.water < 12 || d.food < 12 || d.energy < 12 || d.crew > 92);
  const recovery = days.find((d) => critical && d.day > critical.day && d.water >= 25 && d.food >= 25);
  const resilience = Math.round(
    clamp(
      (last.water + last.food + last.energy) / 3 - (failDay ? (30 - failDay) * 1.8 : 0),
      0,
      100
    )
  );
  const chain = buildChain(days, inputs, fail, failDay);
  return {
    inputs,
    days,
    failureDay: failDay,
    failureCode: fail,
    recoveryDay: recovery ? recovery.day : null,
    recoveryTime: recovery && failDay ? recovery.day - failDay : null,
    resilienceScore: resilience,
    endState: last,
    chain,
    source: 'lifeboat-sim-v2',
    approximate: false
  };
}

function buildChain(days, inputs, fail, failDay) {
  const snap = days[Math.max(0, (failDay || days.length) - 1)] || days[0];
  if (!snap) {
    return NODES.map((n) => ({
      id: n.id,
      label: n.label,
      changed: 'n/a',
      why: 'No simulation days (duration 0).',
      dependency: null,
      downstream: []
    }));
  }
  const waterWhy =
    inputs.shock === 'heat'
      ? 'Heat shock raises cooling demand while daily draw continues.'
      : inputs.shock === 'water'
        ? 'Water-availability shock (−20%) reduces refill relative to draw.'
        : 'Baseline demand versus finite storage.';
  return [
    {
      id: 'temperature',
      label: 'Temperature load',
      changed: `${snap.temp.toFixed(1)} °C sim thermal load`,
      why: inputs.shock === 'heat' ? 'User-injected +5 °C heat shock from day 6.' : 'No heat shock; weather term from seeded RNG only.',
      dependency: null,
      downstream: ['water-demand']
    },
    {
      id: 'water-demand',
      label: 'Water demand',
      changed: `draw scaled by crew ${inputs.crewSize} and heat extra ${snap.heatExtra}`,
      why: waterWhy,
      dependency: 'temperature',
      downstream: ['water-reserve']
    },
    {
      id: 'water-reserve',
      label: 'Water reserve',
      changed: `${snap.water.toFixed(1)}% remaining`,
      why: 'Demand subtracted from reserve each day; backup is included in capacity at start.',
      dependency: 'water-demand',
      downstream: ['agriculture']
    },
    {
      id: 'agriculture',
      label: 'Agriculture',
      changed: `crop capacity ${inputs.cropCapacity}% gated by water fraction`,
      why: 'Crop output is reduced when water reserve drops below a 35% operating margin.',
      dependency: 'water-reserve',
      downstream: ['food-production']
    },
    {
      id: 'food-production',
      label: 'Food production',
      changed: `grown vs daily ${inputs.foodDaily} kg/day`,
      why: 'Production tracks agriculture; shortage draws the food stock.',
      dependency: 'agriculture',
      downstream: ['food-reserve']
    },
    {
      id: 'food-reserve',
      label: 'Food reserve',
      changed: `${snap.food.toFixed(1)}% remaining`,
      why: 'Stock plus grown minus crew demand.',
      dependency: 'food-production',
      downstream: ['crew-capacity']
    },
    {
      id: 'energy',
      label: 'Energy',
      changed: `${snap.energy.toFixed(1)}% remaining`,
      why: inputs.shock === 'power' ? 'Generation reduced 30% by power shock.' : 'Generation minus habitat + thermal load.',
      dependency: null,
      downstream: ['crew-capacity']
    },
    {
      id: 'crew-capacity',
      label: 'Crew capacity',
      changed: `workload proxy ${snap.crew.toFixed(1)}%`,
      why: 'Workload rises when water, food, or energy is constrained. Not a medical diagnosis.',
      dependency: fail?.startsWith('water') ? 'water-reserve' : fail?.startsWith('food') ? 'food-reserve' : 'energy',
      downstream: []
    }
  ];
}

export function compareRuns(baselineInputs, variants) {
  const baseline = runSimulation(baselineInputs);
  return {
    baseline,
    variants: variants.map((v) => ({
      name: v.name,
      result: runSimulation({ ...baselineInputs, ...v.overrides })
    }))
  };
}
