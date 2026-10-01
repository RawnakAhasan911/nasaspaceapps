/**
 * Solar system data integrity tests.
 * Fails if any body is missing parent, source_url, or as_of.
 * Run: node datasets/solar_system.test.js
 */
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const solarSystemData = JSON.parse(
  readFileSync(join(dirname(fileURLToPath(import.meta.url)), 'solar_system.json'), 'utf-8')
);

let passed = 0;
let failed = 0;
const errors = [];

function test(name, condition, message) {
  if (condition) {
    passed++;
  } else {
    failed++;
    errors.push({ name, message });
    console.error(`❌ ${name}: ${message}`);
  }
}

console.log('Running solar system integrity tests...\n');

test('metadata.as_of', !!solarSystemData.metadata?.as_of, 'metadata missing as_of');
test('metadata.source_url', !!solarSystemData.metadata?.source_url, 'metadata missing source_url');
test('bodies is array', Array.isArray(solarSystemData.bodies) && solarSystemData.bodies.length > 0, 'empty bodies');

const ids = [];
for (const body of solarSystemData.bodies) {
  const n = body.name || body.id || '?';
  test(`${n} has id`, typeof body.id === 'string' && body.id.length > 0, `${n} missing id`);
  test(`${n} has parent key`, Object.prototype.hasOwnProperty.call(body, 'parent'), `${n} missing parent`);
  test(`${n} has source_url`, typeof body.source_url === 'string' && body.source_url.startsWith('http'), `${n} missing source`);
  test(`${n} has as_of`, typeof body.as_of === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(body.as_of), `${n} missing as_of date`);
  test(`${n} has type`, typeof body.type === 'string', `${n} missing type`);
  if (body.type !== 'star') {
    test(`${n} parent non-null`, body.parent != null && String(body.parent).length > 0, `${n} parent null`);
  }
  ids.push(body.id);
}

const unique = new Set(ids);
test('unique ids', unique.size === ids.length, 'duplicate ids');

const byId = Object.fromEntries(solarSystemData.bodies.map((b) => [b.id, b]));
for (const body of solarSystemData.bodies) {
  if (body.parent) {
    test(`${body.id} parent exists`, !!byId[body.parent], `${body.id} parent ${body.parent} missing`);
  }
}

const expectMoons = { mercury: 0, venus: 0, earth: 1, mars: 2, jupiter: 115, saturn: 293, uranus: 29, neptune: 16 };
for (const [id, count] of Object.entries(expectMoons)) {
  test(`${id} moon_count ${count}`, byId[id]?.moon_count === count, `${id} moon_count is ${byId[id]?.moon_count}`);
}

test('phobos parent mars', byId.phobos?.parent === 'mars', 'phobos parent');
test('deimos parent mars', byId.deimos?.parent === 'mars', 'deimos parent');
test('moon parent earth', byId.moon?.parent === 'earth', 'moon parent');

for (const planet of solarSystemData.bodies.filter((b) => b.type === 'planet' || b.type === 'dwarf planet')) {
  const drawn = solarSystemData.bodies.filter((b) => b.type === 'moon' && b.parent === planet.id);
  test(`${planet.id} drawn <= total`, drawn.length <= planet.moon_count, `${planet.id} draws ${drawn.length} of ${planet.moon_count}`);
}

console.log(`\n${passed} passed, ${failed} failed`);
if (failed) {
  errors.forEach((e) => console.log(' -', e.name, e.message));
  process.exit(1);
}
process.exit(0);
