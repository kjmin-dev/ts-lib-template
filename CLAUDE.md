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
- 2 spaces indentation, 120 line width
- Use Vitest for tests: `import { test, expect } from 'vitest'`

## Biome Lint Rules

Follow Biome recommended rules. Key rules to remember:

- **No non-null assertions** (`!`) - use proper null checks or type guards
- **No explicit `any`** - use `unknown` or proper types
- **No unused variables** - remove or prefix with `_`
- **Use `===` and `!==`** - avoid loose equality
- **No parameter reassignment** - use new variables instead
- **Prefer `const`** - use `let` only when reassignment is needed
- **No empty blocks** - add implementation or remove

## TypeScript Rules

This project uses `isolatedDeclarations` for faster DTS generation:

- **Explicit return types required** on all exported functions and methods
- **Explicit types on public class members** (getters, setters, methods)
