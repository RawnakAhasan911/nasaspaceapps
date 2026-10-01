/** Web Audio singleton. Starts only after first user gesture. Procedural oscillators — CC0. */

const CATEGORIES = ['ambient', 'ui', 'simulation', 'alerts'];

class AudioManager {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.gains = {};
    this.enabled = false;
    this.muted = false;
    this.reduceSound = false;
    this.levels = { master: 0.22, ambient: 0.45, ui: 0.5, simulation: 0.5, alerts: 0.55 };
    this.ambientNodes = [];
    this.tension = 0;
    this.stage = 'landing';
  }

  unlock() {
    if (this.enabled) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : this.levels.master;
    this.master.connect(this.ctx.destination);
    CATEGORIES.forEach((c) => {
      const g = this.ctx.createGain();
      g.gain.value = this.levels[c];
      g.connect(this.master);
      this.gains[c] = g;
    });
    this.enabled = true;
    this.ctx.resume();
  }

  setMuted(v) {
    this.muted = v;
    if (this.master) this.master.gain.setTargetAtTime(v ? 0 : this.levels.master, this.ctx.currentTime, 0.05);
  }

  setReduce(v) {
    this.reduceSound = v;
    if (v) this.stopAmbient();
  }

  setLevel(key, value) {
    this.levels[key] = value;
    if (key === 'master' && this.master && !this.muted) this.master.gain.value = value;
    else if (this.gains[key]) this.gains[key].gain.value = value;
  }

  beep(cat, freq, dur, type = 'sine', vol = 0.08) {
    if (!this.enabled || this.muted || this.reduceSound && cat === 'ambient') return;
    if (!this.ctx) return;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, this.ctx.currentTime);
    g.gain.setValueAtTime(vol, this.ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
    o.connect(g);
    g.connect(this.gains[cat] || this.master);
    o.start();
    o.stop(this.ctx.currentTime + dur);
  }

  hover() {
    this.beep('ui', 520, 0.07, 'sine', 0.03);
  }
  click() {
    this.beep('ui', 720, 0.09, 'triangle', 0.05);
  }
  confirm() {
    this.beep('ui', 523, 0.12, 'sine', 0.06);
    setTimeout(() => this.beep('ui', 784, 0.16, 'sine', 0.05), 90);
  }
  whoosh() {
    this.beep('ui', 180, 0.22, 'sine', 0.04);
  }
  ping() {
    this.beep('ui', 880, 0.18, 'sine', 0.05);
  }
  placeOk() {
    this.beep('ui', 640, 0.1, 'square', 0.04);
  }
  placeBad() {
    this.beep('ui', 180, 0.14, 'sawtooth', 0.04);
  }
  dayTick() {
    this.beep('simulation', 240, 0.05, 'sine', 0.025);
  }
  klaxon() {
    this.beep('alerts', 420, 0.12, 'square', 0.06);
    setTimeout(() => this.beep('alerts', 320, 0.12, 'square', 0.05), 130);
  }
  warnPulse() {
    this.beep('alerts', 360, 0.1, 'triangle', 0.05);
  }
  powerUp() {
    this.beep('ui', 200, 0.25, 'sine', 0.05);
    setTimeout(() => this.beep('ui', 400, 0.2, 'sine', 0.05), 120);
  }
  stinger() {
    this.beep('ui', 392, 0.1, 'sine', 0.05);
    setTimeout(() => this.beep('ui', 523, 0.18, 'sine', 0.05), 80);
  }
  complete() {
    this.beep('ui', 523, 0.12, 'sine', 0.05);
    setTimeout(() => this.beep('ui', 659, 0.14, 'sine', 0.05), 100);
    setTimeout(() => this.beep('ui', 784, 0.2, 'sine', 0.05), 200);
  }
  rumble() {
    this.beep('ambient', 55, 0.8, 'sawtooth', 0.03);
  }

  setTension(t) {
    this.tension = t;
  }

  setStage(stage) {
    if (stage === this.stage) return;
    this.stage = stage;
    this.crossfadeAmbient(stage);
  }

  stopAmbient() {
    this.ambientNodes.forEach((n) => {
      try {
        n.stop();
      } catch {
        /* already stopped */
      }
    });
    this.ambientNodes = [];
  }

  crossfadeAmbient(stage) {
    if (!this.enabled || this.muted || this.reduceSound) return;
    this.stopAmbient();
    const freq = stage === 'report' ? 90 : stage === 'simulate' ? 70 + this.tension * 40 : stage === 'landing' ? 48 : 62;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = 'sine';
    o.frequency.value = freq;
    g.gain.value = 0.0001;
    g.gain.exponentialRampToValueAtTime(0.018, this.ctx.currentTime + 0.8);
    o.connect(g);
    g.connect(this.gains.ambient);
    o.start();
    this.ambientNodes = [o];
  }

  dispose() {
    this.stopAmbient();
    if (this.ctx) this.ctx.close();
    this.enabled = false;
  }
}

export const audio = new AudioManager();
