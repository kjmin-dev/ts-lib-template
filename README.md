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
| `tsdown.config.node.ts` | Node | Node.js and compatible runtimes (Deno, Bun) |
| `tsdown.config.neutral.ts` | Neutral | Platform-agnostic with no runtime assumptions |
| `tsdown.config.browser.ts` | Browser | Web browsers |

### Usage

Copy the desired config to `tsdown.config.ts`, or specify it directly when building:

```bash
bunx tsdown --config tsdown.config.node.ts
```

### Configuration Details

#### Node (`platform: 'node'`)
- Node.js and compatible runtimes (Deno, Bun)
- `target: 'node18'` - Supports Node.js 18+
- `shims: true` - Provides Node.js compatibility shims
- Node.js built-in modules available (fs, path, crypto, etc.)

#### Neutral (`platform: 'neutral'`)
- Platform-agnostic with no specific runtime assumptions
- `target: 'es2022'` - Standard ECMAScript target
- Pure JavaScript/TypeScript logic only

#### Browser (`platform: 'browser'`)
- Web browsers
- `target: 'es2022'` - Modern browser target
- `minify: true` - Minimizes bundle size
- DOM APIs available, Node.js APIs unavailable

## License

MIT
