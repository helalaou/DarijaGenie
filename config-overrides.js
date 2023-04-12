module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.mp3$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  });

  return config;
};
