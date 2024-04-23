/** @type {import('next').NextConfig} */
const TMDB_API_KEY: string | undefined = process.env.TMDB_API_KEY;
// "string | undefined" => value가 undefined인 경우 예외 처리를 위함

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
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${TMDB_API_KEY}`,
      },
    ]
  }
}

module.exports = nextConfig
