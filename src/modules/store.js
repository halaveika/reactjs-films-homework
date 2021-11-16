import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import contentReducer from './content';

const rootReducer = combineReducers({ content: contentReducer });

const middleware = [thunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);

export default store;
