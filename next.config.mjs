/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure we handle MDX and other file types properly
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  
  // Add any necessary webpack configuration
  webpack: (config, { isServer }) => {
    // Any custom webpack config if needed
    return config
  },
}

export default nextConfig 