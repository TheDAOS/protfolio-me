import { test } from 'node:test';
import assert from 'node:assert/strict';
import { setupDesktopStripFallback } from '../app/tech-strip-fallback.mjs';

function fixture({ desktop = true, motion = true, native = false } = {}) {
  const listeners = new Map();
  const media = (matches) => ({ matches, listeners: new Set(), addEventListener(_, fn) { this.listeners.add(fn); }, removeEventListener(_, fn) { this.listeners.delete(fn); }, change(value) { this.matches = value; for (const fn of this.listeners) fn(); } });
  const desktopQuery = media(desktop);
  const motionQuery = media(motion);
  const style = { transform: '', removeProperty() { this.transform = ''; } };
  let frame;
  const win = {
    CSS: { supports: () => native },
    matchMedia: (query) => query.includes('min-width') ? desktopQuery : motionQuery,
    document: { documentElement: { scrollHeight: 3000, clientHeight: 1000 } },
    scrollY: 1000,
    addEventListener: (name, fn) => listeners.set(name, fn),
    removeEventListener: (name) => listeners.delete(name),
    requestAnimationFrame: (fn) => { frame = fn; return 1; },
    cancelAnimationFrame: () => { frame = null; },
  };
  return { win, style, desktopQuery, motionQuery, listeners, flush: () => frame?.() };
}

test('desktop fallback follows page scroll and cleans up', () => {
  const f = fixture();
  const stop = setupDesktopStripFallback(f.win, { style: f.style });
  assert.equal(f.style.transform, 'translateX(-300px)');
  f.win.scrollY = 2000;
  f.listeners.get('scroll')();
  f.flush();
  assert.equal(f.style.transform, 'translateX(-600px)');
  stop();
  assert.equal(f.style.transform, '');
  assert.equal(f.listeners.has('scroll'), false);
});

test('native support, mobile, and reduced motion do not run fallback', () => {
  for (const options of [{ native: true }, { desktop: false }, { motion: false }]) {
    const f = fixture(options);
    setupDesktopStripFallback(f.win, { style: f.style });
    assert.equal(f.style.transform, '');
    assert.equal(f.listeners.has('scroll'), false);
  }
});

test('switching to mobile or reduced motion removes the fallback', () => {
  const f = fixture();
  setupDesktopStripFallback(f.win, { style: f.style });
  f.desktopQuery.change(false);
  assert.equal(f.style.transform, '');
  assert.equal(f.listeners.has('scroll'), false);
  f.desktopQuery.change(true);
  assert.equal(f.style.transform, 'translateX(-300px)');
  f.motionQuery.change(false);
  assert.equal(f.style.transform, '');
  assert.equal(f.listeners.has('scroll'), false);
});
