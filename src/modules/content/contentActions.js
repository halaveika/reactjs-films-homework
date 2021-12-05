import HttpService from '../api/httpService';

export const SearchData = (str,page = 1) => async (dispatch) => {
  if (str.trim()) {
    dispatch({ type: 'SET_LOADING', payload: true })
    const json = await HttpService.searchMovieRequest(str, page);
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

export const getTrending = (page = 1) => async (dispatch) => {
  dispatch({ type: 'SET_LOADING', payload: true })
  const json = await HttpService.getTrendingRequest(page);
  dispatch({ type: 'ADD_ITEMS', payload: json });
};

export const getTopRated = (page = 1) => async (dispatch) => {
  dispatch({ type: 'SET_LOADING', payload: true })
  const json = await HttpService.getTopRatedRequest(page);
  dispatch({ type: 'ADD_ITEMS', payload: json });
};

export const getUpcoming = (page = 1) => async (dispatch) => {
  dispatch({ type: 'SET_LOADING', payload: true })
  const json = await HttpService.getUpcomingRequest(page);
  dispatch({ type: 'ADD_ITEMS', payload: json });
};

export const getData = (page = 1, filter, str='') => async (dispatch) => {
  if (str.trim()) {
    dispatch({ type: 'SET_LOADING', payload: true })
    const json = await HttpService.searchMovieRequest(str, page);
    setTimeout(() => {dispatch({ type: 'ADD_ITEMS', payload: json });}, 1000);
  }
  if(filter === '1') {
    dispatch({ type: 'SET_LOADING', payload: true })
    const json = await HttpService.getTrendingRequest(page);
    dispatch({ type: 'ADD_ITEMS', payload: json });
  }
  if(filter === '2') {
    dispatch({ type: 'SET_LOADING', payload: true })
    const json = await HttpService.getTopRatedRequest(page);
    dispatch({ type: 'ADD_ITEMS', payload: json });
  }
  if(filter === '3') {
    dispatch({ type: 'SET_LOADING', payload: true })
    const json = await HttpService.getUpcomingRequest(page);
    dispatch({ type: 'ADD_ITEMS', payload: json });
  }
};

export const setLoading = (boolean) => ({ type: 'SET_LOADING', payload: boolean });

export const getInitialisated = () => ({ type: 'INITIALISATION', payload: true });

export const setFilter = (filter) => ({ type: 'SET_FILTER', payload: filter });

export const setCurrentPage = (page,pageSize = 20) => ({ type: 'SET_CURRENT_PAGE', payload: page });
