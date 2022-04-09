/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: ["auction-files.hb.bizmrg.com"],
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
