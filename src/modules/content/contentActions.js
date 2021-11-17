import httpService from '../api/httpService';

export const SearchData = (str) => async (dispatch) => {
  const json = await httpService.searchMovieRequest(str);
  dispatch({ type: 'ADD_ITEMS', payload: json });
};

export const GetGenres = () => async (dispatch) => {
  const json = await httpService.movieGenresRequest();
  dispatch({ type: 'ADD_GENRES', payload: json });
};
