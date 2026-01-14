import { defineConfig } from 'tsdown';

/**
 * Configuration for web browsers
 * - DOM APIs available
 * - Bundle size optimized (minify enabled)
 * - Node.js built-in modules unavailable
 */
export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['esm'],
  target: 'es2022',
  platform: 'browser',
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
  minify: true,
});
