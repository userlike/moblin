module.exports = api => {
  api.cache(() => process.env.NODE_ENV);

  return {
    babelrc: false,
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
    ],
  };
};
