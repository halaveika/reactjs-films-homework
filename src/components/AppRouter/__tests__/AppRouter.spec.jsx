import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import AppRouter from '..';

afterEach(() => {
  jest.clearAllMocks();
});

describe('test AppRouter component', () => {
  it('Matches snapshot ShallowRenderer', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(
      <AppRouter />,
    );
    expect(result).toMatchSnapshot();
  });
});
