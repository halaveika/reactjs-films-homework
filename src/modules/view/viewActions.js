import {SET_LIST_FLEX_DIRECTION,SET_GENRE } from '../../constants';

export const setGenre = (genre) => ({ type: SET_GENRE, payload: genre });

export const setListFlexDirection = (boolean) => ({ type: SET_LIST_FLEX_DIRECTION, payload: boolean });
