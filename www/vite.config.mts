import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import topLevelAwait from 'vite-plugin-top-level-await'
import wasm from 'vite-plugin-wasm'
import tsconfigPaths from 'vite-tsconfig-paths'

const dist = resolve(import.meta.dirname, '../dist')

export default defineConfig(({ mode }) => {
  console.log('** mode **', mode)
  return {
    base: './',
    server: {
      port: 8080,
      open: true,
    },
    plugins: [wasm(), topLevelAwait(), tsconfigPaths()],
    build: {
      sourcemap: mode === 'develop',
      minify: mode === 'production' ? 'terser' : false,
      outDir: dist,
    },
    define: {
      global: 'window', // global指定しないと取得不可
    },
  }
})
