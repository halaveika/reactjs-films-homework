/**
 * @jest-environment jsdom
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../app';
import { store } from '../modules/store';

jest.mock('react-dom', () => ({ render: jest.fn() }));

afterEach(() => {
  jest.clearAllMocks();
});

describe('Application root', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    /* eslint-disable */
    require('../index');
            /* eslint-enable */
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </Provider>,div,
    );
  });
});
