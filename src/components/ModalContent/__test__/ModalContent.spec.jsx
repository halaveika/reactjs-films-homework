import React from 'react';
import { create } from 'react-test-renderer';
import ModalContent from '../ModalContent';
import { NOT_FOUND_IMG_PATH } from '../../../constants';

const videoRef = { current: null };

describe('test ModalContent component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render ModalContent as iframe', () => {
    const component = create(
      <ModalContent
        video="test"
        videoRef={videoRef}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('sshould render ModalContent as image', () => {
    const component = create(
      <ModalContent
        video={NOT_FOUND_IMG_PATH}
        videoRef={videoRef}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
