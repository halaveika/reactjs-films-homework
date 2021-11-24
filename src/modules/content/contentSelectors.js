import { createSelector } from 'reselect';
import { transformArray } from '../../utils/transformArray';

export const getSearchMovieResult = (state) => state.content.results;

export const getMoviesGenre = (state) => state.content.genres_array;

export const getVideo = (state) => state.content.video_url;

export const getSearchList = createSelector(
  getSearchMovieResult,
  getMoviesGenre,
  (results, genres_array) => results.map((item) => ({
    id: item.id,
    title: item.title,
    genres: transformArray(item.genre_ids, genres_array),
    vote_average: item.vote_average,
    poster: item.poster_path,
    overview: item.overview,
  })),
);
