import React from 'react';
import { create, act } from 'react-test-renderer';
// import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '..';

describe('test Header component', () => {
  let component;
  act(() => { component = create(<Header />); });
  const tree = component.toJSON();
  it('should render Header component', () => {
    expect(tree).toMatchSnapshot();
  });

  // it('should listening event onchange on input', () => {
  //   const shallowRenderer = ShallowRenderer.createRenderer();
  //   shallowRenderer.render(<Header />);
  //   let tree = shallowRenderer.getRenderOutput();
  //   let input =  tree.props.children[1];
  //   input.props.onSearch('test');
  //   tree = shallowRenderer.getRenderOutput();
  //   expect(tree).toMatchSnapshot();
  // });
});
