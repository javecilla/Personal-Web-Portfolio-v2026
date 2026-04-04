---
trigger: always_on
---

# Rule: Eleventy SSG Architecture

When generating pages, layouts, or components, adhere to these static generation standards.

## Layouts & Includes

- Utilize Nunjucks (`.njk`) or Liquid (`.liquid`) for templating.
- Isolate reusable UI components (e.g., headers, footers, project cards) into the `_includes` directory.
- Utilize Eleventy Navigation plugin for dynamic menu routing.

## Data Management

- Store global data in the `_data` directory.
- Utilize YAML frontmatter in markdown files to define page-specific metadata (title, description, permalink).
