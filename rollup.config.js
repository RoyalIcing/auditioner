const del = require('rollup-plugin-delete');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript')
const { nodeResolve } = require('@rollup/plugin-node-resolve');

const entries = [
  './src/index.ts'
]

module.exports = [
  {
    input: entries,
    output: [
      {
        dir: 'dist',
        entryFileNames: '[name].mjs',
        chunkFileNames: '[name]-[hash].mjs',
        format: 'esm',
      },
      {
        dir: 'dist',
        entryFileNames: '[name].js',
        chunkFileNames: '[name]-[hash].js',
        format: 'cjs',
      },
    ],
    external: id =>
      !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/'),
    plugins: [
      del({ targets: 'dist/*' }),
      nodeResolve({ extensions: ['.js', '.ts'] }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" })
    ],
  },
]