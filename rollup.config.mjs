import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'esm',
    },
    plugins: [typescript({ tsconfig: './tsconfig.json' }), terser()],
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'named',
    },
    plugins: [typescript({ tsconfig: './tsconfig.json' }), terser()],
  },
  {
    input: 'dist/types/index.d.ts',
    output: {
      file: 'dist/types/index.d.ts',
      format: 'es',
    },
    plugins: [dts()],
  },
];