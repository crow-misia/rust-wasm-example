import { resolve } from 'node:path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import topLevelAwait from 'vite-plugin-top-level-await'
import wasm from 'vite-plugin-wasm'
import tsconfigPaths from 'vite-tsconfig-paths'

const outDir = resolve(import.meta.dirname, './dist')

export default defineConfig(({ mode }) => {
  console.log('** mode **', mode)
  return {
    root: './www',
    server: {
      port: 8080,
      open: true,
    },
    plugins: [
      wasm(),
      topLevelAwait(),
      react(),
      tsconfigPaths(),
    ],
    build: {
      target: 'es2022',
      sourcemap: mode === 'develop',
      minify: mode === 'production' ? 'terser' : false,
      outDir,
    },
    define: {
      global: 'window', // global指定しないと取得不可
    }
  }
})
