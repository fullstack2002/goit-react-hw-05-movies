import axios from "axios";

const API_KEY = 'c2adf4092a83a2e23791f3f570392dbd';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function fetchTrendingMovies() {
  const data = await axios.get(`${BASE_URL}trending/all/day?api_key=${API_KEY}`);
  return data.data.results
}

export async function fetchSearchData(query) {
  const data = await axios.get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`);
  return data.data.results
}

export async function fetchMovieDetails(id) {
  const data = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  return data.data
}

export async function fetchMovieCast(id) {
  const data = await axios.get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`);
  return data.data.cast
}

export async function fetchMovieReviews(id) {
  const data = await axios.get(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`);
  return data.data.results
}
