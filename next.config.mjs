/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true, // Changed from 'incremental' (string) to true (boolean)
    // reactCompiler: true, // Removed or commented out
  },
  images: {
    domains: ['images.pexels.com', "img.clerk.com", "res.cloudinary.com"]
  }
};

export default nextConfig;
