import React from 'react';
import { create, act } from 'react-test-renderer';
import { Button } from 'antd';
import WatchVideoModal from '../WatchVideoModal';

const WatchVideoModalProps = {
  id: 2412412,
  video: 'youtube-link',
  handleVideo: jest.fn(),
};

describe('test WatchVideoModal component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render WatchVideoModal component', () => {
    let component;
    act(() => {
      component = create(
        <WatchVideoModal
          video={WatchVideoModalProps.video}
          handleVideo={WatchVideoModalProps.handleVideo}
          id={WatchVideoModalProps.id}
        >
          <Button />
        </WatchVideoModal>,
      );
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('click should change state', () => {
    const mockCallback = jest.spyOn(WatchVideoModal.prototype, 'setState').mockImplementation();
    let component;
    act(() => {
      component = create(
        <WatchVideoModal
          video={WatchVideoModalProps.video}
          handleVideo={WatchVideoModalProps.handleVideo}
          id={WatchVideoModalProps.id}
        >
          <Button />
        </WatchVideoModal>,
      );
    });
    const { root } = component;
    expect(root.instance.state.isModalVisible).toBe(false);
    root.findAllByType('button')[0].props.onClick();
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toEqual({ isModalVisible: true });
  });

  it('handleCancel should change stat', () => {
    const mockCallback = jest.spyOn(WatchVideoModal.prototype, 'setState').mockImplementation();
    let ref = jest.spyOn(React, "createRef").mockImplementation(() => {
      return { current: { src: 'test'} };
});
    let component;
    act(() => {
      component = create(
        <WatchVideoModal
          video={WatchVideoModalProps.video}
          handleVideo={WatchVideoModalProps.handleVideo}
          id={WatchVideoModalProps.id}
        >
          <Button />
        </WatchVideoModal>,
      );
    });
    const { root } = component;
    act(() =>root.instance.handleCancel());
    expect(ref).toBeCalled();
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toEqual({ isModalVisible: false });
  });

  it('handleCancel should change stat with video undefined', () => {
    const mockCallback = jest.spyOn(WatchVideoModal.prototype, 'setState').mockImplementation();
    let component;
    act(() => {
      component = create(
        <WatchVideoModal
          video={undefined}
          handleVideo={WatchVideoModalProps.handleVideo}
          id={WatchVideoModalProps.id}
        >
          <Button />
        </WatchVideoModal>,
      );
    });
    const { root } = component;
    act(() =>root.instance.handleCancel());
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toEqual({ isModalVisible: false });
  });
});
