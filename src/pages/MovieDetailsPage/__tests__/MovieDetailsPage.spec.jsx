import React from 'react';
import { create } from 'react-test-renderer';
import '../../../utils/matchMedia';
import MovieDetailsPage from '..';

describe('test MovieDetailsPage component', () => {
  it('should render MovieDetailsPage component', () => {
    const component = create(
      <MovieDetailsPage />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
