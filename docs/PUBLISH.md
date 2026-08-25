# Publish artifact

A live URL is not published. Published means a person, a crawler, an LLM, and a social unfurl can all take the thing in without guessing, and every owned surface that names it points at the others.

This is the gate for **everything** that ships: a Contraption, a page, a repo, a dump, a release, a post. Do not skip it because the demo works.

Facts in public copy. No hedges, no “WIP,” no “to be clear.”

Two hard contracts, equal:

1. **Discoverability** — chrome, poster, OG, Twitter card, JSON-LD, no-JS HTML, sitemap.
2. **Context graph** — what it is, where it came from, who helped, what influenced it, what it sits with, where to go next. Not a related-links footer.

An isolated announcement has not shipped.

## The eight audiences

A ship fails unless all eight can use it.

1. **A person** — one glance names it, says what to do, who made it, where to go next.
2. **A text-only crawler** — curl with no JS already has the name, summary, creator, how-to, privacy, context, and links. If that payload only exists after JavaScript, the page failed.
3. **Search** — Google/Bing can index the canonical URL, show a sane snippet, and follow real `<a href>` links.
4. **An LLM / answer engine** — extracted text alone is enough to identify, summarize, and place the work. Names, not pronouns. Context is on the page.
5. **A social unfurl** — X, Facebook, LinkedIn, Discord, Slack, iMessage get a deliberate large card (title, description, poster). No platform guessing.
6. **A knowledge graph** — JSON-LD that agrees with the visible page: the object, the person, the source, the edges, `sameAs` identities, dates.
7. **An archive** — stable HTTPS canonical, dates, sitemap entry, not an orphan workers.dev URL. Someone five years later can still place it.
8. **The rest of the work** — bidirectional links to shelf, source, sarth.net, related things. One-way links are unfinished.

## One record, many projections

Do not hand-author the same facts in five places. That is how posters, OG, and context get forgotten.

Each ship has one record (`contraption.json`, `release.json`, page frontmatter) containing at least:

- `name`, `slug`, `summary` (one line), `description`
- `canonical` (HTTPS, no trailing-slash dual)
- `live` (if different)
- `source` (repo / Worker)
- `creator` (Sarth Calhoun), `creatorUrl` (https://sarth.net)
- `poster`, `posterAlt` (absolute public URL)
- `datePublished`, `dateModified`
- `privacy` / where processing happens (when relevant)
- `features` or equivalent factual payload
- `sameAs` / related URLs
- `edges`: typed context graph (see below)

HTML `<head>`, JSON-LD, index card, visible Context block, sitemap, RSS, llms.txt, README chrome, and syndication copy are **projections of that record**. Build/CI fails if a required field is missing, if canonical or poster does not 200, if OG URLs are relative, if JSON-LD does not parse, if the no-JS HTML lacks the name/summary/creator/context, or if the sitemap omits the canonical.

## Context graph (hard)

Every artifact answers all of these. Empty answers are allowed only when they are true (no collaborators means no collaborator edges, not invented people).

- What it is
- Why it exists
- Canonical URL
- What larger body it is part of (`partOf`: Contraptions, Burlap, Book of Sarth, a record, a site)
- Related work of Sarth’s (`relatedTo`)
- Who else materially contributed (`collaborator`), with what, and a link they would want
- What it is built with when that is load-bearing (`builtWith`: Kyma, Svelte, a library, a model)
- Prior art (`priorArt`): the specific idea, tool, paper, product, or artwork, named, linked, with one clause for the relationship
- Inspiration (`inspiredBy`) when it is not the same as prior art: the actual work, not a homepage, and the quality borrowed
- Where to go next: source, write-up, parent, later version

Keep prior art and inspiration distinct when both exist. Explain the relationship in a clause. Do not dump a link. Do not invent lineage. Do not use hedge templates (“this differs from X primarily in”). State the fact of the relationship.

A short post is still a knowledge object. Minimum that survives syndication:

- what it is
- why it matters
- canonical URL
- one real connection to other work
- collaborator credit if there is one
- one precedent or inspiration if it actually explains the thing

The platform post is not the canonical explanation. It points at the page that holds the full graph.

Visible on the page (labels can vary): Part of, Related, Built with / collaborators, Prior art, Inspired by, Source. Same edges in JSON-LD (`isPartOf`, `citation`/`mentions`, `contributor`, `isBasedOn`, `codeRepository`).

Edge shape: `type`, `name`, `url`, optional one-sentence `note`, optional `creator`, optional `date`.

Small set of types only: `partOf`, `relatedTo`, `priorArt`, `inspiredBy`, `collaborator`, `builtWith`, `source`, `precededBy`, `followedBy`. Do not grow a taxonomy of unused predicates.

Density: named things, relationships, dates, people, tools, links. Not marketing adjectives.

Provenance: dates stay. Original collaborators and influences stay when the work evolves. Newer versions link to older ones. Do not silently rewrite history.

Five years later someone can still tell: what it was, who made it, who else, what body of work, what came before, what influenced it, what is related, where the source and the deeper page live, where to continue.

Canonical homes: `sarth.net` is the citable identity page, `contraptions.bookofsarth.com` is the shelf of things built, `bookofsarth.com` is the art object. Do not treat the art object as the research catalogue.

## Surfaces (always name them)

- **Canonical** — the URL that should last
- **Live** — where it runs today
- **Source** — repo, Worker, Grok Build folder
- **Ledger** — the running list of what shipped
- **Poster** — the image every unfurl uses

Missing any of these: not ready to syndicate.

## Page chrome (in the document, not only in a README)

- Unique `<title>` and `<meta name="description">`
- `<link rel="canonical">` HTTPS, one slash form, matching `og:url`
- Visible `<h1>`
- Visible links to source (GitHub when public) and https://sarth.net
- Honest hosting line (Cloudflare Workers, GitHub Pages, etc.). Do not invent Durable Objects or other infra that is not there
- Open Graph: `og:type` `og:site_name` `og:title` `og:description` `og:url` `og:image` `og:image:secure_url` `og:image:type` `og:image:width` `og:image:height` `og:image:alt`
- Twitter: `twitter:card=summary_large_image` `twitter:site=@noisegroove` `twitter:title` `twitter:description` `twitter:image` `twitter:image:alt`
- JSON-LD for the object plus Person (Sarth Calhoun, url sarth.net, sameAs X/GitHub as relevant) plus the context edges
- Semantic HTML: `<main>`, real lists, real links, `<figure>`/`<figcaption>` for demonstrations
- Favicon (and Apple touch icon on sites)

Poster: deliberate image of the work, not generic branding. Social master about `1200 × 630`, high-res source kept. Meaningful filename, alt text, public, correct MIME, absolute URL, looks like itself when cropped small. Video gets a poster frame plus a text description; VideoObject JSON-LD if the clip is the point.

## Crawlable body (the thing fetchers actually get)

First 1–2 paragraphs identify the object by name, what it is, who made it, and the canonical home. Not “this” / “it.” Named density, not adjectives.

Then the factual payload, as HTML that exists with JS off:

- What it does / how to use it
- Why it exists
- Major features
- Inputs / outputs (when relevant)
- Privacy / local vs server
- Browser or platform
- Where it is used (Third Wall Studio when true)
- Dates
- Source and write-up links
- **Context graph** rendered as real HTML (part of, related, built with, prior art, inspired by, source)

Do not stuff invisible text. Make the visible page informative. An SPA whose body is an empty `#app` has not shipped.

Optional and useful: FAQ in the questions people and agents actually ask, keyboard/controls, limitations, changelog.

## README (when there is source)

Order is load-bearing. Gesture sentence, then URLs and hosting, then:

1. How to use
2. What it is
3. Why
4. Context (required: the graph, named and linked, with a clause for each relationship)

Then privacy / local / architecture / license. All rights reserved unless a license is actually chosen.

Serve the mds on the site (`/<slug>.md`, TECH.md, DESIGN.md). A markdown file that only lives in interop-data-store is a note.

## Graph (JSON-LD)

JSON-LD must agree with visible content. Type it honestly:

- Contraption / tool: `WebApplication` and/or `SoftwareApplication`
- Site: `WebSite` + `Person`
- Essay: `Article`
- Music: `MusicRecording` / `MusicAlbum`
- Video: `VideoObject`

Include `name` `description` `url` `image` `author`/`creator`/`publisher` `datePublished` `dateModified` `isAccessibleForFree` `codeRepository` or equivalent, `sameAs` for Sarth’s public identities, plus context edges as `isPartOf` `citation` `mentions` `contributor` `isBasedOn`.

## Linkage

Every surface that names the work points at the others. Bidirectional. Every link adds genuine context. No SEO dumps.

- Shelf / index card ↔ canonical ↔ GitHub ↔ sarth.net
- README ↔ live ↔ shelf
- GitHub About homepage = canonical
- Social posts use the canonical, not a workers.dev orphan
- Related work cross-links when the relationship is real
- Human-readable link text
- No orphan pages; sitemap catches what nav misses
- robots.txt allows the crawlers we want; sitemap listed there
- `llms.txt` (and a search endpoint when one exists) advertised from the page

## Search and robots

HTTP 200. No accidental `noindex`/`nofollow`. Canonical is the only form. Redirect leftovers. Internal links are real `<a href>`. Images have fetchable URLs. Page is in the XML sitemap with accurate `loc` and `lastmod` when useful.

## Syndication

Telling people is part of publishing. Owned/broadcast surfaces every time (X @noisegroove, and the accounts that actually exist for that medium). Reddit/HN/forums are human-placement, queued, not auto-posted.

The post carries the short knowledge object (what / why / canonical / one connection / credit / one precedent if it explains). After a meta change, delete and re-paste the URL; do not trust a compose window that fetched the empty page.

## Type extras

**Contraption / interactive:** local-vs-server stated; demo video has poster; index card on the Contraptions shelf; Worker or host named honestly.

**Music / release:** native player only where we host masters; official iframe for stores; one song.link; credits in our voice (MM3 equal trio; Lulu composer-performer).

**Identity page (sarth.net / sarth.org):** present-tense current work plus the real credits; JSON-LD Person; sameAs Wikipedia/Wikidata/X/GitHub when those are the public identities.

**Post:** the caption is not the page. The page must still unfurl. Attach the poster/video. Use the canonical URL. Keep the short knowledge object.

## Voice

State the fact, celebrate the work, stop. No disclaimers. Context is lineage, not a uniqueness flex. Public source is a showroom: people can look, they cannot ship it as theirs, unless a license says otherwise.

## Definition of done

A thing is published only when:

1. A person can understand it from the page.
2. A text-only fetch can understand it, including context.
3. A search engine can index the canonical URL with a sane snippet.
4. An LLM can identify, summarize, and place it from extracted text.
5. A social network produces the poster we chose, not a guess.
6. JSON-LD parses and matches the page, including the edges.
7. Canonical, poster, source, and sarth.net all 200 and point at each other.
8. The record exists; the projections were generated from it; the omission checks pass.
9. The context graph is on the page and in the record. Five years later the nine placement questions still have answers.
10. Someone has been told it exists, with the canonical URL, as a short knowledge object.

If the demo is up and this gate is not, it is not shipped.
