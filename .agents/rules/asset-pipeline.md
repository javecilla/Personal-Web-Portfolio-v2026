---
trigger: always_on
---

# Rule: Sass & JS Bundling

When modifying styles or client-side scripts, follow the project's build step constraints.

## Styling (Sass)

- Maintain a modular Sass architecture (partials, variables, mixins).
- Ensure media queries are handled via `include-media`.
- Do not write plain CSS in the `_site` output folder. All styling must originate from `src/scss`.

## JavaScript (Rollup)

- Write ES6+ modules.
- Avoid heavy external dependencies. Rely on Vanilla JS for DOM manipulation.
