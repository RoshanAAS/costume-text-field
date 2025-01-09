import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";

export default defineConfig({
  input: "src/index.ts", // Entry file
  output: {
    dir: "dist", // Output directory
    format: "esm", // ES Module format
    sourcemap: true, // Generate sourcemaps for debugging
    name: "CostumeTextField", // Library name
  },
  plugins: [
    resolve(), // Resolve node_modules
    commonjs(), // Convert CommonJS modules to ES6
    typescript({ tsconfig: "tsconfig.json" }), // TypeScript support
    replace({
      preventAssignment: true,
      values: {
        "'use client';": "", // Remove "use client" directive
      },
    }),
  ],
  external: [
    "react",
    "react-dom",
    "@mui/material",
    "@mui/system",
    "@emotion/react",
    "@emotion/styled",
    "react-hot-toast",
  ], // Mark peer dependencies as external
  watch: {
    include: ["src/**"], // Watch only the src directory
    exclude: ["node_modules/**"], // Exclude node_modules
  },
});
