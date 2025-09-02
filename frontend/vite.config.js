import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
var timestamp = new Date().getTime();
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                entryFileNames: "static/[name].".concat(timestamp, ".js"),
                chunkFileNames: "static/js/[name].".concat(timestamp, ".js"),
                assetFileNames: "static/css/[name].".concat(timestamp, ".[ext]")
            }
        }
    },
});
