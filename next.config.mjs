/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'voucher.sgp1.digitaloceanspaces.com',
            port: '',
          },
        ],
      },
};


export default nextConfig;
