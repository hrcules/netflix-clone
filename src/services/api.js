const API_KEY = "65906d591fb4fcbbcc0f0749a66c8eaa";
const API_BASE = "https://api.themoviedb.org/3";

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Netflix",
        items: await basicFetch(
          `/discover/tv?with_network=213&language=pt-br&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: await basicFetch(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comedia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romane",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentários",
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
        default:
          info = null;
      }
    }

    return info;
  },
};
