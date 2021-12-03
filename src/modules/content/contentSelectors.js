import { createSelector } from 'reselect';
import transformArray from '../../utils/transformArray';

export const getSearchMovieResult = (state) => state.content.results;

export const getMoviesGenre = (state) => state.content.genres_array;

export const getVideo = (state) => state.content.video_url;

export const getInitialisation = (state) => state.content.isInitialisated;

export const getDetailsSelector = (state) => state.content.details;

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

export const getDetailsPageSelector = createSelector(
  getSearchMovieResult,
  getMoviesGenre,
  getDetailsSelector,
  getVideo,
  (results, genres_array, details, video) => {
    const result = results.filter((item) => item.id === details.id)[0];
    return {
      id: details.id,
      title: result.title,
      genres: transformArray(result.genre_ids, genres_array),
      vote_average: result.vote_average,
      backdrop: result.backdrop_path,
      overview: result.overview,
      runtime: details.runtime,
      video,
    };
  },
);
