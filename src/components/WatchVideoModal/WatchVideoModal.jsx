import React, { cloneElement, useState } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import './WatchVideoModal.scss';

export default function WatchVideoModal(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    props.handleVideo(props.id);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  /* eslint-disable */
  return (
    <>
      { cloneElement(props.children, { onClick: showModal }) }
      <Modal visible={isModalVisible} cancelText="cancel" okButtonProps={{ style: { display: 'none' } }} onOk={handleOk} width="850px" height="500px" onCancel={handleCancel} closable={false} centered>
        <iframe className="videoIframe" src={`${props.video}`} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </Modal>
    </>
  );
    /* eslint-enable */
}

WatchVideoModal.propTypes = {
  id: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  handleVideo: PropTypes.func.isRequired,
};
