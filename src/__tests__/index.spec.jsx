/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Signature from '../components/signature';

jest.mock('react-dom', () => ({ render: jest.fn() }));

test('renders with Signature and root div', () => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
  /* eslint-disable */
  require('../index');
        /* eslint-enable */
  expect(ReactDOM.render).toHaveBeenCalledWith(<Signature name="Aliaksandr Halaveika" />, root);
});
