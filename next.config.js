/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'instagram.fnvt1-1.fna.fbcdn.net',
        pathname: '/v/**'
      },
      {
        protocol: 'https',
        hostname: 'instagram.fbfh1-2.fna.fbcdn.net',
        pathname: '/v/**'
      }
    ]
  }
}

module.exports = nextConfig
