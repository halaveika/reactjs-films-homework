import { createSelector } from 'reselect';
import transformArray from '../../utils/transformArray';

export const getSearchMovieResult = (state) => state.content.results;

export const getMoviesGenre = (state) => state.content.genres_array;

export const getVideo = (state) => state.content.video_url;

export const getInitialisation = (state) => state.content.isInitialisated;

export const getDetailsSelector = (state) => state.content.details;

export const getLoadingSelector = (state) => state.content.isLoading;

export const getFilter = (state) => state.content.filter;

export const getPageSelector = (state) => state.content.page;

export const getTotalPageSelector = (state) => state.content.total_pages;

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
    poster: item.poster_path,
    overview: item.overview,
  })),
);

export const getDetailsPageSelector = createSelector(
  getDetailsSelector,
  getVideo,
  (details, video) => {
    return {
      id: details.id,
      title: details.title,
      genres: details.genres.map(item => item.name),
      vote_average: details.vote_average,
      backdrop: details.backdrop_path,
      overview: details.overview,
      runtime: details.runtime,
      video,
    };
  },
);
