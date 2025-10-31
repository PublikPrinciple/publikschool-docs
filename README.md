# Publik School CIVIK Hackathons Documentation

Publik School maintains this repository as the single source of truth for planning and delivering CIVIK Hackathons across the CivikStack ecosystem. The site is built with [Docus](https://docus.dev) and published as a document-driven knowledge base.

## Getting started

```bash
pnpm install
pnpm dev
```

> Ensure you are running Node.js 18.17 or newer (Node 20+ recommended) so the Nuxt and Docus toolchain matches production. Prefer `npm` or `yarn`? Install dependencies with your package manager of choice and replace the `pnpm` commands accordingly.

## Repository structure

- `content/` — Markdown sources that power the documentation site. The structure mirrors hackathon operations from principles to templates.
- `public/` — Static assets such as logos and downloadable resources.
- `openapi/` — Optional OpenAPI specifications for CIVIK services.
- `assets/` — Supporting imagery, diagrams, and other media referenced throughout the docs.
- `.github/` — Shared issue and pull request templates plus GitHub Actions workflows.

## Contributing

Please review [CONTRIBUTING.md](CONTRIBUTING.md) for style guides, contribution workflows, and local development tips.

## Deploying to Vercel

1. Connect this repository to a new Vercel project.
2. When prompted for build settings, keep the defaults or set:
   - **Framework Preset:** `Nuxt.js`
   - **Build Command:** `pnpm run generate`
   - **Output Directory:** `.output/public`
3. Trigger a deployment. Vercel reads `vercel.json` to ensure the correct build target and will publish the statically generated site.
4. Enable automatic deployments from your default branch so new commits rebuild the docs automatically.

Locally you can mirror the production build with:

```bash
pnpm run generate
pnpm run preview
```

## License

Documentation is released under the terms described in [LICENSE](LICENSE).
