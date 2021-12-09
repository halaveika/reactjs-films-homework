import React from 'react';
import { create, act } from 'react-test-renderer';
import ColumnsBtn from '../ColumnsBtn';

  const setListFlexDirection = jest.fn();


describe('test ColumnsBtn component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const component = create(
      <ColumnsBtn
      setListFlexDirection={setListFlexDirection}
      />,);

  it('should render ColumnsBtn component', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should handle onClick event',  () => {
    const { root } = component;
    const clickable = root.findByProps({ className: 'columns-btn' });
    act(() => { clickable.props.onClick(); });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(setListFlexDirection).toBeCalled();
  });
});
