/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // basePath: "/portfolio", // UNCOMMENT and replace with your actual repo name
  // assetPrefix: "/portfolio/", // ADD THIS
  // trailingSlash: true, // ADD THIS
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
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
