import HttpService from '../api/httpService';

export const SearchData = (str) => async (dispatch) => {
  const json = await HttpService.searchMovieRequest(str);
  dispatch({ type: 'ADD_ITEMS', payload: json });
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



