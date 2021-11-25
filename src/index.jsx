import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import 'antd/dist/antd.css';
import { store } from './modules/store';
import App from './app';
import { persistor } from './modules/store';
import './styles.scss';

const { moduleHotAccept } = require('./utils/moduleHotAccept');

moduleHotAccept(module);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
,
  document.querySelector('#root'),
);
