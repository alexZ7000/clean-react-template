# Clean React Template

A small React starter that shows Clean Architecture with one working task feature. It uses React, TypeScript, Vite, Tailwind CSS, Bun, and Biome.

## Start

Requires Bun 1.4.2 or newer.

```sh
bun install --frozen-lockfile
bun run dev
```

Other checks:

```sh
bun run typecheck
bun run lint
bun run test
bun run build
bun run audit
```

The task list uses an in-memory repository, so tasks reset when the page reloads. This keeps the example focused on the architecture boundary.

## Architecture

```text
src/
  app/                         Composition root and routing
  features/tasks/
    domain/                    Task model and pure business rules
    application/               Use cases and repository port
    infrastructure/            In-memory repository adapter
    presentation/              React page
```

Dependencies point inward: presentation and infrastructure may import application and domain; application may import domain; domain imports none of the other layers. The composition root selects the concrete repository and ID generator. To use another synchronous data source, implement `TaskRepository` in `infrastructure/` and replace the adapter in `app/composition.ts`. An asynchronous API would require an asynchronous port and use case while keeping the same dependency direction.

The example covers title validation, task creation, listing, and a React form. Its tests exercise both the use case and the page.

For deployment, configure a Content Security Policy in the hosting server's response headers for the actual host and connected services. The starter HTML does not embed a host-specific policy, so Vite's development server and hot reload can use their configured port.

## Security note

`bun run audit` checks the resolved dependency tree. On 2026-11-18, the npm advisory feed still reports `GHSA-fc5q-39xc-vjpf` for Vite's transitive `picomatch`, although [GitHub withdrew that advisory](https://github.com/advisories/GHSA-fc5q-39xc-vjpf) on the same date. The raw audit output is left visible so new advisories are not hidden.
