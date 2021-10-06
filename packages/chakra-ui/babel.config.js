const TARGET_ENV = process.env.TARGET_ENV;
const isCommonJS = TARGET_ENV === 'cjs';
const isESM = TARGET_ENV === 'esm';

const targets = {
  esm: { esmodules: true },
  test: {
    node: 'current',
  },
};

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
            ...(isESM && targets.esm),
            ...(api.env('test') && targets.test),
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
