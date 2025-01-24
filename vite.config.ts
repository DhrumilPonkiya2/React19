import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ESLint } from "eslint";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "eslint-plugin",
      enforce: "pre",
      apply: "serve",
      watchChange: async () => {
        const eslint = new ESLint();
        const results = await eslint.lintFiles("./src/**/*.{js,jsx,ts,tsx}");
        const formatter = await eslint.loadFormatter("stylish");
        const resultText = await formatter.format(results);
        console.log(resultText || "\nNo linting Errors");
      },
      buildStart: async () => {
        const eslint = new ESLint();
        const results = await eslint.lintFiles("./src/**/*.{js,jsx,ts,tsx}");
        const formatter = await eslint.loadFormatter("stylish");
        const resultText = await formatter.format(results);

        resultText && console.log(resultText);
      },
    },
  ],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@route": path.resolve(__dirname, "./src/route"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
});
