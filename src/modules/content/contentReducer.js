import {TRENDING,ADD_GENRES,ADD_VIDEO,ADD_DETAILS,SET_LOADING,ADD_ITEMS,SET_FILTER,SET_CURRENT_PAGE,SET_SEARCH_VALUE} from '../../constants';

export const initialState = {
  page: 1,
  results: [],
  total_pages: 0,
  total_results: 0,
  genres_array: [],
  video_url: '',
  details: {},
  isLoading: true,
  filter: TRENDING,
  searchValue: '',
  pageSize: 20
};

export const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEMS:
      return {
        ...state,
        results: action.payload.results,
        page: action.payload.page,
        total_pages: action.payload.total_pages,
        total_results: action.payload.total_results,
        isLoading: false
      };
    case ADD_GENRES:
      return { ...state, genres_array: action.payload.genres };
    case ADD_VIDEO:
      return { ...state, video_url: action.payload };
    case ADD_DETAILS:
      return { ...state, details: action.payload };
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, page: action.payload.page, pageSize: action.payload.pageSize };
    case SET_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};
