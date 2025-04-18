/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  distDir: 'out',
  basePath: '',
  trailingSlash: true,
};

module.exports = nextConfig; 