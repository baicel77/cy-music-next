/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.music.126.net",
      },
      {
        protocol: "http",
        hostname: "**.music.126.net",
      },
    ],
  },
}

module.exports = nextConfig
