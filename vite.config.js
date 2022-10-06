import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
    root: path.resolve(__dirname, 'src'),
    build: {
        outDir: path.resolve(__dirname, 'dist'),
        emptyOutDir: true,
        rollupOptions: {
            output: {
                entryFileNames: "[name].[hash].js",
                chunkFileNames: "[name].[hash].js",
                assetFileNames: (AssetInfo) => {
                    const type = AssetInfo.name.split('.').at(-1);

                    if (/(jpg|jpeg|png|svg|webp|avif)/.test(type)) {
                        return "assets/images/[name].[ext]"
                    }
                    
                    if (/(woff|woff2|ttf)/.test(type)) {
                        return "assets/fonts/[name].[ext]"
                    }

                    if (type === 'css') {
                        return "assets/styles/[name].[hash].[ext]"
                    }

                    return "assets/[name].[ext]"
                }
            }
        },
    },
    server: {
        host: true,
        open: true
    },
    plugins: [
        eslint()
    ],
})