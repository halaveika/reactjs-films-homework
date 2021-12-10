import React from 'react';
import { create } from 'react-test-renderer';
import Footer from '..';

describe('test Footer component', () => {

  it('should render Footer component', () => {
    const component = create(
          <Footer/>,
      );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
