import { SET_GENRE, SET_LIST_FLEX_DIRECTION } from '../../constants';

export const initialState = {
  isRow: true,
  genre: '',
};

export const viewReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_FLEX_DIRECTION:
      return {...state, isRow: action.payload};
    case SET_GENRE:
      return { ...state, genre: action.payload };
    default:
      return state;
  }
};
