# Core Directives: Personal Portfolio v2026

You are operating within a static site generator (SSG) environment. Your primary objective is to output semantic HTML, modular CSS, and vanilla JavaScript bundled via Rollup.

## Tech Stack Alignment

- **SSG:** Eleventy (11ty) v0.12.
- **Styling:** Sass (compiled via npm scripts).
- **JavaScript:** Vanilla JS, bundled with Rollup, transpiled with Babel.
- **Animation & UI:** Locomotive Scroll v4, Splitting.js.
- **SEO:** @quasibit schema and sitemap plugins.

## Operational Mandates

1. **No Frontend Frameworks:** Do not generate React, Vue, or Tailwind code. Strictly use Nunjucks/Liquid templates for markup and Sass for styling.
2. **Build Pipeline Awareness:** Asset compilation is handled by `npm-run-all`. Always ensure JS changes are compatible with the Rollup entry points.
3. **Performance First:** Minimize client-side JavaScript. Keep the payload lightweight for optimal Core Web Vitals.
