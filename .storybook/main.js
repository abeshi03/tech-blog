module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links", "@storybook/addon-toolbars"],
  webpackFinal: async(config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: "[local]___[hash:base64:2]",
            },
          },
        },
        "sass-loader",
      ],
    });

    return config;
  }
};
