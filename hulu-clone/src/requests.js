const API_KEY = '010cf02106be78cd97145ccefed2ec7d';

export default {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMysteryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFiMovies:`/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchWersternMovies:`/discover/movie?api_key=${API_KEY}&with_genres=37`,
    fetchAnimationMovies:`/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchTV:`/discover/movie?api_key=${API_KEY}&with_genres=10770`,

};