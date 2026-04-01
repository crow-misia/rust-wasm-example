import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import wasm from 'vite-plugin-wasm'

export default defineConfig(({ mode }) => {
  console.log('** mode **', mode)
  return {
    root: resolve(import.meta.dirname, './www'),
    publicDir: resolve(import.meta.dirname, './public'),
    server: {
      port: 8080,
      open: true,
    },
    plugins: [
      wasm(),
      react(),
    ],
    build: {
      target: 'es2022',
      sourcemap: mode === 'develop',
      minify: mode === 'production' ? 'terser' : false,
      outDir: resolve(import.meta.dirname, './dist'),
      emptyOutDir: true,
    },
    resolve: {
      tsconfigPaths: true,
    },
    define: {
      global: 'window', // global指定しないと取得不可
    },
  }
})
