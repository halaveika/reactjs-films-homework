import React from 'react';
import renderer from 'react-test-renderer';
import Header from '..';

describe('should render Header component', () => {
  const component = renderer.create(<Header />);
  let tree = component.toJSON();
  it('should render Header component', () => {
    expect(tree).toMatchSnapshot();
  });

  it('should listening event onchange on input', () => {
    const input = tree.children[1].children[0].children[0];
    input.props.onChange();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
