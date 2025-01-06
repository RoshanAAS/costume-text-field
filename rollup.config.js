import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';



export default defineConfig({
   input: "src/index.ts",
   output:{
    dir:"dist",
    format:'esm',
    sourcemap:true,
    name:"costume-text-field"
   },
   plugins:[resolve(),commonjs(), typescript({tsconfig:"tsconfig.json"})],
   external:['react','react-dom','@mui/material','react-hot-toast','@emotion/react','@emotion/styled',],
   watch:{
      include:["src/**","!node_modules"]
   },
})