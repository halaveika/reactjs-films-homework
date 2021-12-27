import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import contentReducer from './content';
import { GetGenres } from './content/contentActions';

export const rootReducer = combineReducers({ content: contentReducer });

const middleware = [thunk];
export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);

store.dispatch(GetGenres());
