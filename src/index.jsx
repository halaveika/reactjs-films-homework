import React from 'react';
import * as ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './styles.scss';
import MovieDetailsPage from './pages/MovieDetailsPage';

const { moduleHotAccept } = require('./utils/moduleHotAccept');

moduleHotAccept(module);

ReactDOM.render(<MovieDetailsPage />,
  document.querySelector('#root'));
