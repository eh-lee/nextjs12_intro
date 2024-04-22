/** @type {import('next').NextConfig} */
const TMDB_API_KEY = process.env.TMDB_API_KEY;

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
  },
  async rewrites() {
    return [
      {
        // Fake req. URL
        source: "/api/movies",
        // Real req. URL
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`,
      }
    ]
  }
}

module.exports = nextConfig
