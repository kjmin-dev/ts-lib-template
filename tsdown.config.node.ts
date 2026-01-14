import { defineConfig } from 'tsdown';

/**
 * Node.js-specific library configuration
 * - Node.js built-in modules available (fs, path, crypto, etc.)
 * - Add 'cjs' to format if CommonJS compatibility is required
 */
export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['esm'],
  target: 'node18',
  platform: 'node',
  clean: true,
  exports: true,
  skipNodeModulesBundle: true,
  failOnWarn: 'ci-only',
  treeshake: {
    moduleSideEffects: false,
  },
  dts: {
    oxc: {
      stripInternal: true,
    },
  },
  sourcemap: true,
  shims: true,
});
