import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

const timestamp = new Date().getTime()

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: `static/[name].${timestamp}.js`,
        chunkFileNames: `static/js/[name].${timestamp}.js`,
        assetFileNames: `static/css/[name].${timestamp}.[ext]`
      }
    }
  },
})
