const nextConfig = {
    webpack: (config, { webpack }) => {
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /^electron$/,
        })
      );
      return config;
    },
    images: {
      unoptimized: true,
    },
    reactStrictMode: true,
    swcMinify: true
  };