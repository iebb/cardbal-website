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

  const preview = document.querySelector('[data-preview]');
  const panels = [...document.querySelectorAll('[data-panel]')];
  const tabs = [...document.querySelectorAll('[data-card]')];
  const scan = document.querySelector('[data-scan]');
  const status = document.querySelector('[data-scan-status]');
  let scanTimer;
  function resetScan() {
    clearTimeout(scanTimer);
    preview?.classList.remove('is-scanning');
    if (scan) scan.disabled = false;
    if (status) status.querySelector('span').textContent = status.dataset.ready;
  }
  tabs.forEach(button => button.addEventListener('click', () => {
    resetScan();
    tabs.forEach(tab => tab.setAttribute('aria-pressed', String(tab === button)));
    panels.forEach(panel => { panel.hidden = panel.dataset.panel !== button.dataset.card; });
    preview.dataset.card = button.dataset.card;
  }));
  scan?.addEventListener('click', () => {
    preview.classList.add('is-scanning');
    scan.disabled = true;
    status.querySelector('span').textContent = status.dataset.reading;
    scanTimer = setTimeout(resetScan, 1200);
  });

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
