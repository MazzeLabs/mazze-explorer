/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',  // or 'server'
    experimental: {
      // Disable static exports
    isrMemoryCacheSize: 0,
    serverActions: true,
  },
}

export default nextConfig;
