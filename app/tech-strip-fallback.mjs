/** Restore scroll-linked motion on desktop browsers without CSS scroll timelines. */
export function setupDesktopStripFallback(win, strip) {
  if (win.CSS?.supports('animation-timeline: scroll(root block)')) return () => {};

  const desktop = win.matchMedia('(min-width: 768px)');
  const motion = win.matchMedia('(prefers-reduced-motion: no-preference)');
  let listening = false;
  let frame = null;

  const update = () => {
    frame = null;
    const root = win.document.documentElement;
    const range = root.scrollHeight - root.clientHeight;
    const progress = range > 0 ? Math.min(1, Math.max(0, win.scrollY / range)) : 0;
    strip.style.transform = `translateX(${-600 * progress}px)`;
  };
  const onScroll = () => {
    if (frame === null) frame = win.requestAnimationFrame(update);
  };
  const sync = () => {
    const active = desktop.matches && motion.matches;
    if (active && !listening) {
      listening = true;
      win.addEventListener('scroll', onScroll, { passive: true });
      update();
    } else if (!active && listening) {
      listening = false;
      win.removeEventListener('scroll', onScroll);
      if (frame !== null) win.cancelAnimationFrame(frame);
      frame = null;
      strip.style.removeProperty('transform');
    }
  };

  desktop.addEventListener('change', sync);
  motion.addEventListener('change', sync);
  win.addEventListener('resize', sync);
  sync();
  return () => {
    desktop.removeEventListener('change', sync);
    motion.removeEventListener('change', sync);
    win.removeEventListener('resize', sync);
    if (listening) win.removeEventListener('scroll', onScroll);
    if (frame !== null) win.cancelAnimationFrame(frame);
    strip.style.removeProperty('transform');
  };
}
