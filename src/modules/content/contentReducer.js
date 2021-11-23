export const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
  genres_array: [],
  video_url: '',
};

export const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEMS':
      return {
        ...state,
        results: action.payload.results,
        page: action.payload.page,
        total_pages: action.payload.total_pages,
        total_results: action.payload.total_results,
      };
    case 'ADD_GENRES':
      return { ...state, genres_array: action.payload.genres };
    case 'ADD_VIDEO':
      return { ...state, video_url: action.payload };
    default:
      return state;
  }
};
