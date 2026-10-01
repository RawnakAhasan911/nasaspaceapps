const TOUCH = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

export function createCursor(getState) {
  const el = document.createElement('div');
  el.id = 'mission-cursor';
  el.innerHTML = `<div class="mc-ring"></div><div class="mc-dot"></div><div class="mc-lock" hidden></div><b class="mc-label" hidden></b>`;
  el.style.pointerEvents = 'none';
  document.body.appendChild(el);

  let x = innerWidth / 2;
  let y = innerHeight / 2;
  let tx = x;
  let ty = y;
  let raf = 0;
  let mounted = true;

  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches || getState().settings.reducedMotion;
  const useSystem = () => TOUCH || reduced() || getState().settings.systemCursor || !mounted;

  function applyNative(hide) {
    document.documentElement.classList.toggle('custom-cursor', hide);
  }

  window.addEventListener('pointermove', (e) => {
    tx = e.clientX;
    ty = e.clientY;
    if (useSystem()) {
      applyNative(false);
      el.hidden = true;
      return;
    }
    el.hidden = false;
    applyNative(true);
  });

  function tick() {
    raf = requestAnimationFrame(tick);
    if (useSystem()) {
      el.hidden = true;
      applyNative(false);
      return;
    }
    x += (tx - x) * 0.28;
    y += (ty - y) * 0.28;
    el.style.transform = `translate(${x}px, ${y}px)`;
    const st = getState();
    el.dataset.mode = st.cursorMode || 'default';
    const lab = el.querySelector('.mc-label');
    if (st.cursorLabel) {
      lab.hidden = false;
      lab.textContent = st.cursorLabel;
    } else lab.hidden = true;
    el.querySelector('.mc-lock').hidden = st.cursorMode !== 'locked';
  }
  tick();

  return {
    setLabel() {},
    destroy() {
      mounted = false;
      cancelAnimationFrame(raf);
      applyNative(false);
      el.remove();
    }
  };
}
