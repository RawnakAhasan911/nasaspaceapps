import * as THREE from 'three';
import { moonsOf, moonRemainder, planets, byId } from '../data/catalog.js';

export function seeded(i) {
  const x = Math.sin(i * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

export function disposeObject(obj) {
  obj.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) {
      const mats = Array.isArray(o.material) ? o.material : [o.material];
      mats.forEach((m) => {
        if (m.map) m.map.dispose();
        m.dispose();
      });
    }
  });
}

function canvasTex(a, b, seed) {
  const cv = document.createElement('canvas');
  cv.width = 256;
  cv.height = 128;
  const ctx = cv.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 256, 128);
  g.addColorStop(0, a);
  g.addColorStop(1, b);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 128);
  for (let y = 0; y < 128; y += 4) {
    for (let x = 0; x < 256; x += 4) {
      ctx.fillStyle = `rgba(255,255,255,${seeded(x * 19 + y * 11 + seed) > 0.88 ? 0.2 : 0.03})`;
      ctx.fillRect(x, y, 4, 4);
    }
  }
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function texFor(body, loader, onFail) {
  if (!body.texture) return canvasTex(body.color || '#888', '#111', body.id.length);
  const t = loader.load(
    body.texture,
    undefined,
    undefined,
    () => onFail(t, body)
  );
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function explorerOrbit(body) {
  if (body.type === 'star') return 0;
  const au = body.orbital_distance_au || 0;
  return 2.2 + Math.pow(au, 0.52) * 4.15;
}

export function trueOrbit(body) {
  return (body.orbital_distance_au || 0) * 6.2;
}

export function displayRadius(body, scaleMode) {
  const km = body.radius_km || 1;
  if (body.type === 'star') return scaleMode === 'true' ? 0.35 : 0.78;
  if (body.type === 'moon') {
    const r = Math.max(0.018, Math.pow(km / 6371, 0.45) * (scaleMode === 'true' ? 0.08 : 0.12));
    return r;
  }
  const rel = km / 6371;
  if (scaleMode === 'true') return Math.max(0.04, rel * 0.085);
  return Math.max(0.12, Math.pow(rel, 0.55) * 0.42);
}

export function createStarfield(count) {
  const g = new THREE.BufferGeometry();
  const p = new Float32Array(count * 3);
  const c = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 70 + seeded(i) * 160;
    const theta = seeded(i + 19) * Math.PI * 2;
    const phi = Math.acos(2 * seeded(i + 3) - 1);
    p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    p[i * 3 + 1] = r * Math.cos(phi);
    p[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    const hot = seeded(i + 8);
    c[i * 3] = hot > 0.82 ? 0.62 : 0.83;
    c[i * 3 + 1] = hot > 0.92 ? 0.72 : 0.9;
    c[i * 3 + 2] = 1;
  }
  g.setAttribute('position', new THREE.BufferAttribute(p, 3));
  g.setAttribute('color', new THREE.BufferAttribute(c, 3));
  return new THREE.Points(
    g,
    new THREE.PointsMaterial({ size: 0.12, vertexColors: true, transparent: true, opacity: 0.8, depthWrite: false, sizeAttenuation: true })
  );
}

export function createInstancedBelt(n, r1, r2, tilt) {
  const geo = new THREE.SphereGeometry(0.018, 4, 3);
  const mat = new THREE.MeshBasicMaterial({ color: 0x6d6257, transparent: true, opacity: 0.45 });
  const mesh = new THREE.InstancedMesh(geo, mat, n);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const s = new THREE.Vector3();
  for (let i = 0; i < n; i++) {
    const a = seeded(i * 7) * Math.PI * 2;
    const r = r1 + (r2 - r1) * seeded(i * 11);
    s.setScalar(0.6 + seeded(i) * 1.4);
    m.compose(new THREE.Vector3(Math.cos(a) * r, (seeded(i * 13) - 0.5) * 0.35, Math.sin(a) * r), q, s);
    mesh.setMatrixAt(i, m);
  }
  mesh.rotation.x = tilt;
  mesh.instanceMatrix.needsUpdate = true;
  return mesh;
}

function orbitLine(radius, e, iDeg, color = 0x2d526b) {
  const curve = new THREE.EllipseCurve(0, 0, radius, radius * (1 - e), 0, Math.PI * 2, false, 0);
  const pts = curve.getPoints(96).map((v) => new THREE.Vector3(v.x, 0, v.y));
  const l = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.38 }));
  l.rotation.x = (iDeg * Math.PI) / 180;
  l.userData.orbit = true;
  return l;
}

export function latLonToVec(lat, lon, r) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const th = ((lon + 180) * Math.PI) / 180;
  return new THREE.Vector3(-r * Math.sin(phi) * Math.cos(th), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(th));
}

export function buildProceduralRocket() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, 0.9, 12), new THREE.MeshStandardMaterial({ color: 0xdce6f0, metalness: 0.35, roughness: 0.4 }));
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.32, 12), new THREE.MeshStandardMaterial({ color: 0xfc3d21, metalness: 0.2, roughness: 0.45 }));
  nose.position.y = 0.61;
  const finM = new THREE.MeshStandardMaterial({ color: 0x0b3d91 });
  for (let i = 0; i < 3; i++) {
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.28, 0.18), finM);
    const a = (i / 3) * Math.PI * 2;
    fin.position.set(Math.cos(a) * 0.16, -0.38, Math.sin(a) * 0.16);
    fin.rotation.y = a;
    g.add(fin);
  }
  const glow = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.35, 8), new THREE.MeshBasicMaterial({ color: 0xffaa44, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending }));
  glow.rotation.x = Math.PI;
  glow.position.y = -0.62;
  g.add(body, nose, glow);
  g.userData.glow = glow;
  g.userData.illustrative = true;
  return g;
}

export function createWorld(scene, opts) {
  const loader = new THREE.TextureLoader();
  const bodies = [];
  const groups = {};
  const low = opts.lowPower;

  const stars = createStarfield(low ? 2500 : 9000);
  scene.add(stars);

  const belt1 = createInstancedBelt(low ? 280 : 900, 7.1, 8.4, 0.06);
  const belt2 = createInstancedBelt(low ? 400 : 1400, 20, 28, 0.02);
  scene.add(belt1, belt2);

  const sun = byId('sun');
  const sunMesh = new THREE.Mesh(
    new THREE.SphereGeometry(displayRadius(sun, 'explorer'), low ? 32 : 64, low ? 32 : 64),
    new THREE.MeshStandardMaterial({ color: 0xffc45f, emissive: 0xff8b1f, emissiveIntensity: 2.4, roughness: 0.8 })
  );
  sunMesh.userData = { type: 'star', key: 'sun', body: sun };
  scene.add(sunMesh);
  bodies.push({ id: 'sun', group: sunMesh, mesh: sunMesh, body: sun });
  const corona = new THREE.Mesh(
    new THREE.SphereGeometry(displayRadius(sun, 'explorer') * 1.45, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0xffa32f, transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending, side: THREE.BackSide, depthWrite: false })
  );
  scene.add(corona);

  const rocket = buildProceduralRocket();
  rocket.position.set(-2.2, 1.4, 8);
  rocket.visible = false;
  scene.add(rocket);

  const trailGeo = new THREE.BufferGeometry();
  const trailCount = 80;
  const trailPos = new Float32Array(trailCount * 3);
  trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPos, 3));
  const trail = new THREE.Points(trailGeo, new THREE.PointsMaterial({ color: 0xffcc88, size: 0.05, transparent: true, opacity: 0.5, depthWrite: false }));
  trail.visible = false;
  scene.add(trail);

  planets().forEach((p) => {
    const group = new THREE.Group();
    group.userData = { type: 'planet', key: p.id, body: p };
    group.rotation.z = ((p.inclination_deg || 0) * Math.PI) / 180 * 0.15;
    const vis = displayRadius(p, 'explorer');
    const mat = new THREE.MeshStandardMaterial({
      map: texFor(p, loader, (t) => {
        t.image = canvasTex(p.color, '#111', 2).image;
        t.needsUpdate = true;
      }),
      roughness: 0.92,
      metalness: 0.02
    });
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(vis, low ? 32 : 64, low ? 32 : 64), mat);
    mesh.castShadow = !low;
    mesh.receiveShadow = !low;
    mesh.userData = group.userData;
    mesh.userData.displayRadius = vis;
    group.add(mesh);
    if (p.rings) {
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(vis * 1.35, vis * 2.15, 64),
        new THREE.MeshStandardMaterial({ color: p.color, transparent: true, opacity: 0.5, side: THREE.DoubleSide })
      );
      ring.rotation.x = Math.PI / 2;
      group.add(ring);
    }
    if (p.id === 'earth' || p.id === 'venus') {
      const atmo = new THREE.Mesh(
        new THREE.SphereGeometry(vis * 1.06, 32, 32),
        new THREE.MeshBasicMaterial({ color: p.id === 'earth' ? 0x5fa9ff : 0xffcc88, transparent: true, opacity: 0.12, side: THREE.BackSide })
      );
      group.add(atmo);
    }
    const tilt = ((p.axial_tilt_degrees || 0) * Math.PI) / 180;
    mesh.rotation.z = tilt * 0.25;
    group.position.x = explorerOrbit(p);
    scene.add(group);
    scene.add(orbitLine(explorerOrbit(p), p.eccentricity || 0, p.inclination_deg || 0));
    bodies.push({ id: p.id, group, mesh, body: p, moon: false });
    groups[p.id] = group;

    const rem = moonRemainder(p);
    moonsOf(p.id).forEach((m, idx) => {
      const mg = new THREE.Group();
      const mr = displayRadius(m, 'explorer');
      const mm = new THREE.Mesh(
        m.id === 'phobos' || m.id === 'deimos' ? new THREE.IcosahedronGeometry(mr * 1.4, 1) : new THREE.SphereGeometry(mr, 24, 24),
        new THREE.MeshStandardMaterial({
          map: texFor(m, loader, () => {}),
          color: m.color || 0x888888,
          roughness: 1
        })
      );
      mm.userData = { type: 'moon', key: m.id, body: m, displayRadius: mr };
      mg.userData = mm.userData;
      mg.add(mm);
      const maxOrb = Math.max(...moonsOf(p.id).map((x) => x.orbital_distance_km || 1));
      const orb = vis * 1.35 + (m.orbital_distance_km / maxOrb) * vis * 2.2 + idx * 0.02;
      mg.userData.orb = orb;
      mg.userData.period = m.orbital_period_days;
      mg.position.x = orb;
      group.add(mg);
      bodies.push({ id: m.id, group: mg, mesh: mm, body: m, moon: true, parent: group });
    });
    group.userData.moonExtra = rem;
  });

  ['ceres', 'pluto'].forEach((id) => {
    const p = byId(id);
    if (!p) return;
    const group = new THREE.Group();
    const vis = displayRadius(p, 'explorer') * 0.85;
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(vis, 24, 24), new THREE.MeshStandardMaterial({ color: p.color, roughness: 0.95 }));
    mesh.userData = { type: 'dwarf planet', key: id, body: p, displayRadius: vis, future: true };
    group.add(mesh);
    group.position.x = explorerOrbit(p);
    scene.add(group);
    scene.add(orbitLine(explorerOrbit(p), p.eccentricity || 0, p.inclination_deg || 0, 0x3a4a3a));
    bodies.push({ id, group, mesh, body: p, moon: false });
    groups[id] = group;
  });

  const settlement = new THREE.Group();
  settlement.visible = false;
  const ground = new THREE.Mesh(new THREE.CircleGeometry(3.2, 48), new THREE.MeshStandardMaterial({ color: 0x3a2a22, roughness: 1 }));
  ground.rotation.x = -Math.PI / 2;
  settlement.add(ground);
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.4, 0.28, 12), new THREE.MeshStandardMaterial({ color: 0x8aa4b8, metalness: 0.3 }));
  hub.position.y = 0.14;
  settlement.add(hub);
  scene.add(settlement);

  const graph = new THREE.Group();
  graph.visible = false;
  scene.add(graph);

  return {
    stars,
    corona,
    sunMesh,
    rocket,
    trail,
    trailPos,
    belt1,
    belt2,
    bodies,
    groups,
    settlement,
    graph,
    setScale(mode) {
      planets().forEach((p) => {
        const rec = bodies.find((b) => b.id === p.id && !b.moon);
        if (!rec) return;
        const vis = displayRadius(p, mode === 'true' ? 'true' : 'explorer');
        rec.mesh.geometry.dispose();
        rec.mesh.geometry = new THREE.SphereGeometry(vis, low ? 24 : 48, low ? 24 : 48);
        rec.mesh.userData.displayRadius = vis;
      });
    }
  };
}

export function planetPosition(body, tDays, scaleMode) {
  const n = (2 * Math.PI) / (body.orbital_period_days || 1);
  const a = tDays * n;
  const r = scaleMode === 'true' ? trueOrbit(body) : explorerOrbit(body);
  const e = body.eccentricity || 0;
  return new THREE.Vector3(r * Math.cos(a), 0, r * (1 - e) * Math.sin(a));
}
