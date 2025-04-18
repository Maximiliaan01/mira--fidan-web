/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  output: 'export', // Static HTML export için
  trailingSlash: true,
  assetPrefix: '/',
  basePath: '',
};

module.exports = nextConfig; 