// Samyak Goel · portfolio
// Three moments, one scroll loop: the ridge recedes, the statement lights up, the numbers count once.

(() => {
  const root = document.documentElement;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('js');

  // Statement: wrap each word so it can light up as it is read.
  const statement = document.getElementById('statement');
  let words = [];
  if (statement) {
    const text = statement.textContent.trim().split(/\s+/);
    statement.textContent = '';
    text.forEach((word, i) => {
      const span = document.createElement('span');
      span.className = 'w';
      span.textContent = word;
      statement.append(span, i < text.length - 1 ? ' ' : '');
    });
    words = [...statement.querySelectorAll('.w')];
    if (reduced) words.forEach((w) => w.classList.add('lit'));
  }

  // Scroll loop: hero parallax and statement progress.
  const hero = document.querySelector('.hero');
  const copy = document.getElementById('hero-copy');
  const ridges = [...document.querySelectorAll('.ridge')];
  let ticking = false;

  const frame = () => {
    ticking = false;
    const vh = window.innerHeight;

    if (hero && !reduced) {
      const p = Math.min(Math.max(window.scrollY / hero.offsetHeight, 0), 1);
      ridges.forEach((r) => {
        r.style.transform = `translate3d(0, ${(p * parseFloat(r.dataset.depth) * vh * 0.5).toFixed(1)}px, 0)`;
      });
      copy.style.transform = `translate3d(0, ${(p * vh * 0.18).toFixed(1)}px, 0) scale(${(1 - p * 0.08).toFixed(3)})`;
      copy.style.opacity = String(Math.max(1 - p * 1.6, 0));
    }

    if (words.length && !reduced) {
      const rect = statement.getBoundingClientRect();
      // Lit from when the block's top reaches 80% of the viewport until its bottom reaches 45%.
      const start = vh * 0.8;
      const end = vh * 0.45 - rect.height;
      const p = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);
      const n = Math.round(p * words.length);
      words.forEach((w, i) => w.classList.toggle('lit', i < n));
    }
  };

  const onScroll = () => {
    if (!ticking) { ticking = true; requestAnimationFrame(frame); }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  frame();

  // Numbers count up once, from their real value shown by default.
  const counters = [...document.querySelectorAll('[data-count]')];

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        countUp(entry.target);
      });
    }, { threshold: 0.5 });
    if (!reduced) counters.forEach((c) => { c.textContent = '0'; io.observe(c); });
  }

  function countUp(el) {
    const target = parseInt(el.dataset.count, 10);
    const duration = target > 1 ? 1400 : 600;
    const t0 = performance.now();
    const step = (t) => {
      const k = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - k, 4);
      el.textContent = String(Math.round(eased * target));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
})();
