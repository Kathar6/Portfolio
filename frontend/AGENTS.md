AGENTS
======

This file documents commands, conventions and expectations for agentic coding agents working in this repository.
Place: repository root — `AGENTS.md`.

Key paths referenced:
- `frontend/package.json`
- `frontend/tsconfig.json`
- `.eslintrc.json` (repo root)

1) Build / lint / test commands
--------------------------------

- Install dependencies (recommended):
  - `npm install` or `yarn install` executed in `frontend/`

- Local development (Next.js):
  - `npm run dev` / `yarn dev` (runs `next dev`) in `frontend/`

- Build for production:
  - `npm run build` / `yarn build` (runs `next build`) in `frontend/`

- Start production server:
  - `npm run start` / `yarn start` (runs `next start`) in `frontend/`

- Linting:
  - `npm run lint` / `yarn lint` (runs `next lint`) in `frontend/`
  - Repo extends `next/core-web-vitals` via `.eslintrc.json` at repository root.

- Tests:
  - There are currently no test scripts configured in `frontend/package.json`.
  - Recommended test setups:
    1. Fast, modern: add `vitest` + `@testing-library/react`.
       - Install: `npm i -D vitest @testing-library/react @testing-library/jest-dom`.
       - Example scripts to add in `frontend/package.json`:
         - `"test": "vitest"`
         - `"test:watch": "vitest --watch"`
       - Run a single test file: `npx vitest run path/to/file.test.tsx` or `vitest path/to/file.test.tsx`.
    2. Jest: add `jest` + `ts-jest` + `@testing-library/react`.
       - Install: `npm i -D jest ts-jest @types/jest @testing-library/react`.
       - Run a single test file: `npx jest path/to/file.test.tsx --runInBand`.

- How to run a single test (generic guidance):
  - If using `vitest`: `vitest path/to/file.test.[jt]s` or `npx vitest run path/to/file.test.[jt]s`.
  - If using `jest`: `npx jest path/to/file.test.[jt]s -t "test name"` or `npx jest path/to/file.test.[jt]s --runInBand`.
  - If using `npm test -- <args>` pattern, pass the file path as the argument after `--`.

2) Editor / tooling / cursor / copilot rules
-------------------------------------------

- Cursor rules: none detected in `frontend/.cursor/rules/` or `frontend/.cursorrules`.
  - If you add Cursor rules, place them in `.cursor/rules/` and document here.

- GitHub Copilot instructions: none detected in `.github/copilot-instructions.md`.
  - If your organization provides Copilot policy files, add a brief summary here.

3) Style & code guidelines for agents
------------------------------------

Apply these guidelines when creating or modifying code. Be conservative with changes — prefer small, focused commits when asked to push.

- Language & framework
  - Frontend is Next.js (v14) with TypeScript. Default file extensions: `.ts`, `.tsx`.
  - Target ES modules (`module: esnext`) and `jsx: preserve` (see `frontend/tsconfig.json`).

- Formatting
  - Use Prettier-style formatting: 2 spaces for indentation, single blank line between top-level declarations, and trailing semicolons optional but consistent.
  - Keep lines under ~100 characters when possible.
  - Run formatting before committing; add a formatter if not present (Prettier recommended).

- Imports
  - Use absolute/alias imports defined in `frontend/tsconfig.json` when appropriate:
    - `@/` -> `app/` (application code)
    - `@components/*`, `@hooks/*`, `@styles/*`, `@assets/*`, `@constants/*`, `@contexts/*`
  - Group imports in this order: builtin modules -> external packages -> aliases -> relative imports.
    - Separate groups with a single blank line.
  - Use named imports where available to keep bundle size predictable:
    - Prefer `import { useState } from 'react'` over importing default wrapper objects unless the package exports a default.

- Types & TypeScript
  - `strict: true` is enabled. Always add explicit types for exported functions and components.
  - For React components, prefer React.FC only when you need `children`; otherwise type props as a plain object:
    - Good: `function Card(props: CardProps) { ... }`
  - Use discriminated unions for variant types and `as const` for constant arrays/schemas when appropriate.
  - Avoid `any`. If necessary, comment why and scope `any` narrowly.
  - Keep inference local — annotate public function signatures but prefer inference for short local variables.

- Naming conventions
  - Files and folders: kebab-case for filenames and directories inside `app/` (e.g., `page.tsx`, `signup-form.tsx`) unless following Next.js conventions (`page.tsx`, `layout.tsx`).
  - Components: PascalCase (e.g., `UserAvatar.tsx`).
  - Hooks: `use` prefix, camelCase (e.g., `useAuth.ts`).
  - Constants: SCREAMING_SNAKE or camelCase for config objects — prefer `const someConfig = {...}` and export named constants.
  - Types / interfaces: PascalCase, prefix interfaces with `I` is optional — prefer `User`, `AuthState`.

- Error handling and logging
  - Fail early: validate inputs and return typed errors.
  - Use `try/catch` around async code that can throw; prefer returning `Result`-like objects for library boundaries.
  - Avoid swallowing errors. Log useful contextual information (but never log secrets).
  - For Next.js server code (API/edge), return proper HTTP statuses and structured JSON error payloads.

- React specifics
  - Prefer function components with hooks.
  - Keep components small and single-responsibility. Move non-UI logic into hooks or utility modules.
  - Use `useCallback` / `useMemo` when memoization yields measurable benefits — don't pre-optimize.
  - Prefer controlled components for forms when interactions are non-trivial.

- CSS / styling
  - Project uses TailwindCSS (see `frontend/package.json` devDependencies).
  - Prefer utility classes; create small, reusable component classes where needed.
  - Keep style tokens in shared files under `app/styles/` and reference them via aliases when available.

- Accessibility
  - Use semantic HTML (button/input/form/label) and accessible patterns for dialogs and focus traps.
  - Follow WCAG basics: keyboard navigation, focus indicators and ARIA where necessary.

- Performance
  - Prefer lazy-loading and code-splitting for heavy components.
  - Avoid large inline objects or recreating stable values on every render.

- Tests
  - If tests are added, aim for small, deterministic unit tests. Prefer testing behavior over implementation.
  - Use MSW (Mock Service Worker) or similar for network-related tests in component/integration tests.

4) Commit & PR guidance for agents
----------------------------------

- If asked to commit, make focused commits with clear messages, 1-2 sentences describing why the change was made.
- Do not amend commits, do not force push.
- If pre-commit hooks exist and fail, surface the error and fix the cause, then create a new commit.

5) What to do when you are blocked
----------------------------------

- Check `frontend/package.json`, `frontend/tsconfig.json`, and repository root `.eslintrc.json` for configuration.
- If missing a configuration (tests, formatter, lint rules), propose a small change and include exact commands to install and configured files.

Appendix: quick reference commands (run in `frontend/`)
- Install: `npm install` or `yarn`
- Dev: `npm run dev`
- Build: `npm run build`
- Start: `npm run start`
- Lint: `npm run lint`
- Add Vitest (recommended tests): `npm i -D vitest @testing-library/react @testing-library/jest-dom`

If you want, I can add a minimal `test` script with `vitest` or generate a starter `jest` config and example test file.
