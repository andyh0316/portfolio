/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Add this line
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
