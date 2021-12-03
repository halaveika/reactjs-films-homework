import HttpService from '../api/httpService';

export const SearchData = (str) => async (dispatch) => {
  if (str) {
    const json = await HttpService.searchMovieRequest(str);
    dispatch({ type: 'ADD_ITEMS', payload: json });
  }
};

export const GetGenres = () => async (dispatch) => {
  const json = await HttpService.movieGenresRequest();
  dispatch({ type: 'ADD_GENRES', payload: json });
};

export const GetVideoUrl = (id) => async (dispatch) => {
  const str = await HttpService.movieVideoRequest(id);
  dispatch({ type: 'ADD_VIDEO', payload: str });
};

export const getDetails = (id) => async (dispatch) => {
  const json = await HttpService.movieDetailsRequest(id);
  dispatch({ type: 'ADD_DETAILS', payload: json });
};

export const getTrending = () => async (dispatch) => {
  const json = await HttpService.getTrendingRequest();
  dispatch({ type: 'ADD_ITEMS', payload: json });
};

export const getTopRated = () => async (dispatch) => {
  const json = await HttpService.getTopRatedRequest();
  dispatch({ type: 'ADD_ITEMS', payload: json });
};

export const getUpcoming = () => async (dispatch) => {
  const json = await HttpService.getUpcomingRequest();
  dispatch({ type: 'ADD_ITEMS', payload: json });
};

export const getInitialisated = () => ({ type: 'INITIALISATION', payload: true });
