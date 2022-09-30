import { terser } from "rollup-plugin-terser";
import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json';

const main = ["src/index.js"];


export default [{
  input: main,
  plugins: [
    terser(),
    nodeResolve(),
  ],
  output: [
    {
      dir: "dist/esm",
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
    {
      dir: "dist/cjs",
      format: "cjs",
      exports: "named",
      sourcemap: true,
    },
  ],
  // output: {
  //   file: `dist/${pkg.name}.min.js`,
  //   format: "umd",
  //   name: "js-lib-rollup",
  //   esModule: false,
  //   exports: "named",
  //   sourcemap: true,
  // }
}];
