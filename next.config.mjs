/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'directus-production-851ff.up.railway.app',
        pathname: '/assets/**',
      },
    ],
  },
};

export default nextConfig;
