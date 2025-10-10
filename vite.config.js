import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import {imagetools} from "vite-imagetools";
import viteImagemin from 'vite-plugin-imagemin';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(), imagetools(), viteImagemin({
        gifsicle: {
            optimizationLevel: 7,
            interlaced: false,
        },
        optipng: {
            optimizationLevel: 7,
        },
        mozjpeg: {
            quality: 70,
        },
        pngquant: {
            quality: [0.8, 0.9],
            speed: 4,
        },
        svgo: {
            plugins: [
                {
                    name: false,
                },
                {
                    name: 'removeEmptyAttrs',
                    active: false,
                },
            ],
        },
    }),],
});


