import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {OutlinePass} from 'three/addons/postprocessing/OutlinePass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {PLANETS,SUN,MOONS,PLANET_ICONS} from './data/planets.js';
import './styles.css';
import {
  renderExplore, attachExploreEvents, injectExploreCSS,
  exploreState, MOON_SITES, MARS_SITES
} from './explore/explore.js';
import {
  renderBuild, attachBuildEvents, injectBuildCSS, buildState, getTotals
} from './build/build.js';
import {
  renderSimulate, attachSimulateEvents, injectSimCSS, simState, CASCADE_MSGS, CASCADE_NODES
} from './simulate/simulate.js';
import {
  renderCrew, attachCrewEvents, injectCrewCSS
} from './crew/crew.js';
import logoSrc from './assets/logo.png';
import stratWaterImg from './assets/strategy_water.jpg';
import stratEnergyImg from './assets/strategy_energy.jpg';
import stratBalancedImg from './assets/strategy_balanced.jpg';
import stratLargeCrewImg from './assets/strat_large_crew.jpg';
import stratSmallCrewImg from './assets/strat_small_crew.jpg';

const ui=document.querySelector('#ui'), boot=document.querySelector('#boot'), bootBar=document.querySelector('#bootBar'), bootStatus=document.querySelector('#bootStatus');

// Simple Audio System for Game-like Feedback
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let soundEnabled = true;

function playSound(type) {
  if (!soundEnabled) return;
  
  try {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch(type) {
      case 'hover':
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
        break;
      case 'click':
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.15);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.15);
        break;
      case 'success':
        oscillator.frequency.setValueAtTime(523, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(659, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(784, audioContext.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
        break;
      case 'warning':
        oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(400, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(300, audioContext.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
        break;
      case 'critical':
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
        break;
      case 'navigate':
        oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(500, audioContext.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.06, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
        break;
    }
  } catch (e) {
    // Audio might not be supported or allowed
    console.log('Audio error:', e);
  }
}
const state={route:'landing',planet:'mars',hover:null,selected:null,playing:true,direction:1,speed:18,days:0,showOrbits:true,showLabels:true,scale:'schematic',tutorial:0,event:null,interventions:{water:true,crew:true},waterUplift:35,workloadCut:15,simDay:1};

const planetMap=new Map(PLANETS.map(p=>[p.key,p]));
const bodies=[];
const scene=new THREE.Scene();
scene.fog=new THREE.FogExp2(0x02060b,.00135);
const camera=new THREE.PerspectiveCamera(52,innerWidth/innerHeight,.1,1000);camera.position.set(0,7.5,25);
const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));renderer.setSize(innerWidth,innerHeight);renderer.setClearColor(0x010308,1);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;document.querySelector('#scene').appendChild(renderer.domElement);
renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();showToast('WebGL context paused — reload to restore 3D scene')});
const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.dampingFactor=.065;controls.minDistance=2.2;controls.maxDistance=95;controls.target.set(0,0,0);controls.enablePan=true;controls.autoRotate=true;controls.autoRotateSpeed=.14;
const composer=new EffectComposer(renderer);const renderPass=new RenderPass(scene,camera);composer.addPass(renderPass);const bloom=new UnrealBloomPass(new THREE.Vector2(innerWidth,innerHeight),.68,.48,.9);bloom.threshold=.55;composer.addPass(bloom);const outline=new OutlinePass(new THREE.Vector2(innerWidth,innerHeight),scene,camera);outline.edgeStrength=2.6;outline.edgeGlow=.55;outline.edgeThickness=1.15;outline.visibleEdgeColor.set(0x9bd3ff);outline.hiddenEdgeColor.set(0x1b425f);composer.addPass(outline);composer.addPass(new OutputPass());
const ambient=new THREE.AmbientLight(0x3b5d7a,.95);scene.add(ambient);const sunLight=new THREE.PointLight(0xffd6a0,170,0,1.75);sunLight.position.set(0,0,0);sunLight.castShadow=true;sunLight.shadow.mapSize.set(1024,1024);scene.add(sunLight);

function seeded(i){const x=Math.sin(i*12.9898)*43758.5453;return x-Math.floor(x)}
function starfield(count){const g=new THREE.BufferGeometry();const p=new Float32Array(count*3),c=new Float32Array(count*3);for(let i=0;i<count;i++){const r=55+seeded(i)*135,theta=seeded(i+19)*Math.PI*2,phi=Math.acos(2*seeded(i+3)-1);p[i*3]=r*Math.sin(phi)*Math.cos(theta);p[i*3+1]=r*Math.cos(phi);p[i*3+2]=r*Math.sin(phi)*Math.sin(theta);const hot=seeded(i+8);c[i*3]=hot>.82?0.62:0.83;c[i*3+1]=hot>.92?0.72:0.9;c[i*3+2]=1}g.setAttribute('position',new THREE.BufferAttribute(p,3));g.setAttribute('color',new THREE.BufferAttribute(c,3));const m=new THREE.PointsMaterial({size:.125,sizeAttenuation:true,vertexColors:true,transparent:true,opacity:.82,depthWrite:false});const pts=new THREE.Points(g,m);pts.userData.baseOpacity=.82;pts.userData.baseSize=.125;scene.add(pts);return pts}
const stars=starfield(10000);
function asteroidBelt(n,r1,r2,tilt=0){const g=new THREE.BufferGeometry(),p=new Float32Array(n*3);for(let i=0;i<n;i++){const a=seeded(i*7)*Math.PI*2,r=r1+(r2-r1)*seeded(i*11);p[i*3]=Math.cos(a)*r;p[i*3+1]=(seeded(i*13)-.5)*.38;p[i*3+2]=Math.sin(a)*r}g.setAttribute('position',new THREE.BufferAttribute(p,3));const mat=new THREE.PointsMaterial({color:0x6d6257,size:.045,sizeAttenuation:true,transparent:true,opacity:.52});const pts=new THREE.Points(g,mat);pts.rotation.x=tilt;scene.add(pts);return pts}
const belt1=asteroidBelt(1100,7.2,8.5,.06),belt2=asteroidBelt(2600,20,29,.02);
function makeProceduralTexture(colorA,colorB,seedBase=1){const cv=document.createElement('canvas');cv.width=512;cv.height=256;const ctx=cv.getContext('2d');const grad=ctx.createLinearGradient(0,0,512,256);grad.addColorStop(0,colorA);grad.addColorStop(1,colorB);ctx.fillStyle=grad;ctx.fillRect(0,0,512,256);for(let y=0;y<256;y+=4){for(let x=0;x<512;x+=4){const n=seeded(x*37+y*17+seedBase),a=n>.88?.24:.03;ctx.fillStyle=`rgba(255,255,255,${a})`;ctx.fillRect(x,y,4,4)}}return new THREE.CanvasTexture(cv)}
function textureFor(p){if(!p.texture)return makeProceduralTexture('#'+p.color.toString(16).padStart(6,'0'),'#05080c',p.orbit);const tex=new THREE.TextureLoader().load(p.texture,()=>{},undefined,()=>{});tex.colorSpace=THREE.SRGBColorSpace;return tex}
function makeOrbit(p){const curve=new THREE.EllipseCurve(0,0,p.orbit,p.orbit*(1-p.e),0,Math.PI*2,false,0);const pts=curve.getPoints(128).map(v=>new THREE.Vector3(v.x,0,v.y));const g=new THREE.BufferGeometry().setFromPoints(pts);const m=new THREE.LineBasicMaterial({color:0x2d526b,transparent:true,opacity:.45});const l=new THREE.Line(g,m);l.rotation.x=p.i*Math.PI/180;l.userData.orbit=true;scene.add(l);return l}
function makePlanet(p,idx){const group=new THREE.Group();group.userData={type:'planet',key:p.key,p:p};group.rotation.z=(p.i*Math.PI/180)*.18;const mat=new THREE.MeshStandardMaterial({map:textureFor(p),roughness:.95,metalness:.02});const visualRadius=p.radius*(p.key==='earth'?1.85:p.key==='mars'?2.15:p.key==='venus'||p.key==='mercury'?1.65:1.22);const mesh=new THREE.Mesh(new THREE.SphereGeometry(visualRadius,64,64),mat);mesh.castShadow=true;mesh.receiveShadow=true;group.userData.displayRadius=visualRadius;mesh.userData=group.userData;group.add(mesh);if(p.rings){const ringGeo=new THREE.RingGeometry(p.radius*1.35,p.radius*2.2,96);const ringMat=new THREE.MeshStandardMaterial({color:p.color,transparent:true,opacity:.55,side:THREE.DoubleSide});const ring=new THREE.Mesh(ringGeo,ringMat);ring.rotation.x=Math.PI/2;ring.castShadow=true;group.add(ring)}if(p.key==='earth'){const atmo=new THREE.Mesh(new THREE.SphereGeometry(visualRadius*1.065,64,64),new THREE.MeshBasicMaterial({color:0x5fa9ff,transparent:true,opacity:.12,side:THREE.BackSide}));group.add(atmo)}group.position.x=p.orbit;scene.add(group);const orbit=makeOrbit(p);bodies.push({p,group,mesh});if(p.key==='earth'){const moon=makeMoon('moon',MOONS.moon,group);moon.group.position.x=.55}else if(p.key==='mars'){makeMoon('phobos',MOONS.phobos,group);makeMoon('deimos',MOONS.deimos,group)}return group}
function makeMoon(key,m,planetGroup){const group=new THREE.Group();group.userData={type:'moon',key,m};const mat=new THREE.MeshStandardMaterial({map:m.texture?textureFor({texture:m.texture,color:0x777777}):makeProceduralTexture('#79746c','#1b1918',key.length),roughness:1});const geo=(key==='phobos'||key==='deimos')?new THREE.IcosahedronGeometry(m.radius*1.7,2):new THREE.SphereGeometry(m.radius*1.65,32,32);const mesh=new THREE.Mesh(geo,mat);if(key==='phobos'){mesh.scale.set(1.55,.82,1.05)}else if(key==='deimos'){mesh.scale.set(1.25,.9,1.05)}mesh.userData=group.userData;group.add(mesh);group.position.x=m.orbit;planetGroup.add(group);bodies.push({p:{key,name:m.name},group,mesh,moon:true,parent:planetGroup});return {group,mesh}}
const sunGeom=new THREE.SphereGeometry(SUN.radius,96,96);
const sunMat=new THREE.MeshStandardMaterial({color:0xffc45f,emissive:0xff8b1f,emissiveIntensity:2.6,roughness:.82,metalness:0});
const sunMesh=new THREE.Mesh(sunGeom,sunMat);sunMesh.userData={type:'sun',key:'sun',p:SUN};scene.add(sunMesh);bodies.push({p:SUN,group:sunMesh,mesh:sunMesh});
function makeGlowSphere(scale,opacity){const mesh=new THREE.Mesh(new THREE.SphereGeometry(SUN.radius*scale,64,64),new THREE.MeshBasicMaterial({color:0xffa32f,transparent:true,opacity,blending:THREE.AdditiveBlending,side:THREE.BackSide,depthWrite:false}));scene.add(mesh);return mesh}
const coronaInner=makeGlowSphere(1.42,.19),coronaOuter=makeGlowSphere(2.05,.075);
const solarArc1=new THREE.Mesh(new THREE.TorusGeometry(SUN.radius*1.38,.035,12,96),new THREE.MeshBasicMaterial({color:0xffb13b,transparent:true,opacity:.42,blending:THREE.AdditiveBlending,depthWrite:false}));solarArc1.rotation.x=Math.PI/2.7;scene.add(solarArc1);
const solarArc2=new THREE.Mesh(new THREE.TorusGeometry(SUN.radius*1.7,.018,10,96),new THREE.MeshBasicMaterial({color:0xffcc68,transparent:true,opacity:.22,blending:THREE.AdditiveBlending,depthWrite:false}));solarArc2.rotation.y=Math.PI/3.5;scene.add(solarArc2);
const solarParticles=starfield(420);solarParticles.scale.setScalar(.42);solarParticles.material.size=.19;solarParticles.material.opacity=.26;
PLANETS.forEach(makePlanet);

const interaction=new THREE.Raycaster();const pointer=new THREE.Vector2();renderer.domElement.addEventListener('pointermove',e=>{pointer.x=(e.clientX/innerWidth)*2-1;pointer.y=-(e.clientY/innerHeight)*2+1;renderer.domElement.style.cursor=state.hover?'pointer':'grab';if(state.route==='landing'){updateRaycast();}});renderer.domElement.addEventListener('click',()=>{if(state.hover)focusBody(state.hover)});renderer.domElement.addEventListener('pointerdown',()=>{controls.autoRotate=false});renderer.domElement.addEventListener('pointerup',()=>{setTimeout(()=>{if(state.route==='landing'&&!flight)controls.autoRotate=true},1200)});
let flight=null;
function focusBody(body){
  state.selected=body;
  const pos=new THREE.Vector3();body.mesh.getWorldPosition(pos);
  const dir=pos.clone().sub(camera.position).normalize();
  const dist=Math.max((body.mesh.userData.displayRadius||body.p.radius||.2)*5.5,3.1);
  const endPos=pos.clone().add(dir.multiplyScalar(dist));
  endPos.y=Math.max(endPos.y,dist*.16);
  flight={startPos:camera.position.clone(),startTarget:controls.target.clone(),endPos,endTarget:pos.clone(),t:0,duration:.9};
  controls.autoRotate=false;
  renderUI();
}

function updateRaycast(){interaction.setFromCamera(pointer,camera);const hits=interaction.intersectObjects(bodies.map(b=>b.mesh),false);if(hits.length){const found=bodies.find(b=>b.mesh===hits[0].object);state.hover=found||null;outline.selectedObjects=found?[found.mesh]:[]}else{state.hover=null;outline.selectedObjects=[]}}
function planetPosition(p,t){const n=(2*Math.PI)/(p.period||1);const a=t*n+p.orbit*.07;const x=p.orbit*Math.cos(a);const z=p.orbit*(1-p.e)*Math.sin(a);return new THREE.Vector3(x,0,z)}

function iconFor(key){return PLANET_ICONS[key]||'◉'}
function renderUI(){
const earthFallback = bodies.find(b=>b.p.key==='earth') || (bodies.length ? bodies[0] : null);
if (!state.selected && earthFallback) state.selected = earthFallback;
const sel = state.selected || earthFallback;
const pData = sel ? sel.p : { name: 'Earth', fact: 'Liquid-water world and the only known planet with life.', key: 'earth', orbit: 1.0, period: 365, moons: 1 };

ui.innerHTML=`<div class="ui-shell">
<header class="topbar"><div class="brand" data-nav="landing"><div class="brand-mark"><img src="${logoSrc}" class="brand-logo-img" alt="HABITAT-X" /></div><div><div class="brand-name">HABITAT-X</div><div class="brand-sub">MISSION RESILIENCE / DIGITAL TWIN</div></div></div><div class="spaceapps"><img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Space_Apps_Motif_Logo_-_1-Color_Black.svg" alt="NASA Space Apps"><span>NASA SPACE APPS / 2026</span></div><nav class="nav">${[['landing','HOME'],['tutorial','TUTORIAL'],['explore','EXPLORE'],['build','BUILD'],['simulate','SIMULATE'],['crew','CREW'],['trace','TRACE'],['intervene','INTERVENE'],['compare','COMPARE'],['researcher','RESEARCHER'],['report','REPORT']].map(([r,l])=>`<button class="${state.route===r?'active':''}" data-nav="${r}">${l}</button>`).join('')}</nav><div class="sys"><span class="led"></span>CELESTIAL LINK / ONLINE</div></header>
<div class="hud hud-card selection-dock" id="selectionDock" style="${state.dockPos ? `left:${state.dockPos.x}px;top:${state.dockPos.y}px;right:auto;bottom:auto;` : ''}">
  <div class="kicker" style="display:flex;justify-content:space-between;align-items:center;">
    <span>SELECTED BODY</span>
    <span style="font-size:7px;color:#4f6e85;letter-spacing:0.5px">✥ DRAG</span>
  </div>
  <div class="selection-title">${pData.name}</div>
  <div class="selection-meta">${pData.fact||'Liquid-water world and the only known planet with life.'}</div>
  <div class="selection-stats">${pData.key && pData.key!=='sun'?`<span><b>ORBIT</b><em>${pData.orbit?.toFixed(2)||'1.00'} AU</em></span><span><b>PERIOD</b><em>${Math.round(pData.period||365)} d</em></span><span><b>MOONS</b><em>${pData.moons??'1'}</em></span>`:`<span><b>TYPE</b><em>STAR</em></span><span><b>CORE</b><em>ACTIVE</em></span><span><b>LINK</b><em>JPL</em></span>`}</div>
  <button class="btn" id="clearSelection">RETURN TO FULL SYSTEM</button>
</div>
${screenLanding()}${screenTutorial()}${screenExplore()}${screenBuild()}${screenSim()}${screenCrew()}${screenTrace()}${screenIntervene()}${screenCompare()}${screenResearcher()}${screenReport()}
${state.route==='landing'?`<div class="hud hud-card control-dock"><div class="kicker">NAVIGATION CONTROLS</div><div class="control-row"><button id="toggleOrbits" class="ctl ${state.showOrbits?'active':''}">ORBIT LINES</button><button id="toggleLabels" class="ctl ${state.showLabels?'active':''}">LABELS</button><button id="toggleScale" class="ctl">SCALE</button></div><div class="control-row speed-row"><span class="mono">TIME RATE</span><input id="timeSpeed" type="range" min="0" max="20" step="0.1" value="${state.speed}"><b>${state.speed.toFixed(1)}×</b></div></div>`:''}
<div class="media-credit" style="position:absolute;bottom:4px;left:8px;right:8px;color:#3e5365;font:7px var(--mono);z-index:20;display:flex;justify-content:space-between;pointer-events:none"><span>PLANETARY CONSTANTS / NASA-JPL REFERENCES</span><span>HABITAT-X is an independent Space Apps participant project — no NASA endorsement implied</span></div>
</div>`;
attachUI();
}
function screenLanding(){return `<section class="screen ${state.route==='landing'?'active':''}" data-screen="landing"><div class="landing-particles" id="landingParticles"></div><div class="landing-copy hud"><div class="eyebrow animated-border">NASA-DATA-POWERED / EXPERIMENTAL RESILIENCE</div><h1>Before a Mission<br><span class="glow-text">Fails, Find Out Why.</span></h1><p>HABITAT-X is a mission resilience digital twin that connects <b>Planet → Settlement → Human</b>. Explore a real environment, configure a constrained settlement, inject environmental stress, trace cascading failure, and test interventions.</p><div class="actions"><button class="btn btn-primary" data-nav="tutorial">START TUTORIAL ↗</button><button class="btn" data-nav="explore">ENTER MISSION PORTAL →</button></div><div class="landing-note"><span><b>NASA / JPL</b> planetary reference data</span><span>•</span><span>Interactive 3D celestial navigator</span><span>•</span><span>Decision support, not prediction</span></div></div><div class="mission-rail hud hud-card glass-grid"><div class="kicker">MISSION OVERVIEW</div><div class="rail-row"><span>Target</span><b id="landingTarget">MARS / JEZERO</b></div><div class="rail-row"><span>Earth analog</span><b>ATACAMA / CHILE</b></div><div class="rail-row"><span>Demo crew</span><b>20</b></div><div class="rail-row"><span>Primary shock</span><b>+5°C</b></div><div class="rail-row"><span>Primary dependency</span><b>WATER</b></div><div class="rail-row"><span>Mode</span><b>3D / LIVE</b></div></div><div class="launch-hint"><span class="mouse-ring"></span> DRAG / ZOOM / SELECT A WORLD</div><button class="sound-toggle" id="soundToggle" style="position:fixed;bottom:20px;left:20px;padding:8px 12px;background:rgba(6,15,24,.8);border:1px solid #35566f;color:#a9c8df;font:8px var(--mono);z-index:100;cursor:pointer;border-radius:4px">🔊 SOUND ON</button></section>`}
function screenTutorial(){
  const steps = [
    {
      num: '01',
      tag: '01 / PLANETARY TARGET → EARTH ANALOG',
      title: 'Explore Planetary Environments',
      subtitle: 'Anchor your settlement in real NASA solar system conditions',
      desc: 'Select from extraterrestrial targets like Mars (Jezero Crater) or Moon (Shackleton Rim). HABITAT-X computes solar irradiance, day-night periods, and environmental similarity matching against real Earth analogs (e.g. Atacama Desert, McMurdo Dry Valleys).',
      objective: 'Inspect celestial bodies in 3D and review environmental analog similarity scores.',
      actionLabel: 'OPEN EXPLORE SCREEN →',
      navTarget: 'explore',
      icon: '🪐',
      color: '#5da7ef',
      highlights: [
        { icon: '🛰️', text: 'NASA/JPL planetary ephemerides & 3D orbits' },
        { icon: '🌍', text: 'Environmental analog matching algorithm' },
        { icon: '☀️', text: 'Real-time solar irradiance & day calculations' }
      ]
    },
    {
      num: '02',
      tag: '02 / CONSTRAINED ARCHITECTURE',
      title: 'Configure Settlement Infrastructure',
      subtitle: 'Balance launch payload, crew capacity, and life support',
      desc: 'Design your base configuration under strict mass and resource limits. Allocate primary water reserves, emergency backup tanks, solar PV arrays, battery storage buffers, and hydroponic food production modules.',
      objective: 'Size life support & infrastructure to sustain the expedition baseline.',
      actionLabel: 'OPEN BUILD SCREEN →',
      navTarget: 'build',
      icon: '🏗️',
      color: '#66e0cf',
      highlights: [
        { icon: '💧', text: 'Water reserve & daily consumption limits' },
        { icon: '⚡', text: 'Power generation & battery storage sizing' },
        { icon: '🌱', text: 'Hydroponic crop yields & calorie ratios' }
      ]
    },
    {
      num: '03',
      tag: '03 / DYNAMIC TELEMETRY & STRESS',
      title: 'Run Simulation & Inject Shocks',
      subtitle: 'Observe how environmental shocks ripple through systems',
      desc: 'Advance the mission day-by-day (Day 1 to 30) and inject critical environmental disruptions — Heat Spikes (+5°C), Solar Storms, Dust Deposition, or Subsurface Ice Depletion — to expose latent vulnerabilities.',
      objective: 'Stress-test the settlement and identify when systems enter marginal state.',
      actionLabel: 'OPEN SIMULATE SCREEN →',
      navTarget: 'simulate',
      icon: '📈',
      color: '#f4ad3f',
      highlights: [
        { icon: '⏱️', text: 'Time-step telemetry with playback controls' },
        { icon: '⚠️', text: '4 injection shock scenarios' },
        { icon: '🚨', text: 'Real-time alert threshold detection' }
      ]
    },
    {
      num: '04',
      tag: '04 / CREW COGNITIVE DYNAMICS',
      title: 'Monitor Human Factor Resilience',
      subtitle: 'Understand crew workload, cognitive strain, and shifts',
      desc: 'Settlements fail when humans are overwhelmed. Track crew fatigue, mental strain, task allocation shifts, and operational errors as life support failures force high-stress emergency repairs.',
      objective: 'Balance crew shift workload to prevent human cognitive breakdown.',
      actionLabel: 'OPEN CREW SCREEN →',
      navTarget: 'crew',
      icon: '👥',
      color: '#50e3c2',
      highlights: [
        { icon: '🧠', text: 'Psychological strain & fatigue telemetry' },
        { icon: '🛠️', text: 'Maintenance shift distribution' },
        { icon: '⚕️', text: 'Cognitive error risk mitigation' }
      ]
    },
    {
      num: '05',
      tag: '05 / FORENSIC CAUSALITY GRAPH',
      title: 'Trace Cascading Failure Chains',
      subtitle: 'Follow the node network to locate root cause vs symptoms',
      desc: 'Failure in isolated systems is rare — cascading failure is the real threat. The Trace graph visualizes the causality path: Ambient Temperature Shock ➔ Water Demand Surge ➔ Reservoir Depletion ➔ Agriculture Gate ➔ Food Shortfall ➔ Crew Exhaustion.',
      objective: 'Click nodes to inspect telemetry root causes and downstream consequences.',
      actionLabel: 'OPEN TRACE SCREEN →',
      navTarget: 'trace',
      icon: '🕸️',
      color: '#ff5b5b',
      highlights: [
        { icon: '🔍', text: 'Interactive 7-node causality graph' },
        { icon: '⚡', text: 'Live edge animation showing cascade flow' },
        { icon: '📊', text: 'Telemetry inspector with forensic logs' }
      ]
    },
    {
      num: '06',
      tag: '06 / STRATEGIC DECISION SUPPORT',
      title: 'Test Interventions & Resilience Report',
      subtitle: 'Iterate parameters, compare strategies, and generate report',
      desc: 'In the Intervention Lab, apply targeted remedies (Water Uplift %, Crew Workload Cuts, Power Redundancy) to recalculate RUN B in real-time. Compare Water-First, Energy-First, and Balanced strategies, then export the executive resilience report.',
      objective: 'Extend operational duration past the critical failure threshold.',
      actionLabel: 'OPEN INTERVENE SCREEN →',
      navTarget: 'intervene',
      icon: '🛡️',
      color: '#66e0cf',
      highlights: [
        { icon: '🎛️', text: 'Real-time reactive toggles & sliders' },
        { icon: '⚖️', text: 'Multi-scenario 3D strategy comparison' },
        { icon: '📄', text: 'Executive resilience summary & safety scores' }
      ]
    }
  ];

  const currentIdx = Math.max(0, Math.min(steps.length - 1, state.tutorial || 0));
  const s = steps[currentIdx];

  const workflowSteps = [
    { id: 'explore', num: '01', title: 'EXPLORE', sub: 'Planetary Targets & Analogs' },
    { id: 'build', num: '02', title: 'BUILD', sub: 'Settlement Infrastructure' },
    { id: 'simulate', num: '03', title: 'SIMULATE', sub: 'Dynamic Shock Telemetry' },
    { id: 'crew', num: '04', title: 'CREW', sub: 'Cognitive & Shift Loads' },
    { id: 'trace', num: '05', title: 'TRACE', sub: 'Causal Failure Network' },
    { id: 'intervene', num: '06', title: 'INTERVENE', sub: 'Parameter Optimization' },
    { id: 'compare', num: '07', title: 'COMPARE', sub: '3D Strategy Profiles' },
    { id: 'report', num: '08', title: 'REPORT', sub: 'Resilience Summary & Scores' }
  ];

  return `<section class="screen ${state.route==='tutorial'?'active':''}" data-screen="tutorial">
    <div class="view-header">
      <div>
        <div class="eyebrow">00 / TUTORIAL — INTERACTIVE ONBOARDING GUIDE</div>
        <h2>How HABITAT-X Works</h2>
      </div>
      <div class="header-actions">
        <span class="chip" style="color:var(--cyan)">STEP ${currentIdx + 1} OF ${steps.length}</span>
        <button class="btn" id="tutorialPrev" ${currentIdx === 0 ? 'disabled style="opacity:0.4"' : ''}>← PREV</button>
        <button class="btn btn-primary" id="tutorialNext">${currentIdx === steps.length - 1 ? 'START EXPLORING →' : 'NEXT STEP →'}</button>
      </div>
    </div>

    <!-- Stepper Top Bar -->
    <div class="tutor-stepper">
      ${steps.map((st, i) => `
        <div class="tutor-pill ${i === currentIdx ? 'active' : i < currentIdx ? 'completed' : ''}" data-tutorial="${i}">
          ${i < currentIdx ? '✓' : st.num} ${st.title.split(' ')[0].toUpperCase()}
        </div>
      `).join('')}
    </div>

    <!-- Main Layout -->
    <div class="tutorial-layout">
      
      <!-- LEFT CARD: Active Step Detail -->
      <div class="hud-card panel tutor-detail-card" style="--accent:${s.color}">
        <div class="tutor-hdr">
          <div class="tutor-icon-badge">${s.icon}</div>
          <div class="tutor-hdr-text">
            <small>${s.tag}</small>
            <h3 style="color:${s.color}">${s.title}</h3>
            <span style="font:500 8.5px var(--mono);color:#8ca5bd">${s.subtitle}</span>
          </div>
        </div>

        <p class="tutor-desc">${s.desc}</p>

        <div class="tutor-obj-box">
          <strong>MISSION OBJECTIVE</strong>
          <p>${s.objective}</p>
        </div>

        <div class="tutor-highlights">
          ${s.highlights.map(h => `
            <div class="tutor-hl-row">
              <span>${h.icon}</span>
              <span>${h.text}</span>
            </div>
          `).join('')}
        </div>

        <div class="tutor-actions-row">
          <button class="btn btn-primary" data-nav="${s.navTarget}">${s.actionLabel}</button>
          <button class="btn" data-nav="explore">SKIP TUTORIAL →</button>
        </div>
      </div>

      <!-- RIGHT CARD: Mission Workflow Overview -->
      <div class="hud-card panel workflow-panel">
        <div class="kicker" style="display:flex;justify-content:space-between;align-items:center">
          <span>8-STAGE RESILIENCE PIPELINE</span>
          <span style="font-size:7px;color:#5f7c96">CLICK ANY TO JUMP</span>
        </div>

        <div class="workflow-flow">
          ${workflowSteps.map((wf, idx) => {
            const isMatch = (idx === currentIdx) || (currentIdx === 5 && idx >= 5);
            return `
              <div class="wf-node ${isMatch ? 'active' : ''}" data-nav="${wf.id}">
                <div class="wf-node-idx">${wf.num}</div>
                <div>
                  <div class="wf-node-title">${wf.title}</div>
                  <div class="wf-node-sub">${wf.sub}</div>
                </div>
                <div class="wf-node-arrow">→</div>
              </div>
            `;
          }).join('')}
        </div>

        <div class="tutor-tips-box">
          <strong>💡 HABITAT-X CORE PRINCIPLE</strong>
          <ul>
            <li>A settlement is an interconnected system — never isolated bars.</li>
            <li>Use the 3D space background to keep context anchored in celestial physics.</li>
            <li>Interventions in one subsystem prevent cascading failures in another.</li>
          </ul>
        </div>
      </div>

    </div>
  </section>`;
}
function screenExplore(){
  injectExploreCSS();
  const inner = renderExplore(exploreState);
  return `<section class="screen ${state.route==='explore'?'active':''}" data-screen="explore">
    <div class="hud" style="inset:0;left:0;right:0;top:54px;bottom:0;padding:0 16px 12px;overflow:hidden">
      <div class="view-header" style="margin-bottom:10px">
        <div>
          <div class="eyebrow">01 / EXPLORE — PLANETARY TARGET → EARTH ANALOG</div>
          <h2 style="margin:4px 0 0">Find the Match</h2>
        </div>
        <div class="header-actions">
          <span class="chip">NASA DATA / DEMO MODEL SCORES</span>
          <button class="btn" data-nav="build">SKIP TO BUILD →</button>
        </div>
      </div>
      ${inner}
    </div>
  </section>`;
}
function screenBuild(){
  injectBuildCSS();
  return `<section class="screen ${state.route==='build'?'active':''}" data-screen="build">
    <div class="hud" style="inset:0;left:0;right:0;top:54px;bottom:0;padding:0 16px 12px;overflow-y:auto">
      <div class="view-header" style="margin-bottom:10px">
        <div>
          <div class="eyebrow">02 / BUILD</div>
          <h2 style="margin:4px 0 0">Configure the Settlement</h2>
        </div>
        <div class="header-actions">
          <span class="chip">LOCAL MISSION STATE</span>
          <button class="btn btn-primary" data-nav="simulate">RUN SIMULATION →</button>
        </div>
      </div>
      ${renderBuild(buildState)}
    </div>
  </section>`;
}
function fieldGroup(title,fields){return `<div class="form-group"><h3>${title}</h3>${fields.map(f=>`<label class="field"><div><span>${f[0]}</span><output id="out-${f[0]}">${f[1]} ${f[4]}</output></div><input type="range" id="${f[0]}" min="${f[2]}" max="${f[3]}" value="${f[1]}" data-unit="${f[4]}"></label>`).join('')}</div>`}
function screenSim(){
  injectSimCSS();
  const isCritical = Object.values({}).includes('critical'); // computed inside renderSimulate
  return `<section class="screen ${state.route==='simulate'?'active':''}" data-screen="simulate">
    <div class="view-header">
      <div>
        <div class="eyebrow">03 / SIMULATE + 04 / STRESS-TEST</div>
        <h2>Telemetry Center</h2>
      </div>
      <div class="header-actions">
        <span class="chip" id="simStatusChip">DAY ${simState.day} / 30${simState.activeEvent?' ⚠ '+simState.activeEvent.toUpperCase():''}</span>
        <button class="btn btn-primary" data-nav="trace">TRACE FAILURE →</button>
      </div>
    </div>
    <div class="hud" style="inset:0;left:0;right:0;top:54px;bottom:0;padding:8px 16px 12px;overflow-y:auto">
      <div id="simInner">
        ${renderSimulate(buildState, simState)}
  </section>`;
}
function screenCrew(){
  injectCrewCSS();
  return `<section class="screen ${state.route==='crew'?'active':''}" data-screen="crew">
    <div class="view-header">
      <div>
        <div class="eyebrow">04 / CREW RESILIENCE</div>
        <h2>Human Performance Layer</h2>
      </div>
      <div class="header-actions">
        <span class="chip">6 CREW ACTIVE</span>
        <button class="btn" id="crScanBtn">▶ RUN CREW SCAN</button>
        <button class="btn btn-primary" data-nav="trace">TRACE FAILURE →</button>
      </div>
    </div>
    <div class="hud" style="inset:0;left:0;right:0;top:54px;bottom:0;padding:8px 16px 12px;overflow-y:auto">
      <div id="crewInner">
        ${renderCrew()}
      </div>
    </div>
  </section>`;
}
function telemetryBox(name,v,sub){const danger=v<25;const warning=v<50&&!danger;return `<div class="telemetry-box hud-card ${danger?'critical':warning?'warning':''}"><div class="tele-head"><span>${name}</span><span style="color:${danger?'var(--red)':warning?'var(--amber)':'var(--green)'}">${danger?'CRITICAL':warning?'CAUTION':'NORMAL'}</span></div><strong>${Math.round(v)}%</strong><div class="progress"><i style="width:${Math.max(0,Math.min(100,v))}%;background:${danger?'var(--red)':warning?'var(--amber)':'var(--green)'};--target-width:${Math.max(0,Math.min(100,v))}%"></i></div><small>${sub}</small></div>`}
function simDay(day){const x=day-1;const heat=state.event==='heat'?Math.max(0,x-5)*1.8:0;const water=Math.max(7,92-x*2.45-heat-(state.event==='water'?x*1.25:0));const food=Math.max(12,88-x*1.8-Math.max(0,42-water)*.35);const energy=Math.max(10,94-x*1.4-(state.event==='power'?18+x*.35:0));const crew=Math.min(96,35+x*1.8+heat*.7+(water<40?11:0));const temp=52+x*.55+(state.event==='heat'?5:0);return{water,food,energy,crew,temp}}
function screenTrace(){
  const ev = simState.activeEvent || 'heat';
  const steps = CASCADE_MSGS[ev] || CASCADE_MSGS['heat'];
  const nodes = steps.map(s => {
    const n = CASCADE_NODES.find(x => x.id === s.node);
    return { id: s.node, title: n.label, sub: s.msg };
  });
  const edges = Array.from({ length: Math.max(0, nodes.length - 1) }, (_, i) => `te${i+1}`);

  return `<section class="screen ${state.route==='trace'?'active':''}" data-screen="trace">
    <div class="view-header">
      <div><div class="eyebrow">05 / TRACE FAILURE</div><h2>Failure-Chain Trace</h2></div>
      <div class="header-actions">
        <span class="chip">DEPENDENCY GRAPH / ${nodes.length} NODES</span>
        <button class="btn btn-primary" data-nav="intervene">OPEN INTERVENTION LAB →</button>
      </div>
    </div>
    <div class="trace-layout">
      <div class="hud-card graph-canvas">
        ${edges.map(e => `<div class="trace-edge ${e} edge-arrow active"></div>`).join('')}
        ${nodes.map((n, i) => {
          const isDanger = i === nodes.length - 1;
          const isCrit = i >= Math.floor(nodes.length / 2) && !isDanger;
          return `<button class="trace-node ${isCrit ? 'critical' : ''} ${isDanger ? 'danger' : ''} tn${i+1} ${state.selectedNode === n.id ? 'active' : ''}" data-node="${n.id}">
            <strong>${n.title}</strong>
            <small>${n.sub}</small>
          </button>`;
        }).join('')}
        <div style="position:absolute;left:10px;bottom:10px;color:#4d6578;font:7px var(--mono);text-transform:uppercase;">
          FAILURE PATH / ${nodes.map(n => n.title).join(' → ')}
        </div>
      </div>
      <div class="hud-card panel inspector">
        <div class="kicker">NODE INSPECTOR</div>
        <h3 id="nodeTitle" style="margin:6px 0;font-size:16px">Loading...</h3>
        <span class="chip">INSPECTION</span>
        <div class="inspector-section"><div class="kicker">SYSTEM IMPACT</div><p id="nodeCause">...</p></div>
        <div class="science-note" style="margin-top:20px;">The graph represents dependency rules based on the active simulation event (${ev.toUpperCase()}). Live numerical outputs require the deterministic backend simulation.</div>
      </div>
    </div>
  </section>`;
}
function calcRunB() {
  // RUN A (Baseline) is FIXED: Day 18 failure, water 12%, food 24%, energy 48%
  const BASE = { day: 18, water: 12, food: 24, energy: 48 };
  let day = BASE.day, water = BASE.water, food = BASE.food, energy = BASE.energy;
  const iv = state.interventions;
  const uplift = state.waterUplift;  // 0–100
  const cut    = state.workloadCut;  // 0–40

  // Increase Water Storage: extra reserve proportional to uplift slider
  if (iv.water) {
    water   += Math.round(uplift * 0.55);   // up to +55pp water
    day     += Math.round(uplift * 0.18);   // more days before failure
  }
  // Reduce Water Demand: saves water, indirectly extends survival
  if (iv.demand) {
    water   += 8;
    day     += 3;
  }
  // Increase Energy Backup: better power resilience
  if (iv.energy) {
    energy  += 14;
    day     += 2;
  }
  // Adjust Crew Shifts: less fatigue → slightly more food/water efficiency
  if (iv.crew) {
    food    += Math.round(cut * 0.18);      // up to +7pp food
    day     += Math.round(cut * 0.14);      // up to +6 days
    water   += Math.round(cut * 0.06);
  }
  // Reduce Crop Demand: lowers agricultural consumption → more food headroom
  if (iv.crop) {
    food    += 8;
    day     += 2;
  }

  return {
    day:    Math.min(30, Math.max(BASE.day, day)),
    water:  Math.min(80, Math.max(BASE.water, water)),
    food:   Math.min(82, Math.max(BASE.food, food)),
    energy: Math.min(88, Math.max(BASE.energy, energy)),
  };
}

function updateInterveneDOM() {
  const B = calcRunB();
  const BASE_DAY = 18;
  const el = id => ui.querySelector('#' + id);
  const s  = (id, txt) => { const e = el(id); if (e) e.textContent = txt; };

  s('ivRunBDay',    B.day + ' ');
  s('ivRunBWater',  B.water + '%');
  s('ivRunBFood',   B.food + '%');
  s('ivRunBEnergy', B.energy + '%');
  s('ivDeltaText', `INTERVENTION RESULT: +${B.day - BASE_DAY} operational days before the critical threshold.`);

  // persist for Report page
  state.interventionAfter  = B.day;
  state.interventionResults = { water: B.water, food: B.food, energy: B.energy };
}


function screenIntervene() {
  const B = calcRunB();
  const iv = state.interventions;

  return `<section class="screen ${state.route==='intervene'?'active':''}" data-screen="intervene">
<div class="view-header"><div><div class="eyebrow">06 / INTERVENE</div><h2>Intervention Lab</h2></div>
<div class="header-actions"><span class="chip">SAME SCENARIO / DIFFERENT CONFIGURATION</span>
<button class="btn" id="resetIntervention">RESET</button>
<button class="btn btn-primary" id="runIntervention">RUN SAME SCENARIO →</button></div></div>
<div class="intervene-grid">
  <div class="hud-card panel">
    <div class="kicker">CONTROL VARIABLES</div>
    ${[['water','Increase water storage','Emergency reserve multiplier'],
       ['demand','Reduce water demand','Operational conservation'],
       ['energy','Increase energy backup','Power redundancy'],
       ['crew','Adjust crew shifts','Reduce workload concentration'],
       ['crop','Reduce crop demand','Agricultural allocation']
    ].map(x=>`<label class="switch-row"><span><strong>${x[1]}</strong><small>${x[2]}</small></span><input class="switch" type="checkbox" id="int-${x[0]}" ${iv[x[0]]?'checked':''}></label>`).join('')}
    <div class="field" style="margin-top:15px">
      <div><span>Water storage uplift</span><output id="waterUpliftOut">${state.waterUplift}%</output></div>
      <input type="range" min="0" max="100" value="${state.waterUplift}" id="waterUplift">
    </div>
    <div class="field">
      <div><span>Crew workload cut</span><output id="workloadCutOut">${state.workloadCut}%</output></div>
      <input type="range" min="0" max="40" value="${state.workloadCut}" id="workloadCut">
    </div>
    <div class="whatif"><div class="kicker">HUMAN DECISION</div><p>HABITAT-X exposes tradeoffs. It does not automatically choose a "best" strategy.</p></div>
  </div>
  <div class="hud-card panel">
    <div class="kicker">BASELINE VS INTERVENED</div>
    <div class="compare-runs">
      <div class="run">
        <b>RUN A / BASELINE</b>
        <div class="day">18 <small>DAY</small></div>
        ${runStat('Water','12%')}${runStat('Food','24%')}${runStat('Energy','48%')}
      </div>
      <div class="arrow-center">→</div>
      <div class="run after">
        <b>RUN B / INTERVENED</b>
        <div class="day"><span id="ivRunBDay">${B.day}</span> <small>DAY</small></div>
        <div class="run-stat"><span>Water</span><strong id="ivRunBWater">${B.water}%</strong></div>
        <div class="run-stat"><span>Food</span><strong id="ivRunBFood">${B.food}%</strong></div>
        <div class="run-stat"><span>Energy</span><strong id="ivRunBEnergy">${B.energy}%</strong></div>
      </div>
    </div>
    <div class="delta" id="ivDeltaText">INTERVENTION RESULT: +${B.day - 18} operational days before the critical threshold.</div>
  </div>
</div></section>`;
}
function runStat(a,b){return `<div class="run-stat"><span>${a}</span><strong>${b}</strong></div>`}
function screenCompare(){
  const comparisonsData = [
    {
      id: 'water_vs_energy',
      label: 'Water-First vs Energy-First',
      desc: 'Compare a settlement that prioritizes water reserves against one that prioritizes energy generation/storage.',
      strategies: [
        { id: 'water', name: 'WATER-FIRST', sub: 'High water margin', img: stratWaterImg, color: '#50e3c2', icon: '💧', features: [ {icon: '💧', text: 'Large water storage'}, {icon: '📉', text: 'Reduced consumption'}, {icon: '⚡', text: 'Standard power'}, {icon: '🌱', text: 'Moderate farming'} ] },
        { id: 'energy', name: 'ENERGY-FIRST', sub: 'Stronger power margin', img: stratEnergyImg, color: '#f4ad3f', icon: '⚡', features: [ {icon: '⚡', text: 'High power redundancy'}, {icon: '🔋', text: 'Larger energy storage'}, {icon: '💧', text: 'Standard water'}, {icon: '🌱', text: 'Moderate farming'} ] },
        { id: 'balanced', name: 'BALANCED', sub: 'Distributed redundancy', img: stratBalancedImg, color: '#65d4c2', icon: '⚖️', features: [ {icon: '💧', text: 'Moderate water storage'}, {icon: '⚡', text: 'Moderate energy storage'}, {icon: '🌱', text: 'Balanced farming capacity'}, {icon: '🛡️', text: 'Distributed redundancy'} ] }
      ],
      metrics: [
        { name: 'Operational duration', values: ['27 d', '23 d', '25 d'] },
        { name: 'Water stability', values: ['72%', '54%', '64%'] },
        { name: 'Food stability', values: ['43%', '49%', '51%'] },
        { name: 'Energy stability', values: ['58%', '79%', '69%'] },
        { name: 'Critical failures', values: ['2', '3', '2'] },
        { name: 'Recovery time', values: ['4 d', '3 d', '4 d'] }
      ]
    },
    {
      id: 'self_vs_dependent',
      label: 'Self-Sufficient vs Resource-Dependent',
      desc: 'Compare settlements that produce their own resources against ones relying on stored supplies.',
      strategies: [
        { id: 'self', name: 'SELF-SUFFICIENT', sub: 'High production capacity', img: stratWaterImg, color: '#50e3c2', icon: '🏭', features: [ {icon: '🏭', text: 'Large production facilities'}, {icon: '🔄', text: 'High recycling rate'}, {icon: '📦', text: 'Lower storage reserves'}, {icon: '⚙️', text: 'High maintenance cost'} ] },
        { id: 'dependent', name: 'RESOURCE-DEPENDENT', sub: 'Massive storage silos', img: stratEnergyImg, color: '#f4ad3f', icon: '📦', features: [ {icon: '📦', text: 'Massive storage silos'}, {icon: '🚢', text: 'Requires supply missions'}, {icon: '🏭', text: 'Minimal production infra'}, {icon: '⚙️', text: 'Low maintenance cost'} ] },
        { id: 'hybrid', name: 'HYBRID-MODEL', sub: 'Moderate production & storage', img: stratBalancedImg, color: '#65d4c2', icon: '⚖️', features: [ {icon: '⚖️', text: 'Balanced production'}, {icon: '📦', text: 'Moderate storage'}, {icon: '🔄', text: 'Standard recycling'}, {icon: '🔧', text: 'Standard maintenance'} ] }
      ],
      metrics: [
        { name: 'Operational duration', values: ['Indefinite*', '45 d limit', '120 d limit'] },
        { name: 'Water stability', values: ['85%', '99% (until empty)', '90%'] },
        { name: 'Food stability', values: ['80%', '99% (until empty)', '85%'] },
        { name: 'Energy stability', values: ['75%', '95%', '85%'] },
        { name: 'Critical failures', values: ['5', '1', '2'] },
        { name: 'Recovery time', values: ['10 d', '2 d', '5 d'] }
      ]
    },
    {
      id: 'fixed_vs_mobile',
      label: 'Fixed Settlement vs Mobile Settlement',
      desc: 'Compare a permanent base against a smaller settlement designed to relocate.',
      strategies: [
         { id: 'fixed', name: 'FIXED SETTLEMENT', sub: 'Permanent heavy base', img: stratEnergyImg, color: '#f4ad3f', icon: '🏛️', features: [ {icon: '🏛️', text: 'Heavy shielding'}, {icon: '⛏️', text: 'In-situ resource utilization'}, {icon: '🚚', text: 'Immobile'}, {icon: '📈', text: 'High initial cost'} ] },
         { id: 'mobile', name: 'MOBILE SETTLEMENT', sub: 'Relocatable rovers', img: stratWaterImg, color: '#50e3c2', icon: '🚚', features: [ {icon: '🚚', text: 'Fully mobile modules'}, {icon: '🛡️', text: 'Light shielding'}, {icon: '📉', text: 'Limited resource extraction'}, {icon: '🏃', text: 'Evades local hazards'} ] },
         { id: 'modular', name: 'MODULAR-ADAPTIVE', sub: 'Core base + mobile units', img: stratBalancedImg, color: '#65d4c2', icon: '🧩', features: [ {icon: '🧩', text: 'Mixed mobility'}, {icon: '🛡️', text: 'Moderate shielding'}, {icon: '⛏️', text: 'Targeted extraction'}, {icon: '📈', text: 'Moderate initial cost'} ] }
      ],
      metrics: [
        { name: 'Operational duration', values: ['Years', 'Months per location', 'Years (flexible)'] },
        { name: 'Water stability', values: ['90%', '50%', '75%'] },
        { name: 'Food stability', values: ['85%', '30%', '60%'] },
        { name: 'Energy stability', values: ['80%', '60%', '70%'] },
        { name: 'Critical failures', values: ['2', '6', '3'] },
        { name: 'Recovery time', values: ['5 d', '1 d', '2 d'] }
      ]
    },
    {
      id: 'redundant_vs_efficient',
      label: 'Redundant vs Efficient',
      desc: 'Compare a high-backup settlement against one optimized to minimize cost.',
      strategies: [
         { id: 'redundant', name: 'REDUNDANT', sub: 'High backup capacity', img: stratWaterImg, color: '#50e3c2', icon: '🔄', features: [ {icon: '🔄', text: 'Triple system backups'}, {icon: '🛡️', text: 'High safety margin'}, {icon: '💰', text: 'High cost & mass'}, {icon: '🧩', text: 'Complex maintenance'} ] },
         { id: 'efficient', name: 'EFFICIENT', sub: 'Lean infrastructure', img: stratEnergyImg, color: '#f4ad3f', icon: '⚡', features: [ {icon: '⚡', text: 'Streamlined systems'}, {icon: '⚖️', text: 'Low safety margin'}, {icon: '💰', text: 'Low cost & mass'}, {icon: '🔧', text: 'Simple maintenance'} ] },
         { id: 'balanced_risk', name: 'BALANCED-RISK', sub: 'Targeted redundancy', img: stratBalancedImg, color: '#65d4c2', icon: '⚖️', features: [ {icon: '⚖️', text: 'Double backups on criticals'}, {icon: '🛡️', text: 'Moderate safety margin'}, {icon: '💰', text: 'Medium cost & mass'}, {icon: '🔧', text: 'Standard maintenance'} ] }
      ],
      metrics: [
        { name: 'Operational duration', values: ['40 d', '20 d', '30 d'] },
        { name: 'Water stability', values: ['95%', '60%', '80%'] },
        { name: 'Food stability', values: ['90%', '50%', '75%'] },
        { name: 'Energy stability', values: ['95%', '70%', '85%'] },
        { name: 'Critical failures', values: ['0', '4', '1'] },
        { name: 'Recovery time', values: ['1 d', '7 d', '3 d'] }
      ]
    },
    {
      id: 'large_vs_small',
      label: 'Large Crew vs Small Crew',
      desc: 'Compare how strategies behave with different crew sizes.',
      strategies: [
         { id: 'large', name: 'LARGE CREW (12)', sub: 'High workforce', img: stratLargeCrewImg, color: '#50e3c2', icon: '👥', features: [ {icon: '👥', text: '12 Crew members'}, {icon: '🏗️', text: 'Fast construction/repair'}, {icon: '🍔', text: 'High resource drain'}, {icon: '🚑', text: 'Higher medical risk'} ] },
         { id: 'small', name: 'SMALL CREW (4)', sub: 'Low resource drain', img: stratSmallCrewImg, color: '#f4ad3f', icon: '👤', features: [ {icon: '👤', text: '4 Crew members'}, {icon: '🐢', text: 'Slow construction'}, {icon: '🍔', text: 'Low resource drain'}, {icon: '🚑', text: 'Lower medical risk'} ] },
         { id: 'standard', name: 'STANDARD CREW (8)', sub: 'Balanced workforce', img: stratBalancedImg, color: '#65d4c2', icon: '👥', features: [ {icon: '👥', text: '8 Crew members'}, {icon: '🏗️', text: 'Standard construction'}, {icon: '🍔', text: 'Moderate resource drain'}, {icon: '🚑', text: 'Moderate medical risk'} ] }
      ],
      metrics: [
        { name: 'Operational duration', values: ['15 d', '45 d', '25 d'] },
        { name: 'Water stability', values: ['40%', '85%', '65%'] },
        { name: 'Food stability', values: ['30%', '80%', '55%'] },
        { name: 'Energy stability', values: ['60%', '75%', '68%'] },
        { name: 'Critical failures', values: ['5', '1', '2'] },
        { name: 'Recovery time', values: ['2 d', '6 d', '4 d'] }
      ]
    },
    {
      id: 'central_vs_dist',
      label: 'Centralized vs Distributed',
      desc: 'Compare one central habitat against multiple smaller modules.',
      strategies: [
         { id: 'central', name: 'CENTRALIZED', sub: 'Single large hub', img: stratWaterImg, color: '#50e3c2', icon: '🏢', features: [ {icon: '🏢', text: 'One large monolithic base'}, {icon: '⚡', text: 'Highly efficient distro'}, {icon: '💥', text: 'Single point of failure'}, {icon: '🚶', text: 'Short transit times'} ] },
         { id: 'dist', name: 'DISTRIBUTED', sub: 'Network of modules', img: stratEnergyImg, color: '#f4ad3f', icon: '🏘️', features: [ {icon: '🏘️', text: 'Multiple small hubs'}, {icon: '🔋', text: 'Less efficient distro'}, {icon: '🛡️', text: 'No single point of failure'}, {icon: '🚶', text: 'Long transit times'} ] },
         { id: 'clustered', name: 'CLUSTERED', sub: '2-3 medium hubs', img: stratBalancedImg, color: '#65d4c2', icon: '🏘️', features: [ {icon: '🏘️', text: 'Clustered modules'}, {icon: '🔋', text: 'Moderate distro efficiency'}, {icon: '🛡️', text: 'Partial redundancy'}, {icon: '🚶', text: 'Moderate transit times'} ] }
      ],
      metrics: [
        { name: 'Operational duration', values: ['30 d', '35 d', '32 d'] },
        { name: 'Water stability', values: ['70%', '75%', '73%'] },
        { name: 'Food stability', values: ['65%', '65%', '65%'] },
        { name: 'Energy stability', values: ['80%', '70%', '75%'] },
        { name: 'Critical failures', values: ['1 (catastrophic)', '3 (isolated)', '2 (regional)'] },
        { name: 'Recovery time', values: ['15 d', '3 d', '7 d'] }
      ]
    },
    {
      id: 'store_vs_prod',
      label: 'Storage-Heavy vs Production-Heavy',
      desc: 'Compare storing large reserves versus active continuous generation.',
      strategies: [
         { id: 'store', name: 'STORAGE-HEAVY', sub: 'Massive reserves', img: stratWaterImg, color: '#50e3c2', icon: '🛢️', features: [ {icon: '🛢️', text: 'Huge stockpiles'}, {icon: '🛡️', text: 'Immune to short outages'}, {icon: '⚠️', text: 'Finite timeline'}, {icon: '🚀', text: 'High launch mass'} ] },
         { id: 'prod', name: 'PRODUCTION-HEAVY', sub: 'Continuous generation', img: stratEnergyImg, color: '#f4ad3f', icon: '⚙️', features: [ {icon: '⚙️', text: 'Active generation'}, {icon: '🌊', text: 'Vulnerable to system trips'}, {icon: '♾️', text: 'Infinite potential timeline'}, {icon: '🚀', text: 'Lower launch mass'} ] },
         { id: 'hybrid_res', name: 'HYBRID-RESERVE', sub: 'Balanced storage & gen', img: stratBalancedImg, color: '#65d4c2', icon: '⚖️', features: [ {icon: '⚖️', text: 'Moderate stockpiles'}, {icon: '⚙️', text: 'Moderate generation'}, {icon: '🛡️', text: 'Buffer against outages'}, {icon: '🚀', text: 'Medium launch mass'} ] }
      ],
      metrics: [
        { name: 'Operational duration', values: ['60 d max', 'Indefinite*', '120 d limit'] },
        { name: 'Water stability', values: ['99%', '65%', '85%'] },
        { name: 'Food stability', values: ['99%', '55%', '80%'] },
        { name: 'Energy stability', values: ['99%', '70%', '90%'] },
        { name: 'Critical failures', values: ['0', '4', '1'] },
        { name: 'Recovery time', values: ['1 d', '5 d', '2 d'] }
      ]
    }
  ];

    const activeComp = comparisonsData.find(c => c.id === (state.comparisonMode || 'water_vs_energy')) || comparisonsData[0];
  const gridTemplate = `1.2fr repeat(${activeComp.strategies.length}, 1fr)`;

  return `<section class="screen ${state.route==='compare'?'active':''}" data-screen="compare">
    <div class="view-header">
      <div>
        <div class="eyebrow">07 / COMPARE</div>
        <h2>Strategy Comparison</h2>
      </div>
      <div class="header-actions">
        <select id="comparisonSelector" style="background:#040b11;color:#b7cede;border:1px solid #274052;padding:6px 12px;font:500 10px var(--mono);cursor:pointer;outline:none;border-radius:4px;box-shadow:0 4px 15px rgba(0,0,0,.3);">
          ${comparisonsData.map(c => `<option value="${c.id}" ${activeComp.id === c.id ? 'selected' : ''}>${c.label}</option>`).join('')}
        </select>
        <span class="chip" style="margin-left: 6px;">SAME LOCATION / SAME CONDITIONS</span>
        <button class="btn btn-primary" data-nav="report">OPEN REPORT →</button>
      </div>
    </div>
    <div class="compare-grid">
      <div class="hud-card panel">
        <div class="kicker">CONFIGURATION MATRIX</div>
        <div class="table" style="margin-top:10px">
          <div class="tr head" style="grid-template-columns: ${gridTemplate}">
            <div>METRIC</div>
            ${activeComp.strategies.map(s => `<div>${s.name}</div>`).join('')}
          </div>
          ${activeComp.metrics.map(m => `
          <div class="tr" style="grid-template-columns: ${gridTemplate}">
            <div>${m.name}</div>
            ${m.values.map(v => `<div>${v}</div>`).join('')}
          </div>`).join('')}
        </div>
        <div class="science-note">These values are illustrative frontend state. In the final product they must be simulator outputs produced under identical conditions.</div>
      </div>
      <div class="hud-card panel">
        <div class="kicker">3D STRATEGY PROFILES</div>
        <div class="scene-mini-grid" style="margin-top:8px; display:grid; grid-template-columns: repeat(${activeComp.strategies.length}, 1fr); gap:8px;">
          ${activeComp.strategies.map((s,i) => `
          <div class="strategy-3d ${(state.selectedStrategy||activeComp.strategies[0].id)===s.id?'active':''}" data-strategy-profile="${s.id}" style="--accent-color:${s.color}">
            <div class="strat-card-hd">
              <div class="strat-title-row"><span class="strat-icon">${s.icon}</span><strong>${s.name}</strong></div>
              <small>${s.sub}</small>
            </div>
            <div class="strat-img-wrap">
              <img src="${s.img}" alt="${s.name}" class="strat-3d-img">
              <div class="strat-img-glow"></div>
            </div>
            <div class="strat-features">
              ${s.features.map(f => `<div class="strat-feat-row"><span class="feat-icon">${f.icon}</span><span>${f.text}</span></div>`).join('')}
            </div>
          </div>`).join('')}
        </div>
        <div class="source-line" style="margin-top:8px">${activeComp.desc}</div>
      </div>
    </div>
  </section>`;
}
function screenResearcher(){return `<section class="screen ${state.route==='researcher'?'active':''}" data-screen="researcher"><div class="view-header"><div><div class="eyebrow">COPILOT / LIFEBOAT RESEARCHER</div><h2>Ask the Simulation</h2></div><div class="header-actions"><span class="chip">STRUCTURED OUTPUT ONLY</span><span class="chip" style="color:var(--green)">NUMBERS FROM SIM</span></div></div><div class="research-layout"><div class="hud-card holo"><div class="holo-ring"></div><div class="holo-ring"></div><div class="holo-core"></div><div class="research-log">LIFEBOAT RESEARCHER / NUMERICAL CLAIMS ARE SUPPLIED BY THE SIMULATOR / AI EXPLAINS, THE MODEL CALCULATES</div></div><div class="hud-card panel chat"><div class="kicker">DECISION-SUPPORT INTERFACE</div><div class="messages" id="messages"><div class="message bot"><span>RESEARCHER</span><p>The current structured demo shows a heat → water → agriculture → food → crew cascade. Ask a what-if or request an explanation. I will only quote numerical values that exist in the current simulator state.</p></div><div class="message user"><span>YOU</span><p>Why did water become critical?</p></div><div class="message bot"><span>RESEARCHER</span><p>The demo run reaches the critical water threshold on Day 18 at 12% reserve. Would you like to know how you can solve this problem?</p></div></div><form class="chatbar" id="chatForm"><input id="chatInput" placeholder='Try: "Why did water become critical?" or "How can I solve this?"' autocomplete="off"><button class="btn btn-primary" type="submit">ASK ↗</button></form><div class="quick"><button data-q="Why did water become critical?">WHY WATER?</button><button data-q="How can I solve this problem?">HOW TO SOLVE?</button><button data-q="Try +30% water storage">TRY +30% WATER</button><button data-q="Explain the failure chain">EXPLAIN CHAIN</button></div></div></div></section>`}
function screenReport(){
  // ── Derive report data from live state ─────────────────────────────────────
  const baselineDay = 18;
  const afterDay    = state.interventionAfter || 27;
  const ivActive    = Object.values(state.interventions||{}).some(Boolean);

  // Water/Energy/Food scores from RUN B values if available, else baseline
  const waterScore  = ivActive ? Math.min(99, Math.round(12 + (state.waterUplift||35)*0.7  + (state.interventions?.water  ? 18:0) + (state.interventions?.demand ? 10:0))) : 12;
  const energyScore = ivActive ? Math.min(99, 48 + (state.interventions?.energy ? 22:0)) : 48;
  const foodScore   = ivActive ? Math.min(99, 24 + (state.interventions?.crop   ? 15:0) + (state.interventions?.crew ? 8:0) - Math.round((state.workloadCut||15)*0.2)) : 24;

  // Identify weakest resource
  const scores = [{name:'WATER',v:waterScore,icon:'💧',color:'var(--cyan)'},{name:'ENERGY',v:energyScore,icon:'⚡',color:'var(--amber)'},{name:'FOOD',v:foodScore,icon:'🌱',color:'var(--green)'}];
  const weakest = scores.reduce((a,b)=>a.v<b.v?a:b);

  // Cause chain by resource
  const causeCopy = {
    WATER:  { cause:'High-temperature event elevated evaporation and crew water demand, exhausting reserves early.', chain:'Heat Spike → ↑ Water Demand → ↓ Water Reserve → ↓ Irrigation → ↓ Food Production → ↓ Food Reserve → ↓ Crew Capacity' },
    ENERGY: { cause:'Extended dust storm degraded solar output, triggering cascading power shortfalls across systems.', chain:'Dust Storm → ↓ Solar Output → ↓ Power Grid → ↓ Water Purification → ↓ Lighting → ↓ Crew Performance' },
    FOOD:   { cause:'Crop failure from temperature extremes compressed food reserves below mission-critical threshold.', chain:'Temperature → ↓ Crop Yield → ↓ Food Production → ↓ Food Reserve → ↓ Crew Calories → Mission Risk' },
  };
  const { cause, chain } = causeCopy[weakest.name];

  // Next-step suggestion
  const suggestions = {
    WATER:  { label:'Increase Water Storage', action:'Add 20-40% more water uplift using the Intervention Lab, or enable the "Reduce Water Demand" toggle.', nav:'intervene' },
    ENERGY: { label:'Enable Energy Backup',   action:'Activate "Increase Energy Backup" in the Intervention Lab and review battery redundancy in the Build screen.', nav:'build' },
    FOOD:   { label:'Reduce Crop Demand',     action:'Enable "Reduce Crop Demand" toggle and "Adjust Crew Shifts" to lower food pressure on the system.', nav:'intervene' },
  };
  const sug = suggestions[weakest.name];

  // Overall mission duration shown
  const missionDay = ivActive ? afterDay : baselineDay;
  const improvement = ivActive ? `+${afterDay - baselineDay} days vs. baseline` : 'No interventions applied';

  // Score bar helper
  function scoreBadge(s) {
    const color = s.v >= 70 ? 'var(--green)' : s.v >= 40 ? 'var(--amber)' : 'var(--red)';
    const label = s.v >= 70 ? 'STABLE' : s.v >= 40 ? 'MARGINAL' : 'CRITICAL';
    return `<div class="rpt-score-row">
      <div class="rpt-score-label"><span class="rpt-score-icon">${s.icon}</span><span>${s.name}</span></div>
      <div class="rpt-score-bar-wrap"><div class="rpt-score-bar" style="width:${s.v}%;background:${color};box-shadow:0 0 8px ${color}40"></div></div>
      <div class="rpt-score-val" style="color:${color}">${s.v}% <span class="rpt-score-status">${label}</span></div>
    </div>`;
  }

  return `<section class="screen ${state.route==='report'?'active':''}" data-screen="report">
    <div class="view-header">
      <div>
        <div class="eyebrow">08 / REPORT</div>
        <h2>Mission Resilience Report</h2>
      </div>
      <div class="header-actions">
        <span class="chip" style="color:var(--green)">LIVE FROM STATE</span>
        <button class="btn" id="reportExport">EXPORT VIEW</button>
        <button class="btn btn-primary" data-nav="explore">NEW RUN →</button>
      </div>
    </div>

    <!-- ── KPI ROW ── -->
    <div class="report-grid">
      ${reportKpi('TARGET', 'Jezero Crater', 'Mars')}
      ${reportKpi('SCENARIO', 'Heat Cascade', simState?.activeEvent||'Baseline')}
      ${reportKpi('BASELINE END', 'Day 18', 'Without intervention')}
      ${reportKpi('INTERVENED END', 'Day '+afterDay, improvement)}
    </div>

    <!-- ── MAIN GRID ── -->
    <div class="report-main-v2">

      <!-- LEFT COL: Summary + Safety Scores -->
      <div style="display:flex;flex-direction:column;gap:10px">

        <!-- Duration summary -->
        <div class="hud-card panel rpt-box">
          <div class="kicker">MISSION DURATION SUMMARY</div>
          <div class="rpt-duration-row">
            <div class="rpt-run-block">
              <div class="rpt-run-label">RUN A / BASELINE</div>
              <div class="rpt-run-day" style="color:var(--red)">18<span>d</span></div>
              <div class="rpt-run-caption">Critical threshold hit</div>
            </div>
            <div class="rpt-arrow">→</div>
            <div class="rpt-run-block">
              <div class="rpt-run-label">RUN B / INTERVENED</div>
              <div class="rpt-run-day" style="color:var(--cyan)">${missionDay}<span>d</span></div>
              <div class="rpt-run-caption">${ivActive?'Interventions applied':'No interventions'}</div>
            </div>
          </div>
          ${ivActive ? `<div class="rpt-improvement">↑ ${afterDay-baselineDay} additional operational days gained through intervention</div>` : `<div class="rpt-improvement" style="color:var(--amber)">⚠ Apply interventions on the INTERVENE screen to extend the mission.</div>`}
        </div>

        <!-- Safety scores -->
        <div class="hud-card panel rpt-box">
          <div class="kicker">RESOURCE SAFETY SCORES</div>
          <div class="rpt-scores">
            ${scores.map(scoreBadge).join('')}
          </div>
        </div>
      </div>

      <!-- RIGHT COL: Weak point + Suggestion -->
      <div style="display:flex;flex-direction:column;gap:10px">

        <!-- Weakest point -->
        <div class="hud-card panel rpt-box">
          <div class="kicker">BIGGEST WEAK POINT</div>
          <div class="rpt-weak-name" style="color:${weakest.color}">${weakest.icon} ${weakest.name}</div>
          <div class="rpt-weak-score" style="color:${weakest.color}">${weakest.v}% safety score — ${weakest.v<40?'CRITICAL':weakest.v<70?'MARGINAL':'STABLE'}</div>
          <div class="kicker" style="margin-top:14px">ROOT CAUSE</div>
          <p class="rpt-cause">${cause}</p>
          <div class="kicker" style="margin-top:14px">FAILURE CHAIN</div>
          <div class="report-chain">${chain}</div>
        </div>

        <!-- Next step suggestion -->
        <div class="hud-card panel rpt-box rpt-suggestion">
          <div class="kicker">SUGGESTED NEXT STEP</div>
          <div class="rpt-sug-title">→ ${sug.label}</div>
          <p class="rpt-cause">${sug.action}</p>
          <button class="btn btn-primary" style="margin-top:12px;width:100%" data-nav="${sug.nav}">GO TO ${sug.nav.toUpperCase()} SCREEN →</button>
        </div>

        <!-- Disclaimer -->
        <div class="report-footer" style="padding:10px;border:1px solid #1d3040;font:8px var(--mono);color:#516a7f;line-height:1.7">
          This report is an experimental decision-support summary derived from frontend simulation state. It does not model the complete planetary environment, predict actual mission survival, or imply NASA endorsement.
        </div>
      </div>

    </div>
  </section>`;
}

function reportKpi(a,b,c){return `<div class="report-kpi hud-card"><span>${a}</span><strong>${b}</strong><small>${c}</small></div>`}

function attachUI(){
  ui.querySelectorAll('[data-nav]').forEach(b=>b.addEventListener('click',()=>{playSound('navigate');navigate(b.dataset.nav)}));
  ui.querySelector('#clearSelection')?.addEventListener('click', (e) => {
    e.stopPropagation();
    playSound('click');
    const earth = bodies.find(b => b.p.key === 'earth') || (bodies.length ? bodies[0] : null);
    state.selected = earth;
    flight = {
      startPos: camera.position.clone(),
      startTarget: controls.target.clone(),
      endPos: new THREE.Vector3(0, 18, 38),
      endTarget: new THREE.Vector3(0, 0, 0),
      t: 0,
      duration: 1.0
    };
    controls.autoRotate = true;
    showToast('Viewing Full Solar System (Earth Anchor)');
    renderUI();
  });
  ui.querySelector('#toggleOrbits')?.addEventListener('click',()=>{playSound('click');state.showOrbits=!state.showOrbits;scene.traverse(o=>{if(o.userData?.orbit)o.visible=state.showOrbits});renderUI();});
  ui.querySelector('#toggleLabels')?.addEventListener('click',()=>{playSound('click');state.showLabels=!state.showLabels;showToast(state.showLabels?'Labels enabled':'Labels disabled')});
  ui.querySelector('#toggleScale')?.addEventListener('click',()=>{playSound('click');state.scale=state.scale==='schematic'?'true':'schematic';showToast('Scale mode: '+state.scale.toUpperCase())});
  ui.querySelector('#timeSpeed')?.addEventListener('input',e=>{state.speed=Number(e.target.value);const b=e.target.nextElementSibling;if(b)b.textContent=state.speed.toFixed(1)+'×'});
  ui.querySelectorAll('[data-planet]').forEach(b=>b.addEventListener('click',()=>{playSound('click');state.planet=b.dataset.planet;const body=b.dataset.planet==='moon'?'moon':b.dataset.planet;const found=body==='moon'?bodies.find(x=>x.moon&&x.p.key==='moon'):bodies.find(x=>x.p.key===body);if(found)focusBody(found);renderUI()}));
  ui.querySelectorAll('[data-focus]').forEach(b=>b.addEventListener('click',()=>{playSound('click');const found=bodies.find(x=>x.p.key===b.dataset.focus);if(found)focusBody(found)}));
  ui.querySelectorAll('[data-tutorial]').forEach(b=>b.addEventListener('click',()=>{playSound('click');state.tutorial=Number(b.dataset.tutorial);renderUI()}));
  ui.querySelectorAll('[data-tutorial]').forEach(b=>b.addEventListener('click',()=>{playSound('click');state.tutorial=Number(b.dataset.tutorial);renderUI()}));
  const tn=ui.querySelector('#tutorialNext');if(tn)tn.addEventListener('click',()=>{playSound('success');if((state.tutorial||0)<5){state.tutorial=(state.tutorial||0)+1;renderUI()}else navigate('explore')});
  const tp=ui.querySelector('#tutorialPrev');if(tp)tp.addEventListener('click',()=>{playSound('click');if((state.tutorial||0)>0){state.tutorial=(state.tutorial||0)-1;renderUI()}});
  ui.querySelectorAll('input[type=range]').forEach(inp=>{
    inp.addEventListener('input',()=>{
      const o=ui.querySelector('#out-'+inp.id);
      if(o) o.textContent=Number(inp.value).toLocaleString()+' '+inp.dataset.unit;
      if(inp.id==='waterUplift'){
        state.waterUplift=Number(inp.value);
        const out=ui.querySelector('#waterUpliftOut');
        if(out) out.textContent=inp.value+'%';
        ui.querySelectorAll('.strategy').forEach(s=>s.classList.remove('active'));
        updateInterveneDOM();
      }
      if(inp.id==='workloadCut'){
        state.workloadCut=Number(inp.value);
        const out=ui.querySelector('#workloadCutOut');
        if(out) out.textContent=inp.value+'%';
        ui.querySelectorAll('.strategy').forEach(s=>s.classList.remove('active'));
        updateInterveneDOM();
      }
    });
    inp.addEventListener('mouseenter',()=>playSound('hover'));
  });
  ui.querySelector('#simPlay')?.addEventListener('click',()=>{playSound('click');state.playing=!state.playing;renderUI();if(state.playing)animateResourceBars()});ui.querySelector('#prevDay')?.addEventListener('click',()=>{playSound('click');state.simDay=Math.max(1,state.simDay-1);renderUI();animateResourceBars()});ui.querySelector('#nextDay')?.addEventListener('click',()=>{playSound('click');state.simDay=Math.min(30,state.simDay+1);renderUI();animateResourceBars()});ui.querySelector('#fastDay')?.addEventListener('click',()=>{playSound('click');state.simDay=Math.min(30,state.simDay+5);renderUI();animateResourceBars()});ui.querySelector('#resetSim')?.addEventListener('click',()=>{playSound('click');state.simDay=1;state.event=null;state.playing=false;renderUI();animateResourceBars()});
  ui.querySelectorAll('[data-event]').forEach(b=>b.addEventListener('click',()=>{playSound('warning');state.event=b.dataset.event;state.simDay=Math.min(8,state.simDay+1);renderUI();animateResourceBars();triggerWarningAnimation(b)}));
  ui.querySelectorAll('[data-node]').forEach(b=>b.addEventListener('click',()=>{playSound('click');state.selectedNode=b.dataset.node;updateInspector();ui.querySelectorAll('[data-node]').forEach(n=>n.classList.toggle('active',n.dataset.node===state.selectedNode))}));
  
  // Intervention toggles — reactive, updates live
  ['water','demand','energy','crew','crop'].forEach(k=>{
    ui.querySelector('#int-'+k)?.addEventListener('change',e=>{
      playSound('click');
      state.interventions[k] = e.target.checked;
      ui.querySelectorAll('.strategy').forEach(s=>s.classList.remove('active'));
      updateInterveneDOM();
    });
  });

  ui.querySelectorAll('[data-strategy-profile]').forEach(btn => {
    btn.addEventListener('click', () => {
      playSound('click');
      state.selectedStrategy = btn.dataset.strategyProfile;
      ui.querySelectorAll('[data-strategy-profile]').forEach(el => el.classList.toggle('active', el === btn));
    });
  });

  ui.querySelector('#comparisonSelector')?.addEventListener('change', e => {
    playSound('click');
    state.comparisonMode = e.target.value;
    state.selectedStrategy = null; 
    renderUI();
  });

  
  // Researcher AI Chat listeners
  ui.querySelector('#chatForm')?.addEventListener('submit', e => {
    e.preventDefault();
    const inp = ui.querySelector('#chatInput');
    if(inp && inp.value.trim()) {
      askResearcher(inp.value);
    }
  });

  ui.querySelectorAll('[data-q]').forEach(btn => {
    btn.addEventListener('click', () => {
      if(btn.dataset.q) {
        askResearcher(btn.dataset.q);
      }
    });
  });

  ui.querySelector('#reportExport')?.addEventListener('click',()=>{playSound('success');showToast('Report view is ready for print / export integration')});

  // Draggable selection dock
  const dock = ui.querySelector('#selectionDock');
  if (dock) {
    let isDragging = false;
    let startX = 0, startY = 0;
    let startLeft = 0, startTop = 0;

    dock.addEventListener('pointerdown', (e) => {
      if (e.target.closest('#clearSelection')) return;
      isDragging = true;
      dock.classList.add('is-dragging');
      dock.setPointerCapture(e.pointerId);
      startX = e.clientX;
      startY = e.clientY;
      const rect = dock.getBoundingClientRect();
      startLeft = rect.left;
      startTop = rect.top;
      e.stopPropagation();
    });

    dock.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const maxW = window.innerWidth - dock.offsetWidth - 8;
      const maxH = window.innerHeight - dock.offsetHeight - 8;
      const newX = Math.max(8, Math.min(maxW, startLeft + dx));
      const newY = Math.max(74, Math.min(maxH, startTop + dy));
      dock.style.left = newX + 'px';
      dock.style.top = newY + 'px';
      dock.style.right = 'auto';
      dock.style.bottom = 'auto';
      state.dockPos = { x: newX, y: newY };
    });

    const endDrag = (e) => {
      if (!isDragging) return;
      isDragging = false;
      dock.classList.remove('is-dragging');
      try { dock.releasePointerCapture(e.pointerId); } catch(err){}
      const rect = dock.getBoundingClientRect();
      state.dockPos = { x: rect.left, y: rect.top };
    };

    dock.addEventListener('pointerup', endDrag);
    dock.addEventListener('pointercancel', endDrag);
  }
  
  // Add hover sounds to interactive elements
  ui.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('mouseenter', () => playSound('hover'));
  });
  
  // Sound toggle (only on landing screen)
  const soundToggle = document.getElementById('soundToggle');
  if (soundToggle) {
    soundToggle.addEventListener('click', function() {
      audioContext.resume();
      soundEnabled = !soundEnabled;
      this.textContent = soundEnabled ? '🔊 SOUND ON' : '🔇 SOUND OFF';
      this.style.borderColor = soundEnabled ? '#35566f' : '#6b2a2a';
      this.style.color = soundEnabled ? '#a9c8df' : '#e87c7c';
      if (soundEnabled) playSound('click');
    });
  }
  
  // Wire up the new rich Explore screen interactions
  if (state.route === 'explore') {
    attachExploreEvents(
      exploreState,
      () => { // onUpdate — re-render just the explore inner content
        const section = ui.querySelector('[data-screen="explore"]');
        if (section) {
          const inner = section.querySelector('.hud');
          if (inner) {
            const explInner = inner.querySelector('.expl-layout');
            if (explInner) {
              explInner.outerHTML = renderExplore(exploreState);
              // Re-attach after DOM replacement
              attachExploreEvents(exploreState, () => {}, (es) => { navigate('build'); });
            } else {
              renderUI();
            }
          }
        }
      },
      (es) => { // onConfirm — navigate to build
        playSound('success');
        showToast(`Analog confirmed: ${es.confirmedAnalogId?.toUpperCase() || 'selected site'}`);
        navigate('build');
      }
    );
  }

  // Wire up the new Build screen interactions
  if (state.route === 'build') {
    attachBuildEvents(
      buildState,
      () => { // onUpdate
        const section = ui.querySelector('[data-screen="build"]');
        if (section) {
          const inner = section.querySelector('.hud');
          if (inner) {
            const bldWrap = inner.querySelector('.bld-layout');
            if (bldWrap) {
              bldWrap.outerHTML = renderBuild(buildState);
              attachBuildEvents(buildState, () => renderUI(), () => { navigate('simulate'); });
            } else {
              renderUI();
            }
          }
        }
      },
      () => { // onComplete
        navigate('simulate');
      }
    );
  }

  // Wire up Simulate screen — self-contained, handles its own DOM refresh
  if (state.route === 'simulate') {
    attachSimulateEvents(buildState);
  }
  
  if (state.route === 'crew') {
    attachCrewEvents();
  }

  updateInspector();
}
function updateInspector(){
  const ev = simState.activeEvent || 'heat';
  const steps = CASCADE_MSGS[ev] || CASCADE_MSGS['heat'];
  const activeId = state.selectedNode || steps[0].node;
  const step = steps.find(s => s.node === activeId) || steps[0];
  const nodeDef = CASCADE_NODES.find(x => x.id === step.node);
  
  const t = ui.querySelector('#nodeTitle');
  if(t) t.textContent = nodeDef.label;
  
  const causeEl = ui.querySelector('#nodeCause');
  if(causeEl) causeEl.textContent = step.msg;
}
let isResearcherThinking = false;
function askResearcher(q){
  if(!q || !q.trim() || isResearcherThinking) return;
  const box = ui.querySelector('#messages');
  const input = ui.querySelector('#chatInput');
  if(!box) return;

  const userText = q.trim();
  if(input) input.value = '';

  // Append user message
  const u = document.createElement('div');
  u.className = 'message user';
  u.innerHTML = `<span>YOU</span><p>${escapeHtml(userText)}</p>`;
  box.appendChild(u);

  // Play click sound & scroll
  playSound('click');
  box.scrollTop = box.scrollHeight;

  // Append typing/thinking indicator
  isResearcherThinking = true;
  const typingEl = document.createElement('div');
  typingEl.className = 'message bot typing-bubble';
  typingEl.id = 'researcherTyping';
  typingEl.innerHTML = `<span>RESEARCHER</span><p class="typing-text"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span> <em>Analyzing simulation telemetry...</em></p>`;
  box.appendChild(typingEl);
  box.scrollTop = box.scrollHeight;

  // 2-second frontend simulation delay
  setTimeout(() => {
    // Remove typing indicator
    const currentTyping = document.getElementById('researcherTyping');
    if(currentTyping) currentTyping.remove();
    isResearcherThinking = false;

    // Formulate response
    let answer = '';
    if (/why.*water|water.*critical|water.*threshold/i.test(userText)) {
      answer = 'The demo run reaches the critical water threshold on Day 18 at 12% reserve. Would you like to know how you can solve this problem?';
    } else if (/how.*solve|solve.*problem|solution|what.*try|fix|yes|help/i.test(userText)) {
      answer = 'To prevent the Day 18 water collapse: 1. In the INTERVENE tab, enable "Increase Water Storage" and set Water Storage Uplift to 35-50%. 2. Enable "Reduce Water Demand" to lower human draw. 3. Adjust Crew Shifts to cut workload fatigue. This will extend settlement survival past Day 27.';
    } else if (/30.*water|water.*storage|\+30/i.test(userText)) {
      answer = 'Adding +30% water storage extends the settlement operational buffer from Day 18 to Day 24, delaying the critical crop failure gate and stabilizing agriculture.';
    } else if (/failure|chain|cascade/i.test(userText)) {
      answer = 'Failure Cascade Sequence: Ambient Heat Spike (+5°C) → Increased Water Demand (+28%) → Reservoir Drops Below 12% → Automated Agriculture Cutoff → Caloric Deficit on Day 21 → Crew Workload Collapse.';
    } else {
      answer = 'Telemetry analysis confirmed for: "' + escapeHtml(userText) + '". Under the active shock scenario, water margin remains your primary critical vulnerability. Adjust parameters in the INTERVENE lab to test survival resilience.';
    }

    // Append bot message
    const b = document.createElement('div');
    b.className = 'message bot';
    b.innerHTML = `<span>RESEARCHER</span><p>${answer}</p>`;
    box.appendChild(b);

    // Audio cue & smooth scroll
    playSound('success');
    box.scrollTop = box.scrollHeight;
  }, 2000);
}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}

// Animation helper functions
function createLandingParticles(){
  const container = document.getElementById('landingParticles');
  if(!container) return;
  
  container.innerHTML = '';
  for(let i = 0; i < 50; i++){
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = (8 + Math.random() * 7) + 's';
    container.appendChild(particle);
  }
}

function animateLandingElements(){
  const elements = document.querySelectorAll('.landing-copy > *');
  elements.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.15}s`;
  });
  createLandingParticles();
}

function animateTutorialSteps(){
  const step = state.tutorial;
  const buttons = document.querySelectorAll('[data-tutorial]');
  buttons.forEach((btn, i) => {
    if(i === step){
      btn.style.animation = 'borderPulse 2s ease-in-out infinite';
    } else {
      btn.style.animation = 'none';
    }
  });
}

function animateFailureChain(){
  const nodes = document.querySelectorAll('.trace-node');
  const edges = document.querySelectorAll('.trace-edge');
  
  nodes.forEach((node, i) => {
    setTimeout(() => {
      node.classList.add('active');
      if(i < edges.length){
        edges[i].classList.add('active');
      }
    }, i * 400);
  });
}

function animateResourceBars(){
  const progressBars = document.querySelectorAll('.progress i');
  progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
}

function triggerSuccessAnimation(element){
  element.style.animation = 'successPulse 0.6s ease-out';
  playSound('success');
  setTimeout(() => {
    element.style.animation = '';
  }, 600);
}

function triggerWarningAnimation(element){
  element.style.animation = 'warningPulse 2s ease-in-out infinite';
  playSound('warning');
}

function triggerCriticalAnimation(element){
  element.style.animation = 'criticalPulse 1.5s ease-in-out infinite';
  playSound('critical');
}

function navigate(r){
  const currentScreen = document.querySelector('.screen.active');
  if (currentScreen) {
    currentScreen.classList.add('exit');
    setTimeout(() => {
      currentScreen.classList.remove('active', 'exit');
    }, 300);
  }
  
  state.route = r;
  renderUI();
  
  setTimeout(() => {
    const newScreen = document.querySelector(`[data-screen="${r}"]`);
    if (newScreen) {
      newScreen.classList.add('active');
    }
  }, 100);
  
  if(r==='explore'){
    const earth=bodies.find(x=>x.p.key==='earth');
    if(earth)focusBody(earth)
  }
  if(r==='simulate'){
    state.playing=true
  }
  
  // Add screen-specific animations
  if(r==='landing'){
    animateLandingElements();
  } else if(r==='tutorial'){
    animateTutorialSteps();
  } else if(r==='trace'){
    animateFailureChain();
  }
}
function showToast(s){let t=document.querySelector('#toast');if(!t){t=document.createElement('div');t.id='toast';Object.assign(t.style,{position:'fixed',left:'50%',bottom:'24px',transform:'translate(-50%,10px)',opacity:'0',zIndex:50,padding:'9px 12px',background:'#08111a',border:'1px solid #36516a',color:'#8eabc2',font:'8px var(--mono)',transition:'.2s',pointerEvents:'none'});document.body.appendChild(t)}t.textContent=s;requestAnimationFrame(()=>{t.style.opacity='1';t.style.transform='translate(-50%,0)'});clearTimeout(showToast.t);showToast.t=setTimeout(()=>{t.style.opacity='0';t.style.transform='translate(-50%,10px)'},1700)}

let last=performance.now(),frame=0,twinkle=0;
function animate(now=performance.now()){
 requestAnimationFrame(animate);
 const dt=Math.min(.05,(now-last)/1000);last=now;frame++;twinkle+=dt;
 if(state.playing)state.days+=dt*state.speed*state.direction;
 const t=state.days;
 PLANETS.forEach(p=>{
   const b=bodies.find(x=>x.p.key===p.key&&!x.moon);if(!b)return;
   const pos=planetPosition(p,t);
   b.group.position.set(pos.x,0,pos.z);
   b.group.rotation.y+=dt*(p.rotation>0?.25:-.18);
   if(p.key==='earth'){const moon=bodies.find(x=>x.p.key==='moon'&&x.moon);if(moon){const a=t*(2*Math.PI/MOONS.moon.period*35);moon.group.position.set(Math.cos(a)*MOONS.moon.orbit,0,Math.sin(a)*MOONS.moon.orbit)}}
   if(p.key==='mars'){['phobos','deimos'].forEach(k=>{const m=bodies.find(x=>x.p.key===k);if(m){const pd=MOONS[k].period;const a=t*(2*Math.PI/pd);m.group.position.set(Math.cos(a)*MOONS[k].orbit,0,Math.sin(a)*MOONS[k].orbit);m.mesh.rotation.x+=dt*0.7;m.mesh.rotation.y+=dt*1.1}})}
 });
 sunMesh.rotation.y+=dt*.018;
 const pulse=1+Math.sin(twinkle*2.35)*.045;coronaInner.scale.setScalar(pulse);coronaOuter.scale.setScalar(pulse*(1.01+Math.sin(twinkle*1.2)*.025));
 sunMat.emissiveIntensity=2.45+Math.sin(twinkle*2.1)*.28;solarArc1.rotation.z+=dt*.12;solarArc2.rotation.x-=dt*.075;solarArc1.scale.setScalar(1+Math.sin(twinkle*1.7)*.035);solarArc2.scale.setScalar(1+Math.sin(twinkle*1.25)*.025);
 stars.rotation.y+=dt*.0012;stars.rotation.x+=dt*.00011;stars.material.opacity=.77+Math.sin(twinkle*1.6)*.07;
 solarParticles.rotation.y-=dt*.0023;solarParticles.rotation.z+=dt*.0006;solarParticles.material.opacity=.2+Math.sin(twinkle*1.9)*.08;
 belt1.rotation.y+=dt*.0008;belt2.rotation.y+=dt*.00024;
 bodies.forEach(b=>{const target=b===state.hover?1.09:1;const s=b.mesh.scale.x+(target-b.mesh.scale.x)*Math.min(1,dt*8);b.mesh.scale.setScalar(s)});
 
 // Enhanced dynamic effects
 const hoverIntensity=state.hover?1:0;
 bloom.strength=0.68+hoverIntensity*0.2;
 outline.edgeStrength=2.6+hoverIntensity*1.5;
 
 // Subtle camera movement based on mouse
 if(!flight){
   const targetX=pointer.x*0.5;
   const targetY=pointer.y*0.3;
   camera.position.x+=(targetX-camera.position.x)*dt*2;
   camera.position.y+=(7.5+targetY-camera.position.y)*dt*2;
 }
 
 if(flight){flight.t=Math.min(1,flight.t+dt/flight.duration);const q=flight.t*flight.t*(3-2*flight.t);camera.position.lerpVectors(flight.startPos,flight.endPos,q);controls.target.lerpVectors(flight.startTarget,flight.endTarget,q);if(flight.t>=1){flight=null;controls.autoRotate=state.route==='landing'}}
  if (state.route === 'landing' || state.route === 'tutorial') {
    updateRaycast();
    controls.update();
    composer.render();
  } else {
    controls.update();
    renderer.render(scene, camera);
  }
}

window.addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);composer.setSize(innerWidth,innerHeight);outline.setSize(innerWidth,innerHeight)});

let pct=0;const bootTimer=setInterval(()=>{pct+=17;bootBar.style.width=Math.min(pct,100)+'%';bootStatus.textContent=['INITIALIZING CELESTIAL NAVIGATION','LOADING PLANETARY REFERENCE','CALIBRATING ORBITS','LINKING MISSION CONSOLE','READY'][Math.min(4,Math.floor(pct/22))];if(pct>=100){clearInterval(bootTimer);setTimeout(()=>{boot.style.opacity='0';boot.style.visibility='hidden'},450)}},180);
if(!state.selected){const initialEarth=bodies.find(b=>b.p.key==='earth')||bodies[0];if(initialEarth)state.selected=initialEarth;}
renderUI();animate();
