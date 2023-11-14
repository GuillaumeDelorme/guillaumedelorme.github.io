/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
