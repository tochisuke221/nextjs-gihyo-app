const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  staticDirs: ['public'],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-postcss", "@storybook/addon-onboarding", "@storybook/addon-interactions", "@storybook/addon-mdx-gfm"],
  babel: async (options) => {
    return {
      ...options,
      plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-private-methods',
        '@babel/plugin-proposal-private-property-in-object',
      ],
    };
  },
  webpackFinal: async (config) => {
    // Webpackの設定を追加する処理
    return config;
  },
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  docs: {
    autodocs: true
  }
};
