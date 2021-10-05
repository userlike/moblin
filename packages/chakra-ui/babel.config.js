const BABEL_ENV = process.env.BABEL_ENV;
const isCommonJS = BABEL_ENV !== undefined && BABEL_ENV === 'cjs';
const isESM = BABEL_ENV !== undefined && BABEL_ENV === 'esm';

module.exports = api => {
  api.cache(() => process.env.NODE_ENV);

  return {
    babelrc: false,
    presets: [
      [
        '@babel/env',
        {
          loose: true,
          modules: isCommonJS ? 'commonjs' : false,
          targets: {
            esmodules: isESM ? true : undefined,
          },
        },
      ],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
          development: process.env.NODE_ENV !== 'production',
        },
      ],
      '@babel/preset-typescript',
    ],
  };
};
