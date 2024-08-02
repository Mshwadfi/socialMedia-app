/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: 'incremental'
  },
  images: {
    domains: ['images.pexels.com',"img.clerk.com","res.cloudinary.com"]
  }
};

export default nextConfig;
