(() => {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const canObserve = 'IntersectionObserver' in window;

  document.querySelectorAll('[data-language]').forEach(link => {
    link.addEventListener('click', () => {
      try { localStorage.setItem('cardbal-language', link.dataset.language); } catch { /* Storage is optional. */ }
    });
  });

  // Language and mobile menus are <details>; close them on outside click, Escape, or in-page navigation.
  const menus = [...document.querySelectorAll('details[data-menu]')];
  document.addEventListener('click', event => {
    menus.forEach(menu => { if (menu.open && !menu.contains(event.target)) menu.open = false; });
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    menus.forEach(menu => {
      if (!menu.open) return;
      menu.open = false;
      menu.querySelector('summary').focus();
    });
  });
  menus.forEach(menu => {
    menu.addEventListener('toggle', () => { if (menu.open) menus.forEach(other => { if (other !== menu) other.open = false; }); });
    menu.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => { menu.open = false; }));
  });

  // Reading progress along the header's yellow line.
  let queued = false;
  const updateProgress = () => {
    queued = false;
    const max = root.scrollHeight - window.innerHeight;
    root.style.setProperty('--progress', max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)).toFixed(4) : '0');
  };
  const queueProgress = () => { if (!queued) { queued = true; requestAnimationFrame(updateProgress); } };
  window.addEventListener('scroll', queueProgress, { passive: true });
  window.addEventListener('resize', queueProgress);
  updateProgress();

  if (!canObserve) return;

  const navLinks = [...document.querySelectorAll('[data-nav]')];
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('is-active', link.dataset.nav === entry.target.id));
    });
  }, { rootMargin: '-45% 0px -54% 0px' });
  new Set(navLinks.map(link => link.dataset.nav)).forEach(id => {
    const target = document.getElementById(id);
    if (target) spy.observe(target);
  });

  // Scroll story: the sticky phone follows whichever chapter crosses the middle of the viewport.
  const stage = document.querySelector('[data-stage]');
  const chapters = [...document.querySelectorAll('[data-chapter]')];
  if (stage && chapters.length) {
    const shots = [...stage.querySelectorAll('.phone-screen img')];
    const index = stage.querySelector('[data-stage-index]');
    const caption = stage.querySelector('[data-stage-caption]');
    const activate = active => {
      chapters.forEach((chapter, i) => chapter.classList.toggle('is-active', i === active));
      shots.forEach((shot, i) => shot.classList.toggle('is-active', i === active));
      index.textContent = String(active + 1).padStart(2, '0');
      caption.textContent = chapters[active].dataset.caption;
    };
    const story = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) activate(chapters.indexOf(entry.target)); });
    }, { rootMargin: '-50% 0px -50% 0px' });
    chapters.forEach(chapter => story.observe(chapter));
  }

  if (reduceMotion.matches) return;

  root.classList.add('reveal-ready');
  const reveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      reveal.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(element => reveal.observe(element));

  // Split-flap departure board: cycles through supported cards while it is on screen.
  const board = document.querySelector('[data-board]');
  if (!board) return;
  const rows = JSON.parse(board.dataset.rows);
  const rowElements = [...board.querySelectorAll('[data-board-row]')];
  const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const flip = (cell, target, delay) => {
    const goal = target === ' ' ? '' : target;
    if (cell.textContent === goal) return;
    let turns = 2 + Math.floor(Math.random() * 4);
    setTimeout(function turn() {
      cell.classList.remove('flip');
      void cell.offsetWidth;
      cell.classList.add('flip');
      cell.textContent = turns > 0 ? glyphs[Math.floor(Math.random() * glyphs.length)] : goal;
      if (turns-- > 0) setTimeout(turn, 60);
    }, delay);
  };
  let page = 0;
  let timer;
  const advance = () => {
    page += 1;
    rowElements.forEach((row, r) => {
      const [card, standard, region] = rows[(page * rowElements.length + r) % rows.length];
      row.querySelectorAll('.flaps').forEach((group, g) => {
        const text = (g === 0 ? card : standard).padEnd(group.children.length);
        [...group.children].forEach((cell, i) => flip(cell, text[i], r * 140 + i * 38));
      });
      const badge = row.querySelector('.board-region');
      setTimeout(() => {
        badge.className = `board-region r-${region.toLowerCase()}`;
        badge.firstElementChild.textContent = region;
      }, r * 140 + 420);
    });
  };
  let onScreen = false;
  const sync = () => {
    if (onScreen && !document.hidden) { if (!timer) timer = setInterval(advance, 4200); }
    else { clearInterval(timer); timer = undefined; }
  };
  new IntersectionObserver(entries => { onScreen = entries[entries.length - 1].isIntersecting; sync(); }).observe(board);
  document.addEventListener('visibilitychange', sync);
})();
