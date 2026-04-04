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

## Terminal Execution Protocol (Git Bash / Windows)

1. **Shell Environment:** Default to Git Bash syntax. Do NOT use interactive pagers.
2. **Prohibited Commands:** NEVER use `more`, `less`, or any command that requires pagination or user keystrokes.
   - Use `cat` instead of `type` or `more` to output file contents.
3. **Command Wrapping:** - Use `env GCM_INTERACTIVE=never` for Git commands to prevent credential popups.
   - If using `cmd /c`, ensure the command inside is non-interactive.
4. **Mandatory Non-Interactive Flags:** Always use `-y`, `--yes`, `-f`, or `--force` to bypass confirmation prompts.
5. **Infinite Loop Prevention:** If a command output exceeds 1000 lines, truncate the output instead of using a pager.
