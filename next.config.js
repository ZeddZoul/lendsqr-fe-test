/** @type {import('next').NextConfig} */
const nextConfig = {
  
}

// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloudflare-ipfs.com",
        port: "",
        pathname: "/ipfs/**",
      },
    ],
  },
};
// module.exports = nextConfig
