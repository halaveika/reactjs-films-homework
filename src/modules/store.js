import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import contentReducer from './content';
import viewReducer from './view';
import saveToLocalStorage from '../utils/saveToLocalStorage';
import loadFromLocalStorage from '../utils/loadFromLocalStorage';

const presistedState = loadFromLocalStorage();

export const rootReducer = combineReducers({ content: contentReducer, view: viewReducer });

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  presistedState,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);

store.subscribe(() => saveToLocalStorage(store.getState()));
