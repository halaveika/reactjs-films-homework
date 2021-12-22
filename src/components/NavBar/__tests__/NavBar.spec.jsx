import React from 'react';
import { create, act } from 'react-test-renderer';
import '../../../utils/matchMedia';
import NavBar from '../NavBar';

const mockData = {
  id: 55456,
  overview: 'There are growing dangers in the wizarding world of 1926 New York.',
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('test NavBar component', () => {
  it('should render NavBar component', () => {
    let component;
    act(() => {
      component = create(
        <NavBar
          id={mockData.id}
          overview={mockData.overview}
        />,
      );
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handleVisibleChange should change state', () => {
    const mockCallback = jest.spyOn(NavBar.prototype, 'setState').mockImplementation();
    let component;
    act(() => {
      component = create(
        <NavBar
          id={mockData.id}
          overview={mockData.overview}
        />,
      );
    });
    const { root } = component;
    root.instance.handleVisibleChange(true);
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toStrictEqual({ visible: true });
  });

  it('handleVisibleChange should handle button click', () => {
    const mockCallback = jest.spyOn(NavBar.prototype, 'handleVisibleChange').mockImplementation();
    let component;
    act(() => {
      component = create(
        <NavBar
          id={mockData.id}
          overview={mockData.overview}
        />,
      );
    });
    const { root } = component;
    expect(root.instance.state.visible).toBe(false);
    act(() => { root.findAllByType('button')[1].props.onClick(); });
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toBe(true);
  });
});
