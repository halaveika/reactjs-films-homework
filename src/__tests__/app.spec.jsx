import React from 'react';
import { create } from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../app';
import { store } from '../modules/store';

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener() {},
    removeListener() {},
  };
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('test App component', () => {
  it('should render App component', () => {
    const component = create(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
