/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "galaxy-prod.tlcdn.com" },
      { protocol: "https", hostname: "i.ibb.co" },
    ],
  },
};

module.exports = nextConfig;
