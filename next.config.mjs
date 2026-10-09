/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Keep optimization on WebP until the bundled AVIF parser is patched.
    formats: ['image/webp'],
  },
};

export default nextConfig;
