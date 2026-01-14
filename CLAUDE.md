---
description: TypeScript library template using Bun, tsdown, Vitest, and Biome.
globs: "*.ts, *.tsx, *.js, *.jsx, package.json"
alwaysApply: false
---

# Project Context

TypeScript library starter template. Output is ESM module with type declarations.

## Stack

- **Runtime/PM**: Bun (use `bun` instead of npm/yarn/pnpm)
- **Build**: tsdown (outputs to `dist/`)
- **Test**: Vitest
- **Lint/Format**: Biome

## Commands

```bash
bun install          # Install deps
bun run build        # Build library
bun run dev          # Build with watch
bun test             # Run tests
bun run typecheck    # Type check
bun run lint         # Lint and fix
bun run format       # Format code
```

## Structure

- `src/` - Source code (entry: `src/index.ts`)
- `tests/` - Test files (`*.test.ts`)
- `dist/` - Build output (do not edit)

## Code Style

- Single quotes, semicolons required
- Follow Biome rules in `biome.json`
- Use Vitest for tests: `import { test, expect } from 'vitest'`
