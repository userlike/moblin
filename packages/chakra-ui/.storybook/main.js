const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  features: {
    previewCsfV3: true,
    emotionAlias: false,
  },
  core: {
    builder: 'webpack5',
  },
};
