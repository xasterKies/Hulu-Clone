const API_KEY = '010cf02106be78cd97145ccefed2ec7d';

export default {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated/week?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
};