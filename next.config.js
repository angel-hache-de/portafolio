/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["tse2.mm.bing.net"]
  }
}

module.exports = nextConfig
