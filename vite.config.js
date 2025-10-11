import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import {imagetools} from "vite-imagetools";
import viteImagemin from 'vite-plugin-imagemin';
import {ViteImageOptimizer} from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), ViteImageOptimizer({
        // folder z obrazkami
        includePublic: true,
        // konfiguracja jakości
        png: {quality: 80},
        jpeg: {quality: 80},
        jpg: {quality: 80},
        webp: {quality: 80, lossless: false},
        avif: {quality: 70},
        // optymalizacja dla SVG
        svg: {
            multipass: true,
            plugins: [
                {name: 'removeViewBox', active: false},
                {name: 'removeDimensions', active: true},
            ],
        },
    }),],

    build: {
        assetsDir: 'assets',
    },
});


