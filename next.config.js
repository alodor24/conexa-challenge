/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.HOST_NAME,
        port: "",
        pathname: process.env.PATH_NAME,
      },
    ],
  },
};

module.exports = nextConfig;
