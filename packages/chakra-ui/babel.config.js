const TARGET_ENV = process.env.TARGET_ENV;
const isCommonJS = TARGET_ENV === 'cjs';
const isESM = TARGET_ENV === 'esm';

module.exports = (api) => {
  api.cache(() => `${process.env.NODE_ENV}-${TARGET_ENV}`);

  return {
    babelrc: false,
    presets: [
      [
        '@babel/env',
        {
          loose: true,
          modules: isCommonJS || api.env('test') ? 'commonjs' : false,
          targets: {
            esmodules: isESM ? true : undefined,
            node: api.env('test') ? 'current' : undefined,
          },
        },
      ],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
          development: !api.env('production'),
        },
      ],
      '@babel/preset-typescript',
    ],
  };
};
