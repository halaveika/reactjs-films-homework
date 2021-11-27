import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { act } from 'react-test-renderer';
import AppRouter from '..';

afterEach(() => {
  jest.clearAllMocks();
});

describe('test AppRouter component', () => {
  it('Matches snapshot ShallowRenderer', () => {
    const renderer = new ShallowRenderer();
    let result;
    act(() => {
      result = renderer.render(
        <AppRouter />,
      );
    });

    expect(result).toMatchSnapshot();
  });
});
