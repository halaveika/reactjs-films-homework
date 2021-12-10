import { createSelector } from 'reselect';
import transformArray from '../../utils/transformArray';
import { BACKDROP_PATH_URL } from '../../constants';

export const getSearchMovieResult = (state) => state.content.results;

export const getMoviesGenre = (state) => state.content.genres_array;

export const getDetailsSelector = (state) => state.content.details;

export const getLoadingSelector = (state) => state.content.isLoading;

export const getFilter = (state) => state.content.filter;

export const getPageSelector = (state) => state.content.page;

export const getTotalResultsSelector = (state) => state.content.total_results;

export const getSearchValueSelector = (state) => state.content.searchValue;

export const getPageSizeSelector = (state) => state.content.pageSize;

export const getSearchList = createSelector(
  getSearchMovieResult,
  getMoviesGenre,
  (results, genres_array) => results.map((item) => ({
    id: item.id,
    title: item.title,
    genres: transformArray(item.genre_ids, genres_array),
    vote_average: item.vote_average,
    poster: (item.poster_path) ? `${BACKDROP_PATH_URL}${item.poster_path}` : 'assets/images/not-found.png',
    overview: item.overview,
  })),
);

export const getDetailsPageSelector = createSelector(
  getDetailsSelector,
  (details) => ({
    id: details.id,
    title: details.title,
    genres: details.genres.map((item) => item.name),
    vote_average: details.vote_average,
    backdrop: (details.backdrop_path)
      ? `${BACKDROP_PATH_URL}${details.backdrop_path}` : 'assets/images/cover-image.jpg',
    overview: details.overview,
    runtime: details.runtime,
  }),
);
