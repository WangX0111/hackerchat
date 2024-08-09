import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    plugins: [vue({
            template: {
                compilerOptions: {
                    isCustomElement: tagName => {
                        return tagName === 'vue-advanced-chat' || tagName === 'emoji-picker'
                      }
                },
            },
        }
    )],
    build: {
        outDir: "../extension/vue-dist",
        rollupOptions: {
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`,
            },
        },
    },
});
