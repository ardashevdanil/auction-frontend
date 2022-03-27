/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      issuer: /\.[t]sx?$/,
      use: {
        loader: "@svgr/webpack",
      },
    });

    return config;
  },
};

module.exports = nextConfig;
