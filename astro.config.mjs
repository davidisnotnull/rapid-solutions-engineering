import { defineConfig } from "astro/config";

export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: [".", "node_modules"],
          silenceDeprecations: [
            "import",
            "global-builtin",
            "color-functions",
            "slash-div",
            "if-function",
            "function-units",
          ],
        },
      },
    },
  },
});
