import React from 'react';
import { create, act } from 'react-test-renderer';
import RowsBtn from '../RowsBtn';

const setListFlexDirection = jest.fn();

describe('test RowsBtn component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const component = create(
    <RowsBtn
      setListFlexDirection={setListFlexDirection}
      isRow={false}
    />,
  );

  it('should render RowsBtn component no active', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should handle onClick event', () => {
    const { root } = component;
    const clickable = root.findByProps({ className: 'rows-btn' });
    act(() => { clickable.props.onClick(); });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(setListFlexDirection).toBeCalled();
  });

  it('should render RowsBtn component active', () => {
    const component2 = create(
      <RowsBtn
        setListFlexDirection={setListFlexDirection}
        isRow
      />,
    );
    const tree = component2.toJSON();
    expect(tree).toMatchSnapshot();
    const { root } = component2;
    const button = root.findByProps({ className: 'rows-btn_active' });
    expect(button).toBeTruthy();
  });
});
