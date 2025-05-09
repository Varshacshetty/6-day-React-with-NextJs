import axios from "axios";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const OPENLIBRARY_API_URL = process.env.NEXT_PUBLIC_OPENLIBRARY_API_URL;

export const fetchMovies = async (query) => {
  const url = query
    ? `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}`
    : `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}`;
  const response = await axios.get(url);
  return response.data.results;
};

export const fetchBooks = async (query) => {
  const url = query
    ? `${OPENLIBRARY_API_URL}/search.json?title=${query}`
    : `${OPENLIBRARY_API_URL}/subjects/fantasy.json?limit=20`;
  const response = await axios.get(url);
  return response.data.docs;
};
