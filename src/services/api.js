import axios from 'axios';
import { Notify } from 'notiflix';

const URL = 'https://api.themoviedb.org/3';
const KEY = '3f29e277b19fc95c68f9d05af1b05d52';

export const paramsForNotify = {
  position: 'center-center',
  timeout: 3000,
  width: '400px',
  fontsize: '24px',
};

export async function fetchMovies(endPoint) {
  const url = `${URL}${endPoint}?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
}

export async function featchSearchMovies(endPoint, query) {
  const url = `${URL}${endPoint}?api_key=${KEY}&query=${query}`;
  const response = await axios.get(url);
  return response.data;
}

export async function fetchMovieDetails(endPoint, movieId) {
  const url = `${URL}${endPoint}/${movieId}?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
}

export async function featchMovieCast(endPoint, movieId) {
  const url = `${URL}${endPoint}/${movieId}/credits?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
}

export async function featchMovieReviews(endPoint, movieId) {
  const url = `${URL}${endPoint}/${movieId}/reviews?api_key=${KEY}`;
  const response = await axios.get(url);
  return response.data;
}

export function onFetchError() {
  Notify.failure(
    'Oops! Something went wrong! Try reloading the page or make another choice!',
    paramsForNotify
  );
}
