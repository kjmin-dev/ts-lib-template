import { defineConfig } from 'tsdown';

/**
 * Platform-agnostic configuration with no runtime assumptions
 * - Avoid runtime-specific APIs
 * - Pure JavaScript/TypeScript logic only
 */
export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['esm'],
  target: 'es2022',
  platform: 'neutral',
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
});
