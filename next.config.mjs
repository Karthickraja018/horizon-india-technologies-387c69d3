/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/products/:category/trs',
        destination: '/products/:category/rockwell-hardness-testers?variant=trs',
        permanent: true,
      },
      {
        source: '/products/:category/trsn',
        destination: '/products/:category/rockwell-hardness-testers?variant=trsn',
        permanent: true,
      },
      {
        source: '/products/:category/trsn-d',
        destination: '/products/:category/rockwell-hardness-testers?variant=trsn-d',
        permanent: true,
      },
      {
        source: '/products/:category/rasne-ts',
        destination: '/products/:category/touch-screen-rockwell-testers?variant=rasne-ts',
        permanent: true,
      },
      {
        source: '/products/:category/rasnet-ts',
        destination: '/products/:category/touch-screen-rockwell-testers?variant=rasnet-ts',
        permanent: true,
      },
      {
        source: '/products/:category/rasneb-ts',
        destination: '/products/:category/touch-screen-rockwell-testers?variant=rasneb-ts',
        permanent: true,
      },
      {
        source: '/products/:category/trb',
        destination: '/products/:category/rockwell-brinell-combo-systems?variant=trb',
        permanent: true,
      },
      {
        source: '/products/:category/trb-250',
        destination: '/products/:category/rockwell-brinell-combo-systems?variant=trb-250',
        permanent: true,
      },
      {
        source: '/products/:category/trsn-bd',
        destination: '/products/:category/rockwell-brinell-combo-systems?variant=trsn-bd',
        permanent: true,
      },
      {
        source: '/products/:category/trsn-cd',
        destination: '/products/:category/rockwell-brinell-combo-systems?variant=trsn-cd',
        permanent: true,
      },
      {
        source: '/products/:category/trp-1',
        destination: '/products/:category/portable-hardness-testers?variant=trp-1',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
