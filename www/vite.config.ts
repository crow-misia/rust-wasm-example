import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import topLevelAwait from 'vite-plugin-top-level-await'
import wasm from 'vite-plugin-wasm'

const dist: string = resolve(__dirname, 'dist')

export default defineConfig(({ mode }) => {
  console.log('** mode **', mode)
  return {
    base: './',
    server: {
      port: 8080,
      open: true,
    },
    plugins: [wasm(), topLevelAwait()],
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
