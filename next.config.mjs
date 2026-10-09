/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Keep optimization on WebP until the bundled AVIF parser is patched.
    formats: ['image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'rkpatel71.com',
          },
        ],
        destination: 'https://www.rkpatel71.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
