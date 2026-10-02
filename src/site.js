(() => {
  const supported = ['en', 'zh', 'ja', 'ko', 'mn'];
  document.querySelectorAll('[data-language]').forEach(link => {
    link.addEventListener('click', () => {
      try { localStorage.setItem('cardbal-language', link.dataset.language); } catch { /* Storage is optional. */ }
    });
  });
  if (location.pathname === '/') {
    let preferred;
    try { preferred = localStorage.getItem('cardbal-language'); } catch { /* Use browser language instead. */ }
    if (!supported.includes(preferred)) {
      preferred = (navigator.languages || [navigator.language]).map(lang => lang.split('-')[0]).find(lang => supported.includes(lang));
    }
    if (preferred && preferred !== 'en') {
      location.replace(`/${preferred}/${location.search}${location.hash}`);
      return;
    }
  }

  const panels = [...document.querySelectorAll('[data-screen-panel]')];
  const tabs = [...document.querySelectorAll('[data-screen]')];
  tabs.forEach(button => button.addEventListener('click', () => {
    tabs.forEach(tab => tab.setAttribute('aria-pressed', String(tab === button)));
    panels.forEach(panel => { panel.hidden = panel.dataset.screenPanel !== button.dataset.screen; });
  }));

  document.querySelectorAll('.language-picker').forEach(picker => {
    document.addEventListener('click', event => { if (!picker.contains(event.target)) picker.open = false; });
    picker.addEventListener('keydown', event => { if (event.key === 'Escape') picker.open = false; });
  });
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => { element.classList.add('will-reveal'); observer.observe(element); });
  }
})();
