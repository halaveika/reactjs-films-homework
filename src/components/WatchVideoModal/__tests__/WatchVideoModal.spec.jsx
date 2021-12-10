import React from 'react';
import TestRenderer from 'react-test-renderer'; 
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

  it('click should change state', async() => {
    jest.spyOn(HttpService, 'movieVideoRequest').mockImplementation(() =>Promise.resolve('test_url'));
    const mockCallback = jest.spyOn(WatchVideoModal.prototype, 'setState').mockImplementation();
    let component;
    TestRenderer.act(() => {
      component = TestRenderer.create(
        <WatchVideoModal
          id={WatchVideoModalProps.id}
        >
          <Button />
        </WatchVideoModal>,
      );
    });
    const { root } = component;
    expect(root.instance.state).toEqual({ isModalVisible: false, video: '' });
    await TestRenderer.act(async() => {root.findAllByType('button')[0].props.onClick();});
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toEqual({ isModalVisible: true, video: 'test_url' });
  });

  it('handleCancel should change state', () => {
    const mockCallback = jest.spyOn(WatchVideoModal.prototype, 'setState').mockImplementation();
    let ref = jest.spyOn(React, "createRef").mockImplementation(() => {
      return { current: { src: 'test'} };
});
    let component;
    TestRenderer.act(() => {
      component = TestRenderer.create(
        <WatchVideoModal
          id={WatchVideoModalProps.id}
        >
          <Button />
        </WatchVideoModal>,
      );
    });
    const { root } = component;
    TestRenderer.act(() =>root.instance.handleCancel());
    expect(ref).toBeCalled();
    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.calls[0][0]).toEqual({ isModalVisible: false, video: '' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  });
});
