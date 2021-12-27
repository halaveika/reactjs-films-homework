import React from 'react';
import { create, act } from 'react-test-renderer';
import Footer from '..';

const mockCallback = jest.spyOn(window, 'scrollTo').mockImplementation();

describe('test Footer component', () => {
  const component = create(
    <Footer />,
  );
  it('should render Footer component', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should handle onClick event', () => {
    const { root } = component;
    const clickable = root.findByProps({ className: 'title' });
    act(() => { clickable.props.onClick(); });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(mockCallback).toBeCalled();
  });
});
