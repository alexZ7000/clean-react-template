import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import analyze from "rollup-plugin-analyzer";
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    plugins: [
        react({
            devTarget: "es2022"
        }),
        ViteImageOptimizer({
            png: {
                compressionLevel: 9,
                effort: 10,
                quality: 95,
                palette: true,
                colours: 256,
                dither: 1.0,
                adaptiveFiltering: true,
                progressive: false
            },
            jpeg: {
                quality: 95,
                progressive: true,
                chromaSubsampling: "4:4:4",
                trellisQuantisation: true,
                overshootDeringing: true,
                optimiseScans: true,
                optimiseCoding: true,
                mozjpeg: true
            },
            svg: {
                multipass: true,
                plugins: [
                    { name: "removeViewBox" },
                    { name: "removeEmptyAttrs" }
                ]
            },
            gif: {
                reuse: true,
                progressive: true,
                colours: 256,
                effort: 10,
                dither: 0.05,
                interFrameMaxError: 5,
                interPaletteMaxError: 3
            },
            webp: {
                lossless: true,
                alphaQuality: 100
            },
            avif: {
                quality: 95,
                effort: 9,
                lossless: true
            }
        }),
        analyze({
            summaryOnly: true
        }),
        compression({
            algorithm: "brotliCompress",
            ext: ".br"
        })
    ],
    resolve: {
        alias: {
            "@assets": "/src/app/assets",
            "@components": "/src/app/web/components",
            "@styles": "/src/app/web/styles",
            "@pages": "/src/app/web/pages",
            "@router": "/src/app/web/router",
            "@hooks": "/src/app/utils/hooks",
            "@validation": "/src/app/utils/validation",
            "@interfaces": "/src/api/shared/interfaces",
            "@integrations": "/src/api/integrations/modules",
            "@stores": "/src/api/integration/stores",
            "@enums": "/src/api/shared/enums"
        }
    },
    optimizeDeps: {
        exclude: ["react-spinners"]
    },
    cacheDir: "node_modules/.vite_cache"
});
