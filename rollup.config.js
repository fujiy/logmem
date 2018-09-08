
import resolve  from 'rollup-plugin-node-resolve';
import env      from "rollup-plugin-env";
import commonjs from 'rollup-plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';

export default {
    input: "output/Main/index.js",
    output: {
        file: "public/bundle.js",
        format: "iife",
        sourcemap: true,
        name: "Main",
    },
    plugins: [
        builtins(),
        resolve({jstext: true}),
        env({ NODE_ENV: 'development' }),
        commonjs()
    ]
};
