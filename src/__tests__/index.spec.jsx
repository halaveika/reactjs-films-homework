/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MovieDetailsPage from '../pages/MovieDetailsPage';

jest.mock('react-dom', () => ({ render: jest.fn() }));

test('renders with MovieDetailsPage and root div', () => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
  /* eslint-disable */
  require('../index');
        /* eslint-enable */
  expect(ReactDOM.render).toHaveBeenCalledWith(<MovieDetailsPage />, root);
});
