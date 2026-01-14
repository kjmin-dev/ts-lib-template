# ts-lib-template

A starter template for building TypeScript libraries.

## Features

- **tsdown** - Fast bundling & type generation
- **Vitest** - Fast unit testing
- **Biome** - Linting & formatting
- **Bun** - Fast package manager

## Quick Start

```bash
# Install dependencies
bun install

# Development (watch mode)
bun run dev

# Build
bun run build

# Test
bun test
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun run build` | Production build |
| `bun run dev` | Watch mode build |
| `bun test` | Run tests |
| `bun run typecheck` | Type check |
| `bun run lint` | Lint & fix |
| `bun run format` | Format code |

## Build Configuration

Platform-specific tsdown configuration presets are provided. Choose the one that matches your target environment.

### Platform Presets

| File | Platform | Use Case |
|------|----------|----------|
| `tsdown.config.node.ts` | Node.js | Node.js-specific libraries |
| `tsdown.config.neutral.ts` | Neutral | Cross-platform (Node/Deno/Bun) |
| `tsdown.config.browser.ts` | Browser | Browser-specific libraries |

### Usage

Copy the desired config to `tsdown.config.ts`, or specify it directly when building:

```bash
bunx tsdown --config tsdown.config.node.ts
```

### Configuration Details

#### Node.js (`platform: 'node'`)
- `target: 'node18'` - Supports Node.js 18+
- `shims: true` - Provides Node.js compatibility shims
- Node.js built-in modules available (fs, path, crypto, etc.)

#### Neutral (`platform: 'neutral'`)
- `target: 'es2022'` - Standard ECMAScript target
- Runtime-agnostic code
- Compatible with Node.js, Deno, and Bun

#### Browser (`platform: 'browser'`)
- `target: 'es2022'` - Modern browser target
- `minify: true` - Minimizes bundle size
- DOM APIs available, Node.js APIs unavailable

## License

MIT
