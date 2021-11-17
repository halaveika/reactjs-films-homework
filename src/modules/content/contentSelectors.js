import { createSelector } from 'reselect';

export const getSearchMovieResult = (state) => state.content.results;

export const getMoviesGenre = (state) => state.content.genres_array;

export const getSearchList = createSelector(
  getSearchMovieResult,
  getMoviesGenre,
  (getSearchMovieResult, getMoviesGenre) => getSearchMovieResult.map((item) => ({
    id: item.id,
    title: item.title,
    genres: item.genre_ids.map((item) => getMoviesGenre.find((genre) => genre.id = item).name),
    vote_average: item.vote_average,
    poster: item.poster_path,
    overview: item.overview,
    image: item.backdrop_path,
  })),
);
