import { runSimulation, compareRuns, normalizeInputs } from './engine.js';

function assert(cond, msg) {
  if (!cond) {
    console.error('FAIL', msg);
    process.exit(1);
  }
}

const a = runSimulation({ seed: 42, duration: 30, shock: 'heat' });
const b = runSimulation({ seed: 42, duration: 30, shock: 'heat' });
assert(JSON.stringify(a.days) === JSON.stringify(b.days), 'same seed must match');
assert(a.failureDay === b.failureDay, 'failure day stable');

const c = runSimulation({ seed: 43, duration: 30, shock: 'heat' });
assert(JSON.stringify(a.days) !== JSON.stringify(c.days), 'different seed must differ');

const z = runSimulation({ duration: 0 });
assert(z.days.length === 0 && z.failureCode === 'duration_zero', 'duration 0');

const dry = runSimulation({ waterReserve: 0, waterBackup: 0, duration: 10, seed: 1 });
assert(dry.days[0].water === 0, 'zero water');

const noCrew = runSimulation({ crewSize: 0, duration: 5, seed: 1 });
assert(noCrew.failureCode === 'crew_zero', 'zero crew');

const n = normalizeInputs({ waterReserve: -9, crewSize: 2.9 });
assert(n.waterReserve === 0 && n.crewSize === 2, 'normalize clamps');

const cmp = compareRuns({ seed: 7, duration: 20, shock: 'heat' }, [
  { name: 'water', overrides: { waterStorageUpliftPct: 40 } }
]);
assert(cmp.variants[0].result.resilienceScore >= 0, 'compare scores from sim');

console.log('engine tests passed');
