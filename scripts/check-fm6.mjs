import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const record=JSON.parse(readFileSync('public/fm6.json','utf8'));
const html=readFileSync('public/fm6/index.html','utf8');
for(const field of ['name','summary','description','canonical','source','sourceCommit','creator','creatorUrl','poster','posterAlt','datePublished','dateModified','privacy','why'])assert.ok(record[field],field);
assert.match(record.sourceCommit,/^[0-9a-f]{40}$/);
assert.equal(new URL(record.canonical).pathname,'/fm6/');
assert.ok(html.includes(`rel="canonical" href="${record.canonical}"`));
for(const property of ['og:url','og:image','og:image:secure_url'])assert.match(html,new RegExp(`property="${property}" content="https://`));
assert.match(html,/name="twitter:card" content="summary_large_image"/);
const ld=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert.equal(ld['@graph'][0].url,record.canonical);
const withoutScripts=html.replace(/<script[\s\S]*?<\/script>/g,'');
for(const text of [record.name,record.creator,record.why,'A carrier adds directly','Save patch…','Your sound stays here','Part of the work'])assert.ok(withoutScripts.includes(text),text);
assert.ok(readFileSync('public/sitemap.xml','utf8').includes(`<loc>${record.canonical}</loc>`));
assert.ok(readFileSync('public/index.html','utf8').includes('href="/fm6/"'));
for(const path of ['public/shots/fm6-og.png','public/shots/fm6-touch.png']){
 const png=readFileSync(path);assert.equal(png.subarray(1,4).toString(),'PNG');
 const expected=path.includes('-og.')?[record.posterWidth,record.posterHeight]:[180,180];assert.deepEqual([png.readUInt32BE(16),png.readUInt32BE(20)],expected);
}
assert.equal(readFileSync('public/fm6/wasm/agent-synth.wasm').subarray(0,4).toString('hex'),'0061736d');
console.log('FM6 publication checks passed: record, no-JS guide, metadata, sitemap, poster, icons, runtime.');
