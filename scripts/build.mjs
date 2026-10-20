import { mkdir, rm, copyFile, cp, writeFile, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { locales } from '../src/locales.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
const appId = '6760978958';
const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));

const svg = (body, cls = '') => `<svg class="i${cls ? ` ${cls}` : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
const icons = {
  arrow: svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  arrowUp: svg('<path d="M12 19V5M6 11l6-6 6 6"/>'),
  exit: svg('<path d="M7 17 17 7M8 7h9v9"/>', 'exit'),
  globe: svg('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c4.6 4.9 4.6 13.1 0 18-4.6-4.9-4.6-13.1 0-18"/>'),
  chevron: svg('<path d="m7 10 5 5 5-5"/>'),
  plus: svg('<path d="M12 5v14M5 12h14"/>'),
  menu: svg('<path d="M4 8h16M4 16h16"/>'),
  nfc: svg('<path d="M8.5 8.2a5 5 0 0 1 0 7.6M12 5.5a9 9 0 0 1 0 13M15.6 3a13 13 0 0 1 0 18M5 11a1.6 1.6 0 0 1 0 2"/>'),
  info: svg('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.6v.1"/>'),
  phone: svg('<rect x="6.5" y="2.5" width="11" height="19" rx="2.6"/><path d="M10.5 5.5h3"/>'),
  cloud: svg('<path d="M7 18.5h10.5a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.6 9.2 4.7 4.7 0 0 0 7 18.5Z"/>'),
  file: svg('<path d="M13.5 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.5Z"/><path d="M13.5 3v5.5H19M9 13h6M9 16.5h4"/>'),
  pin: svg('<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z"/><circle cx="12" cy="10" r="2.4"/>'),
  code: svg('<path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5"/>')
};
const apple = '<svg class="apple" viewBox="0 0 24 28" fill="currentColor" aria-hidden="true" focusable="false"><path d="M17.6 4.5c1-1.2 1.7-2.8 1.5-4.5-1.5.1-3.2 1-4.3 2.2-1 1.1-1.8 2.8-1.5 4.4 1.6.1 3.2-.8 4.3-2.1ZM22.5 20.1c-.6 1.4-.9 2-1.7 3.3-1.1 1.6-2.6 3.7-4.5 3.7-1.7 0-2.1-1.1-4.4-1.1S9 27.2 7.4 27.1C5.5 27.1 4 25.2 3 23.6.1 19.2-.8 13.2 1 10.1 2.2 7.9 4.2 6.6 6.2 6.6c2.1 0 3.4 1.2 5.1 1.2 1.6 0 2.6-1.2 5.1-1.2 1.8 0 3.6 1 4.8 2.5-4.2 2.3-3.5 8.3 1.3 11Z"/></svg>';

// Region "lines": code, card standard and colour token. Order matches every locale's cards.regions.
const regions = [
  { code: 'jp', std: 'FeliCa' },
  { code: 'kr', std: 'KS X 6924' },
  { code: 'cn', std: 'T-Union', open: true },
  { code: 'hk', std: 'FeliCa' },
  { code: 'mn', std: 'KS X 6924' },
  { code: 'fr', std: 'Calypso' }
];
// Callouts on the wallet screenshot; y is the card row's position as a share of the screenshot height.
const annotations = [
  { code: 'KR', std: 'KS X 6924', y: 22.7 },
  { code: 'CN', std: 'T-Union', y: 50.1 },
  { code: 'MN', std: 'KS X 6924', y: 72.1 },
  { code: 'JP', std: 'FeliCa', y: 79.4 }
];
// Split-flap rows: card (13 cells), standard (9 cells), region.
const boardRows = [
  ['SUICA', 'FELICA', 'JP'], ['T-MONEY', 'KS X 6924', 'KR'], ['OCTOPUS', 'FELICA', 'HK'],
  ['PASMO', 'FELICA', 'JP'], ['SHANGHAI', 'T-UNION', 'CN'], ["LIGNES D'AZUR", 'CALYPSO', 'FR'],
  ['ICOCA', 'FELICA', 'JP'], ['CASHBEE', 'KS X 6924', 'KR'], ['U-MONEY', 'KS X 6924', 'MN'],
  ['RAKUTEN EDY', 'FELICA', 'JP'], ['BEIJING', 'T-UNION', 'CN'], ['EZL', 'KS X 6924', 'KR'],
  ['KITACA', 'FELICA', 'JP'], ['SHENZHEN', 'T-UNION', 'CN'], ['NANACO', 'FELICA', 'JP'],
  ['MANACA', 'FELICA', 'JP'], ['GUANGZHOU', 'T-UNION', 'CN'], ['WAON', 'FELICA', 'JP'],
  ['SUGOCA', 'FELICA', 'JP'], ['TOICA', 'FELICA', 'JP'], ['HAYAKAKEN', 'FELICA', 'JP'],
  ['NIMOCA', 'FELICA', 'JP'], ['SAPICA', 'FELICA', 'JP'], ['IRUCA', 'FELICA', 'JP']
];
// Values transcribed from the matching real screenshots.
const chapters = [
  { shot: 'edy', rows: [['family', 'Rakuten Edy'], ['balance', '¥3,314'], ['standard', 'FeliCa'], ['issued', '2022-01-19']] },
  { shot: 'climate', rows: [['family', 'T-money'], ['card', 'Climate Card'], ['standard', 'KS X 6924'], ['type', 'Unknown (0xB5)']] },
  { shot: 'octopus', rows: [['family', 'Octopus'], ['balance', 'HK$2.2'], ['standard', 'FeliCa · 8008'], ['raw', 'Tag · Decoded Balance']] }
];
const sourceRows = [['FeliCa', '0003', 'Suica · PASMO · ICOCA'], ['FeliCa', '8008', 'Octopus'], ['KS X 6924', 'ISO 7816', 'T-money · EZL · Cashbee · U-Money']];
const tripRegions = ['jp', 'kr', 'cn', 'hk', 'mn'];
// App Store listing screenshots (1197×2600) and CardBal 2.4 captures (1206×2622, `pro-` prefix).
const screenshots = ['edy', 'climate', 'octopus', 'pro-wallet', 'pro-rides', 'pro-map', 'pro-atlas', 'pro-detail'];
const proShots = ['pro-rides', 'pro-map', 'pro-atlas', 'pro-detail'];
const shotSize = (name) => name.startsWith('pro-') ? [1206, 2622] : [1197, 2600];

// Runs before first paint: marks JS support and sends "/" to a remembered or browser language.
const boot = `document.documentElement.classList.add('js');if(location.pathname==='/'){var s=${JSON.stringify(Object.keys(locales))},p=null;try{p=localStorage.getItem('cardbal-language')}catch(e){}if(s.indexOf(p)<0){p=null;var l=navigator.languages||[navigator.language];for(var i=0;i<l.length&&!p;i++){var c=String(l[i]||'').split('-')[0].toLowerCase();if(s.indexOf(c)>-1)p=c}}if(p&&p!=='en')location.replace('/'+p+'/'+location.search+location.hash)}`;
const bootHash = createHash('sha256').update(boot).digest('base64');

const storeUrl = (t) => `https://apps.apple.com/${t.store}/app/cardbal/id${appId}`;
const storeButton = (t, cls = '') => `<a class="store${cls ? ` ${cls}` : ''}" href="${storeUrl(t)}">${apple}<span><small>${esc(t.appStore[0])}</small><strong>${esc(t.appStore[1])}</strong></span></a>`;
const stn = (number) => `<span class="stn" aria-hidden="true"><b>CB</b><i>${number}</i></span>`;
const kicker = (number, text) => `<p class="kicker">${stn(number)}<span>${esc(text)}</span></p>`;
const title = ([first, second], cls = 't2') => `<span>${esc(first)}</span> <span class="${cls}">${esc(second)}</span>`;
const shot = (name, alt, { priority = false, sizes = '(max-width: 960px) 270px, 340px', cls = '' } = {}) => {
  const [width, height] = shotSize(name);
  return `<img${cls ? ` class="${cls}"` : ''} src="/assets/screenshots/${name}-900.jpg" srcset="/assets/screenshots/${name}-640.jpg 640w, /assets/screenshots/${name}-900.jpg 900w, /assets/screenshots/${name}.jpg ${width}w" sizes="${sizes}" width="${width}" height="${height}" alt="${esc(alt)}" ${priority ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;
};
const phone = (screen, { cls = '', extra = '' } = {}) => `<div class="phone${cls ? ` ${cls}` : ''}"><div class="phone-screen">${screen}</div><span class="phone-island" aria-hidden="true"></span>${extra}</div>`;
const flaps = (text, cells, cls) => `<span class="flaps ${cls}">${[...text.padEnd(cells)].slice(0, cells).map((char) => `<span class="f">${char === ' ' ? '' : esc(char)}</span>`).join('')}</span>`;
const languageLinks = (current) => Object.entries(locales).map(([code, t]) => `<li><a href="/${code}/" lang="${t.htmlLang}" hreflang="${t.htmlLang}" data-language="${code}"${code === current ? ' aria-current="page"' : ''}>${esc(t.name)}</a></li>`).join('');
const navTargets = ['read', 'pro', 'cards', 'service-mode', 'faq'];
// Keeps brand names and standards from breaking across lines in visible text (attributes are untouched).
const typeset = (html) => html.replace(/>([^<]+)</g, (match, text) => `>${text
  .replace(/\b([TU])-(money|Money|Union)\b|\bNFC-(capable)/g, (term) => term.replace('-', '\u2011'))
  .replace(/Lignes d’Azur|KS X 6924|iOS 16|Apple Watch|Rakuten Edy|ISO 7816/g, (term) => term.replace(/ /g, '\u00a0'))}<`);
const navLinks = (t) => t.nav.map((label, i) => `<a href="#${navTargets[i]}" data-nav="${navTargets[i]}">${esc(label)}</a>`).join('');

// Line art for the two reading methods.
const artPhysical = `<svg viewBox="0 0 280 170" fill="none" aria-hidden="true" focusable="false"><g class="art-phone"><rect x="95" y="62" width="90" height="150" rx="18"/><path d="M128 74h24"/></g><g class="art-waves"><path d="M118 52a30 30 0 0 1 44 0"/><path d="M106 40a48 48 0 0 1 68 0"/><path d="M94 28a66 66 0 0 1 92 0"/></g><g class="art-card" transform="rotate(-9 140 30)"><rect x="82" y="-12" width="116" height="72" rx="9"/><rect x="96" y="6" width="20" height="15" rx="3"/><path d="M96 42h40M150 42h30"/></g></svg>`;
const artWallet = `<svg viewBox="0 0 280 170" fill="none" aria-hidden="true" focusable="false"><g class="art-phone" transform="rotate(-24 92 120)"><rect x="47" y="40" width="88" height="150" rx="18"/><rect class="art-fill" x="59" y="70" width="64" height="40" rx="6"/><path d="M80 52h22"/></g><g class="art-phone" transform="rotate(24 188 120)"><rect x="145" y="40" width="88" height="150" rx="18"/><path d="M178 52h22M160 76h44M160 90h56M160 104h34"/></g><g class="art-waves"><path d="M126 30a20 20 0 0 1 28 0"/><path d="M118 20a32 32 0 0 1 44 0"/><path d="M110 10a44 44 0 0 1 60 0"/></g></svg>`;

function render(code) {
  const t = locales[code];
  const store = storeUrl(t);
  const h = t.hero;
  const b = t.board;
  const r = t.read;
  const m = t.more;
  const c = t.cards;
  const w = t.ways;
  const f = t.faq;

  const annotationsMarkup = `<ul class="phone-notes" aria-hidden="true">${annotations.map((a, i) => `<li class="note r-${a.code.toLowerCase()}" style="--y:${a.y}%;--i:${i}"><span class="badge">${a.code}</span><span class="note-std">${a.std}</span><span class="note-line"></span></li>`).join('')}</ul>`;

  const hero = `<section class="hero" aria-labelledby="hero-title">
    <div class="wrap hero-grid">
      <div class="hero-copy">
        ${kicker('00', h.kicker)}
        <h1 class="display" id="hero-title">${title(h.title, 'hl')}</h1>
        <p class="lede">${esc(h.body)}</p>
        <div class="cta-row">${storeButton(t)}<a class="link-arrow" href="#cards">${esc(h.secondary)}${icons.arrow}</a></div>
        <p class="hero-meta">${esc(h.meta)}</p>
        <a class="pill-link" href="#service-mode"><span class="pill-icon">${icons.nfc}</span><span>${esc(h.service)}</span>${icons.arrow}</a>
      </div>
      <div class="hero-visual">
        <div class="hero-glow" aria-hidden="true"></div>
        ${phone(shot('pro-wallet', h.alt, { priority: true, sizes: '(max-width: 960px) 270px, 340px' }), { cls: 'hero-phone', extra: annotationsMarkup })}
      </div>
    </div>
  </section>`;

  const board = `<section class="board-band" aria-labelledby="board-title">
    <div class="wrap">
      <div class="board-layout">
        <div class="board-intro">
          <p class="board-label" id="board-title"><span class="live" aria-hidden="true"></span>${esc(b.label)}</p>
          <p class="board-note">${esc(b.note)}</p>
          <p class="sr-only">${esc(b.sr)}</p>
        </div>
        <div class="board" data-board data-rows="${esc(JSON.stringify(boardRows))}" aria-hidden="true">
          <span class="board-col">${esc(b.columns[0])}</span><span class="board-col board-std">${esc(b.columns[1])}</span><span class="board-col">${esc(b.columns[2])}</span>
          ${boardRows.slice(0, 3).map(([card, std, region]) => `<div class="board-row" data-board-row>${flaps(card, 13, 'board-card')}${flaps(std, 9, 'board-std')}<span class="board-region r-${region.toLowerCase()}"><span class="badge">${region}</span></span></div>`).join('')}
        </div>
      </div>
      <ul class="stats">${b.stats.map(([value, label]) => `<li class="reveal"><strong>${esc(value)}</strong><span>${esc(label)}</span></li>`).join('')}</ul>
    </div>
  </section>`;

  const chapterMarkup = chapters.map((chapter, i) => {
    const text = r.chapters[i];
    return `<li class="chapter${i === 0 ? ' is-active' : ''}" data-chapter data-caption="${esc(text.shot)}">
      <div class="chapter-body">
        <span class="chapter-stop" aria-hidden="true">0${i + 1}</span>
        <h3>${esc(text.title)}</h3>
        <p>${esc(text.body)}</p>
        <dl class="readout">${chapter.rows.map(([key, value]) => `<div><dt>${esc(r.keys[key])}</dt><dd>${esc(value)}</dd></div>`).join('')}</dl>
      </div>
      <figure class="chapter-shot">${phone(shot(chapter.shot, text.alt, { sizes: '270px' }))}<figcaption>${esc(text.shot)}</figcaption></figure>
    </li>`;
  }).join('');
  const read = `<section class="section paper read" id="read" aria-labelledby="read-title">
    <div class="wrap">
      <header class="section-head reveal">${kicker('01', r.kicker)}<h2 class="h2" id="read-title">${title(r.title)}</h2><p class="section-intro">${esc(r.intro)}</p></header>
      <div class="read-layout">
        <ol class="chapters">${chapterMarkup}</ol>
        <div class="read-stage" data-stage aria-hidden="true">
          <div class="stage-inner">
            ${phone(chapters.map((chapter, i) => shot(chapter.shot, '', { sizes: '340px', cls: i === 0 ? 'is-active' : '' })).join(''), { cls: 'stage-phone' })}
            <p class="stage-caption"><span data-stage-index>01</span><span class="stage-total">/ 0${chapters.length}</span><span data-stage-caption>${esc(r.chapters[0].shot)}</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>`;

  const p = t.pro;
  const pro = `<section class="section night pro" id="pro" aria-labelledby="pro-title">
    <div class="wrap">
      <header class="section-head reveal">${kicker('02', p.kicker)}<h2 class="h2" id="pro-title">${title(p.title)}</h2><p class="section-intro">${esc(p.intro)}</p></header>
      <ol class="pro-grid">${proShots.map((name, i) => `<li class="pro-item reveal">
        <figure>${phone(shot(name, p.items[i].alt, { sizes: '(max-width: 680px) 72vw, (max-width: 1180px) 300px, 280px' }))}
          <figcaption><span class="pro-no">0${i + 1}</span><strong>${esc(p.items[i].title)}</strong><span>${esc(p.items[i].body)}</span></figcaption>
        </figure>
      </li>`).join('')}</ol>
      <p class="pro-note">${icons.info}<span>${esc(p.note)}</span></p>
    </div>
  </section>`;

  const j = m.journeys;
  const more = `<section class="section paper more" id="more" aria-labelledby="more-title">
    <div class="wrap">
      <header class="section-head reveal">${kicker('03', m.kicker)}<h2 class="h2" id="more-title">${title(m.title)}</h2></header>
      <div class="bento">
        <article class="tile tile-journeys reveal">
          <div class="tile-text"><h3>${esc(j.title)}</h3><p>${esc(j.body)}</p></div>
          <div class="journeys-art" aria-hidden="true">
            <div class="lcd">
              <div class="lcd-head"><span class="lcd-label">${esc(j.next)}</span><strong>${esc(j.stops[2])}</strong><span class="r-jp"><span class="badge">JP</span></span></div>
              <div class="lcd-route"><span class="lcd-track"><span class="lcd-train"></span></span><ol>${j.stops.map((stop, i) => `<li${i === 2 ? ' class="is-next"' : ''}>${esc(stop)}</li>`).join('')}</ol></div>
            </div>
            <ul class="trips">${j.routes.map((route, i) => `<li class="r-${tripRegions[i]}"><span class="badge">${tripRegions[i].toUpperCase()}</span><span class="trip-city">${esc(j.cities[i])}</span><span class="trip-route">${esc(route)}</span></li>`).join('')}</ul>
          </div>
        </article>
        <article class="tile tile-collection reveal">
          <div class="tile-text"><h3>${esc(m.collection.title)}</h3><p>${esc(m.collection.body)}</p></div>
          <div class="fan" aria-hidden="true">${['icoca', 'pasmo', 'tmoney', 'suica'].map((name) => `<img src="/assets/${name}.png" alt="" width="1200" height="760" loading="lazy" decoding="async">`).join('')}</div>
        </article>
        <article class="tile tile-device reveal">
          <div class="tile-text"><h3>${esc(m.device.title)}</h3><p>${esc(m.device.body)}</p></div>
          <ol class="flow">${m.device.labels.map((label, i) => `<li><span class="flow-icon">${[icons.phone, icons.cloud, icons.file][i]}</span><span>${esc(label)}</span></li>`).join('')}</ol>
        </article>
        <article class="tile tile-reports reveal">
          <span class="tile-icon">${icons.pin}</span>
          <div class="tile-text"><h3>${esc(m.reports.title)}</h3><p>${esc(m.reports.body)}</p></div>
          <a class="link-arrow" href="https://cardbal.ieb.app/">${esc(m.reports.link)}${icons.arrow}</a>
        </article>
        <article class="tile tile-source reveal">
          <span class="tile-icon">${icons.code}</span>
          <div class="tile-text"><h3>${esc(m.source.title)}</h3><p>${esc(m.source.body)}</p></div>
          <dl class="code-table">${sourceRows.map(([std, sys, cards]) => `<div><dt>${esc(std)}</dt><dd><span>${esc(sys)}</span>${esc(cards)}</dd></div>`).join('')}</dl>
          <a class="link-arrow" href="https://github.com/iebb/TransitICReader">${esc(m.source.link)}${icons.arrow}</a>
        </article>
      </div>
    </div>
  </section>`;

  const network = `<section class="section night network" id="cards" aria-labelledby="cards-title">
    <div class="wrap">
      <header class="section-head reveal">${kicker('04', c.kicker)}<h2 class="h2" id="cards-title">${title(c.title)}</h2><p class="section-intro">${esc(c.intro)}</p></header>
      <div class="lines">${regions.map((region, i) => {
        const data = c.regions[i];
        return `<article class="line line-${region.code} r-${region.code} reveal">
          <header class="line-head"><span class="badge">${region.code.toUpperCase()}</span><h3>${esc(data.name)}</h3><span class="line-std">${region.std}</span></header>
          <ol class="stations">${data.cards.map((card, k) => `<li${region.open && k === data.cards.length - 1 ? ' class="open"' : ''}>${esc(card)}</li>`).join('')}</ol>
          <p class="line-detail">${esc(data.detail)}</p>
        </article>`;
      }).join('')}</div>
      <p class="network-note">${icons.info}<span>${esc(c.note)}</span></p>
    </div>
  </section>`;

  const steps = (list) => `<ol class="way-steps">${list.map(([name, body], i) => `<li><span class="step-no">${i + 1}</span><div><h4>${esc(name)}</h4><p>${esc(body)}</p></div></li>`).join('')}</ol>`;
  const ways = `<section class="section paper ways" id="ways" aria-labelledby="ways-title">
    <div class="wrap">
      <header class="section-head reveal">${kicker('05', w.kicker)}<h2 class="h2" id="ways-title">${title(w.title)}</h2><p class="section-intro">${esc(w.intro)}</p></header>
      <div class="ways-grid">
        <article class="way reveal" id="physical"><header class="way-head"><span class="way-letter">A</span><h3>${esc(w.physical.label)}</h3></header><div class="way-art">${artPhysical}</div>${steps(w.physical.steps)}</article>
        <article class="way way-wallet reveal" id="service-mode"><header class="way-head"><span class="way-letter">B</span><h3>${esc(w.wallet.label)}</h3></header><div class="way-art">${artWallet}</div>${steps(w.wallet.steps)}<p class="way-note">${icons.info}<span>${esc(w.wallet.note)}</span></p><a class="link-arrow way-link" href="${esc(w.wallet.linkUrl)}">${esc(w.wallet.link)}${icons.arrow}</a></article>
      </div>
    </div>
  </section>`;

  const faq = `<section class="section paper faq" id="faq" aria-labelledby="faq-title">
    <div class="wrap faq-layout">
      <header class="faq-head reveal">${kicker('06', f.kicker)}<h2 class="h2" id="faq-title">${esc(f.title)}</h2><a class="link-arrow" href="https://cardbal.ieb.app/">${esc(f.reports)}${icons.arrow}</a></header>
      <div class="faq-list">${f.items.map(([question, answer], i) => `<details class="faq-item"><summary><span class="faq-no">Q${String(i + 1).padStart(2, '0')}</span><span class="faq-q">${esc(question)}</span><span class="faq-icon">${icons.plus}</span></summary><p>${esc(answer)}</p></details>`).join('')}</div>
    </div>
  </section>`;

  const end = `<section class="cta" aria-labelledby="end-title">
    <div class="wrap cta-grid">
      <div class="cta-copy reveal">
        ${kicker('07', t.end.kicker)}
        <h2 class="cta-title" id="end-title">${title(t.end.title)}</h2>
        <p class="cta-body">${esc(t.end.body)}</p>
        ${storeButton(t, 'store-dark')}
        <p class="cta-meta">${esc(t.end.meta)}</p>
      </div>
      <div class="sign reveal" aria-hidden="true">
        <div class="sign-top"><span class="sign-arrow">${icons.exit}</span><span class="sign-code">CB<b>07</b></span></div>
        <img src="/assets/icon-180.png" width="180" height="180" alt="" loading="lazy" decoding="async">
        <p class="sign-name">App Store</p>
        <p class="sign-sub">CardBal · iPhone</p>
      </div>
    </div>
  </section>`;

  const footer = `<footer class="footer">
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-brand"><a class="brand" href="/${code}/"><img src="/assets/icon-96.png" width="32" height="32" alt=""><span>CardBal</span></a><p>${esc(t.footer.tagline)}</p></div>
        <nav aria-label="CardBal"><h2 class="footer-title">CardBal</h2><ul>${t.nav.map((label, i) => `<li><a href="#${navTargets[i]}">${esc(label)}</a></li>`).join('')}<li><a href="${store}">${esc(t.download)}</a></li></ul></nav>
        <nav aria-label="${esc(t.footer.resources)}"><h2 class="footer-title">${esc(t.footer.resources)}</h2><ul><li><a href="https://docs.kitta.co/privacy-policy/cardbal/">${esc(t.footer.privacy)}</a></li><li><a href="https://cardbal.ieb.app/">${esc(t.footer.reports)}</a></li><li><a href="https://github.com/iebb/TransitICReader">${esc(t.footer.source)}</a></li><li><a href="https://kitta.co/">Kitta ↗</a></li></ul></nav>
        <nav aria-label="${esc(t.language)}"><h2 class="footer-title">${esc(t.footer.languages)}</h2><ul class="footer-langs">${languageLinks(code)}</ul></nav>
      </div>
      <div class="footer-legal"><p>© 2026 Kitta Ltd</p><p>${esc(t.footer.legal)}</p><a class="to-top" href="#top">${esc(t.footer.top)}${icons.arrowUp}</a></div>
    </div>
    <div class="footer-mark" aria-hidden="true">CardBal</div>
  </footer>`;

  return `<!doctype html>
<html lang="${t.htmlLang}" data-locale="${code}">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(t.title)}</title><meta name="description" content="${esc(t.description)}">
  <meta name="theme-color" content="#0b0c0e"><meta name="apple-itunes-app" content="app-id=${appId}">
  <script>${boot}</script>
  <link rel="canonical" href="https://cardb.al/${code}/">${Object.entries(locales).map(([lang, l]) => `<link rel="alternate" hreflang="${l.htmlLang}" href="https://cardb.al/${lang}/">`).join('')}<link rel="alternate" hreflang="x-default" href="https://cardb.al/">
  <meta property="og:type" content="website"><meta property="og:site_name" content="CardBal"><meta property="og:title" content="${esc(t.title)}"><meta property="og:description" content="${esc(t.description)}"><meta property="og:url" content="https://cardb.al/${code}/"><meta property="og:image" content="https://cardb.al/assets/og/${code}.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:locale" content="${t.ogLocale}">
  <meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(t.title)}"><meta name="twitter:description" content="${esc(t.description)}"><meta name="twitter:image" content="https://cardb.al/assets/og/${code}.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png"><link rel="apple-touch-icon" href="/assets/icon-180.png">
  <link rel="preload" as="image" href="/assets/screenshots/pro-wallet-900.jpg" imagesrcset="/assets/screenshots/pro-wallet-640.jpg 640w, /assets/screenshots/pro-wallet-900.jpg 900w, /assets/screenshots/pro-wallet.jpg 1206w" imagesizes="(max-width: 960px) 270px, 340px">
  <link rel="stylesheet" href="/assets/site.css"><script src="/assets/site.js" defer></script>
</head>
${typeset(`<body id="top">
  <a class="skip-link" href="#main">${esc(t.skip)}</a>
  <header class="site-header">
    <div class="wrap header-bar">
      <a class="brand" href="/${code}/" aria-label="CardBal"><img src="/assets/icon-96.png" width="30" height="30" alt=""><span>CardBal</span></a>
      <nav class="nav" aria-label="${esc(t.navLabel)}">${navLinks(t)}</nav>
      <div class="header-actions">
        <details class="lang" data-menu><summary aria-label="${esc(t.language)}">${icons.globe}<span class="lang-name">${esc(t.name)}</span><span class="lang-code">${code.toUpperCase()}</span>${icons.chevron}</summary><ul class="menu-panel lang-menu">${languageLinks(code)}</ul></details>
        <a class="btn btn-signal" href="${store}">${esc(t.download)}</a>
        <details class="menu" data-menu><summary aria-label="${esc(t.menu)}">${icons.menu}</summary><nav class="menu-panel menu-nav" aria-label="${esc(t.navLabel)}">${navLinks(t)}</nav></details>
      </div>
    </div>
    <div class="progress" aria-hidden="true"><span></span></div>
  </header>
  <main id="main">
  ${hero}
  ${board}
  ${read}
  ${pro}
  ${more}
  ${network}
  ${ways}
  ${faq}
  ${end}
  </main>
  ${footer}
</body>`)}
</html>
`;
}

function renderNotFound() {
  const t = locales.en;
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CardBal — 404</title><meta name="robots" content="noindex"><meta name="theme-color" content="#0b0c0e">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32.png"><link rel="stylesheet" href="/assets/site.css">
</head>
<body class="not-found-page">
  <main class="not-found wrap">
    <a class="brand" href="/"><img src="/assets/icon-96.png" width="32" height="32" alt=""><span>CardBal</span></a>
    <div class="nf-sign"><span class="stn" aria-hidden="true"><b>CB</b><i>404</i></span><p class="nf-code">404</p></div>
    <h1 class="display">${esc(t.notFound)}</h1>
    <ul class="nf-links">${Object.entries(locales).map(([code, l]) => `<li><a class="link-arrow" href="/${code}/" lang="${l.htmlLang}">${esc(l.back)}${icons.arrow}</a></li>`).join('')}</ul>
  </main>
</body>
</html>
`;
}

// Every locale must have the same keys and list lengths as English.
function checkShape(reference, value, where) {
  if (Array.isArray(reference)) {
    if (!Array.isArray(value) || value.length !== reference.length) throw new Error(`Incomplete list at ${where}`);
    reference.forEach((item, i) => checkShape(item, value[i], `${where}[${i}]`));
  } else if (reference && typeof reference === 'object') {
    if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error(`Missing object at ${where}`);
    const expected = Object.keys(reference).sort().join(',');
    if (Object.keys(value).sort().join(',') !== expected) throw new Error(`Incomplete keys at ${where}`);
    for (const key of Object.keys(reference)) checkShape(reference[key], value[key], `${where}.${key}`);
  } else if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`Empty text at ${where}`);
  }
}
for (const [code, t] of Object.entries(locales)) checkShape(locales.en, t, code);
if (locales.en.cards.regions.length !== regions.length || locales.en.read.chapters.length !== chapters.length || locales.en.pro.items.length !== proShots.length || locales.en.nav.length !== navTargets.length) throw new Error('Locale lists do not match the page structure');

await rm(output, { recursive: true, force: true });
await mkdir(path.join(output, 'assets'), { recursive: true });
for (const code of Object.keys(locales)) {
  await mkdir(path.join(output, code), { recursive: true });
  await writeFile(path.join(output, code, 'index.html'), render(code));
}
await writeFile(path.join(output, 'index.html'), render('en'));
await writeFile(path.join(output, '404.html'), renderNotFound());
await cp(path.join(root, 'src/assets'), path.join(output, 'assets'), { recursive: true, filter: (source) => !source.endsWith('manifest.json') && !source.endsWith('.DS_Store') });
for (const asset of ['site.css', 'site.js']) await copyFile(path.join(root, 'src', asset), path.join(output, 'assets', asset));
await copyFile(path.join(root, 'src/icon.png'), path.join(output, 'assets/icon.png'));
await copyFile(path.join(root, 'src/social.png'), path.join(output, 'assets/social.png'));
await writeFile(path.join(output, '_headers'), `/*\n  X-Content-Type-Options: nosniff\n  X-Frame-Options: DENY\n  Referrer-Policy: strict-origin-when-cross-origin\n  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()\n  Content-Security-Policy: default-src 'self'; script-src 'self' 'sha256-${bootHash}'; style-src 'self' 'unsafe-inline'; img-src 'self'; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'; upgrade-insecure-requests\n/assets/*\n  Cache-Control: public, max-age=3600\n`);
await writeFile(path.join(output, '_redirects'), '/zh-cn/ /zh/ 301\n/zh-hans/ /zh/ 301\n');
await writeFile(path.join(output, 'robots.txt'), 'User-agent: *\nAllow: /\nSitemap: https://cardb.al/sitemap.xml\n');
await writeFile(path.join(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${Object.keys(locales).map((code) => `<url><loc>https://cardb.al/${code}/</loc>${Object.entries(locales).map(([lang, t]) => `<xhtml:link rel="alternate" hreflang="${t.htmlLang}" href="https://cardb.al/${lang}/"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="https://cardb.al/"/></url>`).join('')}</urlset>`);
const hash = createHash('sha256');
for (const file of ['src/locales.mjs', 'src/site.css', 'src/site.js', 'scripts/build.mjs']) hash.update(await readFile(path.join(root, file)));
for (const name of screenshots) hash.update(await readFile(path.join(root, 'src/assets/screenshots', `${name}.jpg`)));
await writeFile(path.join(output, 'build-info.json'), JSON.stringify({ site: 'CardBal', hosting: 'Cloudflare Pages', locales: Object.keys(locales), revision: hash.digest('hex').slice(0, 16) }, null, 2) + '\n');
console.log(`Built ${Object.keys(locales).length} languages into ${output}. Static assets only; no Functions or Worker bundle.`);
