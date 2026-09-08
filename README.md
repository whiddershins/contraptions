# Contraptions
Small machines by Sarth Calhoun. Used at Third Wall Studio.

- Canonical: https://contraptions.bookofsarth.com

- Source: https://github.com/whiddershins/contraptions

- Sarth: https://sarth.net

- Studio: https://thirdwallstudio.com

- Hosted on Cloudflare Workers



Index of cards: still, dense blurb, links. Each tool lives at a path.

## FM / 6

[Play FM / 6](https://contraptions.bookofsarth.com/fm6/) — six operators, two keyboards, a sound you can take apart.

`public/fm6.json` is the release record. `scripts/build-fm6.mjs` generates the page, shelf card, text guide, sitemap and ledger entry, and builds the runtime from the exact private synth revision in that record. Set `FM6_SOURCE_DIR` to a clean matching synth checkout (default: `../agent-synth-magic`). The source checkout needs its pinned toolchain and `npm ci`. Wrangler runs this build before deploying; missing source fails before upload, preserving the live release. Runtime JS/WASM stay out of git.

The synth source remains private. Publishing this page does not change its repository visibility or send social posts.

Run `node scripts/check-fm6.mjs` for publishing checks. With Wrangler running on port 8788, `FM6_SOURCE_DIR=../agent-synth-magic node scripts/check-fm6-browser.mjs` checks actual audio, latch behavior, named saves, no-JS copy and mobile layout. `FM6_TEST_URL` selects another test origin. Add `--poster` only when intentionally refreshing the sharing images.
