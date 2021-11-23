import React from 'react';
import { create, act } from 'react-test-renderer';
import Header from '..';

afterEach(() => {
  jest.clearAllMocks();
});

describe('test Header component', () => {
  let component;
  const addSearchResult = jest.fn();
  act(() => { component = create(<Header addSearchResult={addSearchResult} />); });
  const tree = component.toJSON();
  it('should render Header component', () => {
    expect(tree).toMatchSnapshot();
  });
});
