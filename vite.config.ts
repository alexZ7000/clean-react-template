import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import imagemin from "vite-plugin-imagemin";
import analyze from "rollup-plugin-analyzer";
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            devTarget: "es2022"
        }),
        imagemin({
            optipng: {
                optimizationLevel: 7
            },
            pngquant: {
                quality: [0.95, 1.0],
                speed: 1
            },
            verbose: true,
            svgo: {
                plugins: [
                    {
                        name: "removeViewBox"
                    },
                    {
                        name: "removeEmptyAttrs",
                        active: false
                    }
                ]
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
            "@components": "/src/app/web/components",
            "@screens": "/src/app/web/screens",
            "@routes": "/src/app/web/routes",
            "@assets": "/src/app/assets",
            "@styles": "/src/app/web/styles",
            "@constants": "/src/app/utils/constants",
            "@integrations": "/src/@clean/integrations/modules",
            "@enums": "/src/@clean/shared/domain/enums",
            "@interfaces": "/src/app/utils/@types/interfaces",
            "@functions": "/src/app/utils/functions",
            "@formatters": "/src/app/utils/formatters"
        }
    },
    optimizeDeps: {
        exclude: ["react-spinners"]
    },
    cacheDir: "node_modules/.vite_cache"
});
