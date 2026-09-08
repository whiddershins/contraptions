import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';
const source=resolve(process.env.FM6_SOURCE_DIR||'../agent-synth-magic');
process.env.PLAYWRIGHT_BROWSERS_PATH ||= join(source,'.cache/playwright');
const {chromium,expect}=await import(pathToFileURL(join(source,'node_modules/@playwright/test/index.mjs')).href);
const base=process.env.FM6_TEST_URL||'http://127.0.0.1:8788';
const browser=await chromium.launch({headless:true});
try {
 const page=await browser.newPage({viewport:{width:1440,height:1000}});const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base+'/fm6/');
 await expect(page.locator('.fm6-intro')).toContainText('A six-operator synthesizer by Sarth Calhoun');
 await expect(page.locator('.operator-explanation')).toHaveCount(6);
 await expect(page.locator('.operator-suggestion')).toHaveCount(6);
 await page.getByRole('button',{name:'Enable audio',exact:true}).click();
 const latch=page.getByRole('button',{name:'Keyboard 1 sustain latch',exact:true});await latch.click();
 const c=page.locator('#keyboard').getByRole('button',{name:'Play C4',exact:true});await c.click();
 await expect(page.locator('#output-level')).not.toHaveText('−∞ dB');
 await c.click();await expect(page.locator('#active-note')).toHaveText('—');
 await page.getByRole('button',{name:'Save patch…',exact:true}).click();
 await page.getByRole('dialog').getByRole('textbox',{name:'Patch name',exact:true}).fill('Contraptions check');
 await page.getByRole('button',{name:'Save new patch',exact:true}).click();
 await page.reload();await expect(page.locator('#patch-name')).toHaveValue('Contraptions check');
 const wasm=await page.request.get(base+'/fm6/wasm/agent-synth.wasm');expect(wasm.status()).toBe(200);expect(wasm.headers()['content-type']).toContain('application/wasm');
 const json=await page.locator('script[type="application/ld+json"]').textContent();expect(JSON.parse(json)['@graph'][0].name).toBe('FM / 6');
 await page.screenshot({path:'/tmp/fm6-contraptions-desktop.png'});
 await page.setViewportSize({width:390,height:844});await page.goto(base+'/fm6/');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.screenshot({path:'/tmp/fm6-contraptions-mobile.png'});
 const nojs=await browser.newContext({javaScriptEnabled:false});const textPage=await nojs.newPage();await textPage.goto(base+'/fm6/');
 await expect(textPage.locator('.fm6-guide')).toContainText('A carrier adds directly');await expect(textPage.locator('.fm6-guide')).toContainText('Saved patches are specific');
 await nojs.close();
 await page.goto(base+'/');await expect(page.locator('a[href="/fm6/"]').first()).toBeVisible();
 if(process.argv.includes('--poster')){
  await page.setViewportSize({width:1200,height:630});await page.goto(base+'/fm6/');await page.selectOption('#preset','0');
  await page.addStyleTag({content:'.fm6-intro,.fm6-guide{display:none!important}.instrument{padding:24px 28px!important}.masthead{padding-bottom:20px!important}'});
  await page.screenshot({path:resolve('public/shots/fm6-og.png')});
  await page.setViewportSize({width:180,height:180});await page.setContent('<html><body style="margin:0;background:#155e52;width:180px;height:180px;display:grid;place-items:center;color:#f2f1eb;font:140px sans-serif">∿</body></html>');await page.screenshot({path:resolve('public/shots/fm6-touch.png')});
 }
 expect(errors).toEqual([]);console.log('PASS: actual subpath WASM audio, latch toggle, named save/reload, desktop/mobile, no-JS copy, JSON-LD, shelf link.');
} finally {await browser.close();}
