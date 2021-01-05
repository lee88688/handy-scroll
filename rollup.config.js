import pkg from './package.json';
// import babel from '@rollup/plugin-babel';
import {terser} from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

let config = {
  input: 'src/handy-scroll.ts',
  output: {
    format: 'umd',
    name: 'handyScroll',
    banner: `/*!
${pkg.name} v${pkg.version}
${pkg.homepage}
(c) ${new Date().getUTCFullYear()} ${pkg.author}
*/`
  },
  plugins: [
    terser({
      output: {comments: /^!/}
    })
  ]
};

export default [
  {
    input: config.input,
    output: {
      ...config.output,
      file: 'dist/handy-scroll.es.js',
      format: 'es',
    },
    plugins: [typescript({tsconfigOverride: {compilerOptions: {target: 'ES6'}}})]
  },
  {
    input: config.input,
    output: {...config.output, file: 'dist/handy-scroll.es.min.js', format: 'es'},
    plugins: [typescript({tsconfigOverride: {compilerOptions: {target: 'ES6'}}}), ...config.plugins]
  },
  {
    input: config.input,
    output: {
      ...config.output,
      file: 'dist/handy-scroll.js',
      format: 'es',
    },
    plugins: [typescript()]
  },
  {
    input: config.input,
    output: {...config.output, file: 'dist/handy-scroll.min.js', format: 'es'},
    plugins: [typescript(), ...config.plugins]
  },
  {
    input: config.input,
    output: Object.assign({file: 'dist/handy-scroll.umd.js'}, config.output),
    plugins: [typescript()]
  },
  {
    input: config.input,
    output: Object.assign({file: 'dist/handy-scroll.umd.min.js'}, config.output),
    plugins: [typescript(), ...config.plugins]
  }
];
