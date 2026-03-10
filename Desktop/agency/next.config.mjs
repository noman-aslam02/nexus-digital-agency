/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/nexus-digital-agency',
  assetPrefix: '/nexus-digital-agency/',
}

export default nextConfig
