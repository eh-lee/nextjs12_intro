/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // UI input url
        source: '/old-url/:path*',
        // redirected url
        destination: "/new-url/:path*",
        permanent: false,
      },
    ]
  }
}

module.exports = nextConfig
