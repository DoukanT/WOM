const key = '374d31ee5cedc841b05be0481e0a8f36'

const requests = {
  key : '374d31ee5cedc841b05be0481e0a8f36',
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&include_adult=false&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&include_adult=false&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&include_adult=false&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&include_adult=false&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&include_adult=false&language=en-US&page=1`,
  };

  export default requests