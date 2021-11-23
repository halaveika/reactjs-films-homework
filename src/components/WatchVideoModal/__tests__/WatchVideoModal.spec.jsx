import React from 'react';
import { create, act } from 'react-test-renderer';
import { Card, Button } from 'antd';
import WatchVideoModal from '../WatchVideoModal';

const WatchVideoModalProps = {
  id: '2412412',
  video: 'youtube-link',
  handleVideo: jest.fn(),
};

afterEach(() => {
  jest.clearAllMocks();
});

const toggleActive = jest.fn();

describe('test WatchVideoModal component', () => {
  it('should render WatchVideoModal component', () => {
    const component = create(
      <WatchVideoModal
        video={WatchVideoModalProps.video}
        handleVideo={WatchVideoModalProps.handleVideo}
        id={WatchVideoModalProps.id}
        children={<Button onClick={toggleActive} />}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('handleVisibleChange should change state', () => {
  //   const mockCallback = jest.spyOn(NavBar.prototype, 'setState').mockImplementation();

  //   const { root } = create(
  //     <NavBar
  //       overview={mockData.overview}
  //     />,
  //   );
  //   root.instance.handleVisibleChange(true);
  //   expect(mockCallback.mock.calls.length).toBe(1);
  //   expect(mockCallback.mock.calls[0][0]).toStrictEqual({visible:true});
  // });

  // it('handleVisibleChange should handle button click', () => {
  //   const mockCallback = jest.spyOn(NavBar.prototype, 'handleVisibleChange').mockImplementation();

  //   const { root } = create(
  //     <NavBar
  //       overview={mockData.overview}
  //     />,
  //   );
  //   expect(root.instance.state.visible).toBe(false);
  //   act(() => { root.findAllByType('button')[1].props.onClick(); });
  //   expect(mockCallback.mock.calls.length).toBe(1);
  //   expect(mockCallback.mock.calls[0][0]).toBe(true);
  // });
});
