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
      isRow
    />,
  );

  it('should render ColumnsBtn component not active', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should handle onClick event', () => {
    const { root } = component;
    const clickable = root.findByProps({ className: 'columns-btn' });
    act(() => { clickable.props.onClick(); });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(setListFlexDirection).toBeCalled();
  });

  it('should render ColumnsBtn component active', () => {
    const component2 = create(
      <ColumnsBtn
        setListFlexDirection={setListFlexDirection}
        isRow={false}
      />,
    );
    const tree = component2.toJSON();
    expect(tree).toMatchSnapshot();
    const { root } = component2;
    const button = root.findByProps({ className: 'columns-btn_active' });
    expect(button).toBeTruthy();
  });
});
