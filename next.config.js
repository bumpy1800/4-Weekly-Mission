/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  reactStrictMode: true,
}

module.exports = nextConfig
=======
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
>>>>>>> part3-김재성-week14-temp
