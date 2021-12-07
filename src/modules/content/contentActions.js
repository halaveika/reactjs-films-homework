import HttpService from '../api/httpService';
import {getFilter,getPageSelector, getSearchValueSelector } from './contentSelectors';
import {TRENDING,TOPRATED,COMINGSOON,ADD_GENRES,ADD_VIDEO,ADD_DETAILS,SET_LOADING,ADD_ITEMS,SET_FILTER,SET_CURRENT_PAGE,SET_SEARCH_VALUE} from '../../constants';

export const GetGenres = () => async (dispatch) => {
  const json = await HttpService.movieGenresRequest();
  dispatch({ type: ADD_GENRES, payload: json });
};//

export const GetVideoUrl = (id) => async (dispatch) => {
  const str = await HttpService.movieVideoRequest(id);
  dispatch({ type: ADD_VIDEO, payload: str });
};//

export const getDetails = (id) => async (dispatch) => {
  const json = await HttpService.movieDetailsRequest(id);
  dispatch({ type: ADD_DETAILS, payload: json });
};//

export const getContent = () => async (dispatch,getState) => {
  const state = getState();
  const str = getSearchValueSelector(state);
  const page = getPageSelector(state);
  const filter = getFilter(state);
  if (str.trim() && filter==='' ) {
    dispatch({ type: SET_LOADING, payload: true })
    const json = await HttpService.searchMovieRequest(str,page);
    dispatch({ type: ADD_ITEMS, payload:json });
  }
  if(filter === TRENDING) {
    dispatch({ type: SET_LOADING, payload: true })
    const json = await HttpService.getTrendingRequest(page);
    dispatch({ type: ADD_ITEMS, payload: json });
  }
  if(filter === TOPRATED) {
    dispatch({ type: SET_LOADING, payload: true })
    const json = await HttpService.getTopRatedRequest(page);
    dispatch({ type: ADD_ITEMS, payload: json });
  }
  if(filter === COMINGSOON) {
    dispatch({ type: SET_LOADING, payload: true })
    const json = await HttpService.getUpcomingRequest(page);
    dispatch({ type: ADD_ITEMS, payload: json });
  }
};

export const setLoading = (boolean) => ({ type: SET_LOADING, payload: boolean });

export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });

export const setCurrentPage = (page,pageSize = 20) => ({ type: SET_CURRENT_PAGE, payload: {page,pageSize} });

export const setSearchValue = (str) => ({ type: SET_SEARCH_VALUE, payload: str });
