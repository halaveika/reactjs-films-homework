import React from 'react';
import { create, act } from 'react-test-renderer';
import '../../../utils/matchMedia';
import MovieDetailsPage from '..';

describe('test MovieDetailsPage component', () => {
  let component;
  act(() => { component = create(<MovieDetailsPage />); });
  const tree = component.toJSON();
  it('should render MovieDetailsPage component', () => {
    expect(tree).toMatchSnapshot();
  });
});
