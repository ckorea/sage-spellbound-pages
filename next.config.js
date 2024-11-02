/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the pageExtensions since you're not using MDX right now
  webpack: (config) => {
    return config
  },
}

module.exports = nextConfig 