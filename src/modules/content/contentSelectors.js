import { createSelector } from 'reselect';

export const getSearchMovieResult = (state) => state.content.results;

export const getMoviesGenre = (state) => state.content.genres_array;

export const getVideo = (state) => state.content.video_url;

export const getSearchList = createSelector(
  getSearchMovieResult,
  getMoviesGenre,
  (results, genres_array) => results.map((item) => ({
    id: item.id,
    title: item.title,
    genres: item.genre_ids.map((element) => genres_array
      .find((genre) => genre.id === element).name),
    vote_average: item.vote_average,
    poster: item.poster_path,
    overview: item.overview,
  })),
);
