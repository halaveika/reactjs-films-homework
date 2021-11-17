import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import contentReducer from './content';
import { GetGenres } from './content/contentActions';

const rootReducer = combineReducers({ content: contentReducer });

const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);

store.dispatch(GetGenres());

export default store;
