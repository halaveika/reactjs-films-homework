import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import 'antd/dist/antd.css';
import { store } from './modules/store';
import App from './app';
import './styles.scss';

const { moduleHotAccept } = require('./utils/moduleHotAccept');

moduleHotAccept(module);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
,
  document.querySelector('#root'),
);
