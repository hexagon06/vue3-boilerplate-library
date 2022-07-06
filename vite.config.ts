import { defineConfig } from 'vite'
import * as path from 'path';
import vue from '@vitejs/plugin-vue'
import css from 'rollup-plugin-import-css'

// https://vitejs.dev/guide/build.html#library-mode
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), css()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/library.ts"),
      name: "vue3-boilerplate-library",
      fileName: (format) => `vue3-boilerplate-library.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
