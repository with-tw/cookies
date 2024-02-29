/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/with-tw/cookies',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
