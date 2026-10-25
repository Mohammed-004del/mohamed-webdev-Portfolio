# Mohammed Mahmood — Portfolio

Personal portfolio for Mohammed Mahmood, Frontend Developer and Co-Founder at ORVEN.

## Stack
React 18, TypeScript, Vite 5, Tailwind CSS, shadcn/ui and React Router. Existing dependency versions are retained. Motion uses CSS and IntersectionObserver, with reduced-motion support.

## Development

```sh
npm ci
npm run dev
npm run build
npx tsc --noEmit -p tsconfig.app.json
```

## Selected work
- `/work/spiky/`: Spiky coaching platform case study, with a direct public-site link and verified project-lead attribution. Its repository remains private.
- `/work/al-araby-oils/`: AL-Araby Oils case study focused on frontend implementation, product presentation, and cart interactions.

Shared project content lives in `src/data/projects.ts`. Descriptions are grounded in repository documentation, the approved ORVEN project brief, and inspection of the public interfaces. The Oils challenge is framed as interface analysis, without invented client research, delivery claims, or business metrics.

## Publishing
GitHub Pages serves the `gh-pages` branch. Run `npm run build` and `npm run deploy` after committing and pushing source changes. The postbuild script emits direct-entry HTML files with project metadata for both case studies, a sitemap and `.nojekyll`. React Router and Vite preserve the `/mohamed-webdev-Portfolio/` base path. The existing 404 redirect supports unknown client-side paths.
