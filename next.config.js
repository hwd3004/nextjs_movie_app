const API_KEY = "10923b261ba94d897ac6b81148314a3f";

module.exports = {
  reactStrictMode: true,

  async redirects() {
    return [
      // redirects - source의 url로 요청하면 destination의 url로 요청이 변경됨, 사용자도 url의 변경을 볼 수 있음
      //
      // {
      //   source: "/contact",
      //   destination: "/form",
      //   permanent: false,
      // },
      //
      {
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      // rewrites - 사용자가 url의 변경을 볼 수 없음. source의 url만 보임
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
