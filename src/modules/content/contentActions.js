import HttpService from '../api/httpService';

export const SearchData = (str) => async (dispatch) => {
  if (str.trim()) {
    dispatch({ type: 'SET_LOADING', payload: true })
    const json = await HttpService.searchMovieRequest(str);
    setTimeout(() => {dispatch({ type: 'ADD_ITEMS', payload: json });}, 1000);
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
  dispatch({ type: 'SET_LOADING', payload: true })
  const json = await HttpService.getTrendingRequest();
  dispatch({ type: 'ADD_ITEMS', payload: json });
};

export const getTopRated = () => async (dispatch) => {
  dispatch({ type: 'SET_LOADING', payload: true })
  const json = await HttpService.getTopRatedRequest();
  dispatch({ type: 'ADD_ITEMS', payload: json });
};

export const getUpcoming = () => async (dispatch) => {
  dispatch({ type: 'SET_LOADING', payload: true })
  const json = await HttpService.getUpcomingRequest();
  dispatch({ type: 'ADD_ITEMS', payload: json });
};

export const setLoading = (boolean) => ({ type: 'SET_LOADING', payload: boolean });

export const getInitialisated = () => ({ type: 'INITIALISATION', payload: true });

export const setFilter = (filter) => ({ type: 'SET_FILTER', payload: filter });