// const API = process.env.API_KEY;
const API='33da68a5f7989438b5190ed48f45e1e5'

export default {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API}&language=en-US`,
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API}&language=en-US`,
    },
    fetchActionMovies: {
        title: "Action",
        url: `/discover/movie?api_key=${API}&with_genres=28`,
    },
    fetchComedyMovies: {
        title: "Comedy",
        url: `/discover/movie?api_key=${API}&with_genres=35`,
    },
    fetchHorrorMovies: {
        title: "Horror",
        url: `/discover/movie?api_key=${API}&with_genres=27`,
    },
    fetchRomanceMovies: {
        title: "Romance",
        url: `/discover/movie?api_key=${API}&with_genres=10749`,
    },
    fetchMystery: {
        title: "Mystery",
        url: `/discover/movie?api_key=${API}&with_genres=9648`,
    },
    fetchSciFi: {
        title: "Sci-Fi",
        url: `/discover/movie?api_key=${API}&with_genres=878`,
    },
    fetchWestern: {
        title: "Western",
        url: `/discover/movie?api_key=${API}&with_genres=37`,
    },
    fetchAnimation: {
        title: "Animation",
        url: `/discover/movie?api_key=${API}&with_genres=16`,
    },
    fetchTV: {
        title: "TV Movie",
        url: `/discover/movie?api_key=${API}&with_genres=10770`,
    },
}