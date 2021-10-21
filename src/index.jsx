import React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.scss';
import Signature from './components/signature';

const { moduleHotAccept } = require('./utils/moduleHotAccept');

moduleHotAccept(module);

ReactDOM.render(<Signature name="Aliaksandr Halaveika" />,
  document.querySelector('#root'));
