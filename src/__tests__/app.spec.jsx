import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow'
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
   it('Matches snapshot ShallowRenderer', () => {
    const renderer = new ShallowRenderer()
    const result = renderer.render(
            <App />
    )
    expect(result).toMatchSnapshot()
  })
  
});



