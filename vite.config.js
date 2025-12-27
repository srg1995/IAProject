/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/setupTests.js",
        coverage: {
            provider: "v8",
            include: ["src/**/*.{js,jsx}"],
            exclude: [
                "node_modules/",
                "src/test/",
                "**/*.d.ts",
                "**/*.config.ts",
                "**/*.config.tsx",
                "**/mockData",
                "src/main.tsx",
                "src/vite-env.d.ts",
            ],

            // Umbrales mínimos de cobertura
            thresholds: {
                lines: 90,
                functions: 90,
                branches: 90,
                statements: 90,
            },
        },
    },
});
