/** @type {import('next').NextConfig} */

module.exports = {
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'portal.ieeeaiubsb.com',
        port: '',
      },
    ],
  },
};
