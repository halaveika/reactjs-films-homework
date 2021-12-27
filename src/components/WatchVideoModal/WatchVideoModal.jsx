import React, { Component } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import './WatchVideoModal.scss';

export default class WatchVideoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
  }

  handleCancel() {
    this.setState({ isModalVisible: false });
  }

  showModal() {
    const { id, handleVideo } = this.props;
    handleVideo(id);
    this.setState({ isModalVisible: true });
  }

  /* eslint-disable */
  render() {
    const { isModalVisible } = this.state;
  return (
    <>
      { React.cloneElement(this.props.children, { onClick: this.showModal.bind(this) }) }
      <Modal visible={isModalVisible} cancelText="cancel" okButtonProps={{ style: { display: 'none' } }} width="85vw" height="85vh" onCancel={this.handleCancel.bind(this)} closable={false} centered>
        <iframe className="videoIframe" src={`${this.props.video}`} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </Modal>
    </>
  );
    /* eslint-enable */
  }
}
WatchVideoModal.propTypes = {
  id: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  handleVideo: PropTypes.func.isRequired,
};
