import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/stories/index.ts'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  minify: false,
  sourcemap: true,
  splitting: false,
  target: 'esnext',
});
