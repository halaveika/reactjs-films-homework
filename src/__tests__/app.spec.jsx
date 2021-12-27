import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { act } from 'react-test-renderer';
import App from '../app';

window.matchMedia = window.matchMedia || function mMedia() {
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
  it('Matches snapshot ShallowRenderer', async () => {
    const renderer = new ShallowRenderer();
    let result;
    await act(async () => {
      result = renderer.render(
        <App />,
      );
    });
    expect(result).toMatchSnapshot();
  });
});
