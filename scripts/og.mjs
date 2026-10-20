// Renders the 1200×630 social images in src/assets/og/ with a local Google Chrome.
// Run `npm run og` after changing hero copy; the Pages build only copies the committed PNGs.
import { mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import { locales } from '../src/locales.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const chrome = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const asset = (file) => pathToFileURL(path.join(root, 'src', file)).href;
const esc = (value) => String(value).replace(/[&<>"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[char]));
const sizes = { en: 96, zh: 92, ja: 70, ko: 92, mn: 70 };
const lines = [['jp', '#22a45d', '#fff'], ['kr', '#3a74f0', '#fff'], ['cn', '#e5402f', '#fff'], ['hk', '#a066e8', '#fff'], ['mn', '#19a9de', '#0b0c0e'], ['fr', '#f5921f', '#0b0c0e']];

const page = (code, t) => `<!doctype html><html lang="${t.htmlLang}"><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0}
html,body{width:1200px;height:630px;overflow:hidden}
body{position:relative;background:#0b0c0e;color:#fff;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display","Helvetica Neue","PingFang SC","Hiragino Sans","Apple SD Gothic Neo",sans-serif;-webkit-font-smoothing:antialiased}
body::before{content:"";position:absolute;inset:0;background:radial-gradient(rgba(255,255,255,.12) 1px,transparent 1.5px) 0 0/28px 28px;-webkit-mask-image:radial-gradient(ellipse 60% 80% at 80% 40%,#000,transparent 75%)}
.glow{position:absolute;right:40px;top:40px;width:560px;height:560px;border-radius:50%;background:radial-gradient(circle,rgba(255,210,0,.2),transparent 62%)}
.copy{position:absolute;left:72px;top:64px;width:640px}
.kicker{display:flex;align-items:center;gap:14px;color:#9ca1a9;font:600 19px/1.3 ui-monospace,"SF Mono",Menlo,monospace}
.stn{display:flex;flex-direction:column;align-items:center;justify-content:center;width:52px;height:52px;border:4px solid #ffd200;border-radius:12px;background:#fff;color:#0b0c0e;font-family:ui-monospace,"SF Mono",Menlo,monospace;line-height:1}
.stn b{font-size:10px}.stn i{font-style:normal;font-size:19px;font-weight:800;margin-top:2px}
h1{margin-top:40px;font-size:${sizes[code]}px;line-height:${code === 'en' ? .96 : 1.1};letter-spacing:${code === 'en' ? '-.048em' : '-.03em'};font-weight:650}
h1 span{display:block}h1 span+span{color:#ffd200}
.lines{position:absolute;left:72px;bottom:64px;display:flex;gap:10px}
.lines span{display:grid;place-items:center;width:52px;height:34px;border-radius:7px;font:700 15px/1 ui-monospace,"SF Mono",Menlo,monospace;letter-spacing:.04em}
.url{position:absolute;left:470px;bottom:70px;color:#9ca1a9;font:600 22px/1 ui-monospace,"SF Mono",Menlo,monospace}
.phone{position:absolute;right:96px;top:58px;width:330px;padding:11px;border-radius:56px;background:linear-gradient(150deg,#4a4e55,#17191c 30%,#0d0e10 60%,#34373c);box-shadow:inset 0 0 0 1px rgba(255,255,255,.16),inset 0 0 0 5px #050506,0 40px 80px rgba(0,0,0,.6)}
.phone div{overflow:hidden;border-radius:45px;aspect-ratio:1197/2600}
.phone img{display:block;width:100%}
.island{position:absolute;left:50%;top:22px;width:96px;height:28px;margin-left:-48px;border-radius:99px;background:#000}
.brand{position:absolute;right:96px;bottom:0;}
</style><body><div class="glow"></div>
<div class="copy"><p class="kicker"><span class="stn"><b>CB</b><i>00</i></span>${esc(t.hero.kicker)}</p><h1><span>${esc(t.hero.title[0])}</span><span>${esc(t.hero.title[1])}</span></h1></div>
<div class="lines">${lines.map(([id, bg, fg]) => `<span style="background:${bg};color:${fg}">${id.toUpperCase()}</span>`).join('')}</div>
<p class="url">cardb.al</p>
<div class="phone"><div><img src="${asset('assets/screenshots/pro-wallet.jpg')}"></div><span class="island"></span></div>
</body></html>`;

const work = await mkdtemp(path.join(tmpdir(), 'cardbal-og-'));
const out = path.join(root, 'src/assets/og');
await mkdir(out, { recursive: true });
for (const [code, t] of Object.entries(locales)) {
  const html = path.join(work, `${code}.html`);
  await writeFile(html, page(code, t));
  execFileSync(chrome, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1', '--window-size=1200,630', '--allow-file-access-from-files', `--screenshot=${path.join(out, `${code}.png`)}`, pathToFileURL(html).href], { stdio: 'ignore' });
  console.log(`og/${code}.png`);
}
await rm(work, { recursive: true, force: true });
