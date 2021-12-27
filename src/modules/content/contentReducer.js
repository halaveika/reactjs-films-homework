import {
  TRENDING, ADD_GENRES, ADD_DETAILS, SET_LOADING, ADD_ITEMS, SET_FILTER, SET_CURRENT_PAGE, SET_SEARCH_VALUE,
} from '../../constants';

export const initialState = {
  page: 1,
  results: [],
  total_pages: 0,
  total_results: 0,
  genres_array: [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' }],
  details: {},
  isLoading: true,
  filter: TRENDING,
  searchValue: '',
  pageSize: 20,
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
        isLoading: false,
      };
    case ADD_GENRES:
      return { ...state, genres_array: action.payload.genres };
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
