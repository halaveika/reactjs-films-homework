import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contentReducer from './content';
import { GetGenres,SearchData } from './content/contentActions';

export const rootReducer = combineReducers({ content: contentReducer });
const persistConfig = {
  key: 'content',
  storage: storage,
  whitelist: ['content'] // which reducer want to store
};
const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

export const store = createStore(
  pReducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
  ),
);

export const persistor = persistStore(store);

store.dispatch(GetGenres());
store.dispatch(SearchData('Hello'));
