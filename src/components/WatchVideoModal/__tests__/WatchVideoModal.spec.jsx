import React from 'react';
import { create, act } from 'react-test-renderer';
import { Button } from 'antd';
import WatchVideoModal from '../WatchVideoModal';
import HttpService from '../../../modules/api/httpService';

const WatchVideoModalProps = {
  id: 2412412,
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
          id={WatchVideoModalProps.id}
        >
          <Button />
        </WatchVideoModal>,
      );
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('click should change state', async() => {
    jest.spyOn(HttpService, 'movieVideoRequest').mockImplementation(() =>Promise.resolve('test_url'));
    const mockCallback = jest.spyOn(WatchVideoModal.prototype, 'setState').mockImplementation();
    let component;
    act(() => {
      component = create(
        <WatchVideoModal
          id={WatchVideoModalProps.id}
        >
          <Button />
        </WatchVideoModal>,
      );
    });
    const { root } = component;
    expect(root.instance.state).toEqual({ isModalVisible: false, video: '' });
    await act(async() => {root.findAllByType('button')[0].props.onClick();});
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toEqual({ isModalVisible: true, video: 'test_url' });
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
    expect(mockCallback.mock.calls[0][0]).toEqual({ isModalVisible: false, video: '' });
  });

  it('handleCancel should change stat with video undefined', async() => {
    jest.spyOn(HttpService, 'movieVideoRequest').mockImplementation(() =>Promise.resolve(''));
    const mockCallback = jest.spyOn(WatchVideoModal.prototype, 'setState').mockImplementation();
    let component;
    act(() => {
      component = create(
        <WatchVideoModal
          id={WatchVideoModalProps.id}
        >
          <Button />
        </WatchVideoModal>,
      );
    });
    const instance = component.getInstance()
    await instance.setState({ isModalVisible: true, video: 'test' })
    const { root } = component;
    await act(() => Promise.resolve(root.findAllByType('button')[0].props.onClick()));
    expect(mockCallback.mock.calls.length).toBe(2);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
