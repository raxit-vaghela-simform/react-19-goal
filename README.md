# React 19 Feature Explorer

A Vite + React 19 app that demonstrates new React features with short, focused demos. Each feature page includes a description, an example walkthrough, and a concise source-code snippet so users can see how the implementation works.

## Tech stack
- React 19
- Vite
- MUI (Material UI)
- Toolpad Core Dashboard Layout
- React Router
- TypeScript (mixed with JSX where needed)

## Getting started
```bash
npm install
npm run dev
```

Open the app at the URL shown by Vite (usually http://localhost:5173).

## Scripts
- `npm run dev` - start the dev server
- `npm run build` - build for production
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint

## Project structure
```
src/
  api/                  # API helpers
  components/           # Reusable UI components
    dashboard/          # Toolpad dashboard layout + app title
    features/           # FeatureDoc (details + code snippet)
  config/               # Theme + navigation
  features/             # Individual feature demos
  pages/                # Route pages (dashboard + feature pages)
  utils/                # Feature metadata
```

## Feature catalog
Each feature lives in `src/features` and is described in `src/utils/featureData.ts`.

Current demos:
- use() Hook
- Form Actions + useActionState
- useOptimistic
- useFormStatus
- Refs as Props
- React Compiler
- startTransition
- useDeferredValue
- Automatic Batching
- useId
- useSyncExternalStore
- useInsertionEffect

## How feature pages work
- `src/pages/FeaturePage.tsx` loads the demo component for the selected feature and passes feature metadata into `FeatureDoc`.
- `src/components/features/FeatureDoc.tsx` renders the title, descriptions, example notes, and a `Source code` block.
- `src/utils/featureData.ts` is the single source of truth for:
  - title, description, and example text
  - component path
  - code snippet used in the UI

## Adding a new feature
1) Create a new demo component in `src/features`.
2) Add a feature entry in `src/utils/featureData.ts` with:
   - `id`, `title`, `navTitle`
   - `description`, `detailedDescription`, `exampleDescription`
   - `componentPath`
   - `codeSnippet` (short, flow-accurate code)
3) Add the route mapping in `src/pages/FeaturePage.tsx` loader map.

## Notes
- The sidebar navigation is driven by `src/config/navigation.ts`.
- The app theme is configured in `src/config/theme.ts` and supports light/dark palettes.

## Deployment
```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to your hosting provider (Netlify, Vercel static, S3, etc.).
