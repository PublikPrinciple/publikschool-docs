# Contributing to Publik School CIVIK Hackathons Docs

Thanks for helping improve the Publik School documentation. This project is built with [Nuxt Content](https://content.nuxt.com) via the [Docus](https://docus.dev) starter and is entirely markdown-driven.

## Local development

1. Install dependencies with your preferred package manager.
   ```bash
   pnpm install
   # or
   npm install
   ```
2. Start the local development server.
   ```bash
   pnpm dev
   ```
3. Visit `http://localhost:3000` to preview the site.

Hot reloading is enabled by default. Markdown updates will appear instantly in the browser.

## Writing guidelines

- **Audience first** — Write for organizers, facilitators, and contributors preparing for CIVIK hackathons.
- **Plain language** — Use short sentences, action-oriented headings, and avoid jargon unless it is defined in the [overview/glossary](content/overview/glossary.md).
- **Source of truth** — Link to canonical policies and standards across the CivikStack ecosystem whenever possible.
- **Inclusive examples** — Highlight accessible practices and equity considerations in every relevant section.

## File organization

- Place documentation inside the `content/` directory and mirror the structure described in the repository outline.
- Store diagrams, images, and downloadable templates in `assets/` or `public/` and reference them with relative links.
- Add OpenAPI specifications to `openapi/` in either YAML or JSON format.

## Submitting changes

1. Create a feature branch.
2. Commit logically grouped changes with descriptive messages.
3. Open a pull request that summarizes the context, highlights, and testing steps.
4. Ensure all linting or build checks succeed before requesting review.

If you have questions, please open an issue or reach out to the Publik School maintainers.
