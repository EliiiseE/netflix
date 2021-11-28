// Get data with fetch from the API URL
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://api.themoviedb.org/3';

type AllMoviesType = {
  page: number;
  results: [MovieTMDB];
  total_pages: number;
  total_results: number;
};

type AllGenresType = {
  genres: [GenresTMDB];
};

export const getTopRatedMovies = async (): Promise<AllMoviesType> => {
  const url = `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=fr-FR`;

  const response = await fetch(url);
  const responseJson = await response.json();

  return responseJson;
};

export const getAllGenres = async (): Promise<AllGenresType> => {
  const url = `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=fr-FR`;

  const response = await fetch(url);
  const responseJson = await response.json();

  console.log(responseJson);

  return responseJson;
};

export const getMoviesFromGenre = async (id: number): Promise<AllMoviesType> => {
  const url = `${API_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&with_genres=${id}`;

  const response = await fetch(url);
  const responseJson = await response.json();

  return responseJson;
};
