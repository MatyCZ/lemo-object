import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: './src/index.js',
    output: [
        {
            file: 'lib/lemo-object.es.js',
            format: 'es',
            sourcemap: true,
        },
        {
            file: 'lib/lemo-object.umd.js',
            format: 'umd',
            name: 'LemoObject',
            sourcemap: true,
        },
    ],
    plugins: [
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [
                '@babel/preset-env',
                '@babel/preset-react'
            ],
        }),
        resolve(),
        commonjs()
    ]
};