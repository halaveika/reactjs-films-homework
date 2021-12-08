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
    this.videoRef = React.createRef();
  }

  handleCancel() {
    if(this.props.video) {
    this.videoRef.current.src =`${this.props.video}`;
    }
    this.setState({ isModalVisible: false });
  }

  showModal() {
    const { id, handleVideo } = this.props;
    handleVideo(id);
    this.setState({ isModalVisible: true });
  }

  render() {
    const { isModalVisible } = this.state;
  return (
    <>
      { React.cloneElement(this.props.children, { onClick: this.showModal.bind(this) }) }
      <Modal visible={isModalVisible} cancelText="cancel" okButtonProps={{ style: { display: 'none' } }} onCancel={this.handleCancel.bind(this)} closable={false}>
      {
      (this.props.video) ? <iframe src={`${this.props.video}`} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ref={this.videoRef} />
       :
      <img className="image-notfound" src="assets/images/not-found.png" alt="not_found" />
      }
      </Modal>
    </>
  );

  }
}

WatchVideoModal.propTypes = {
  id: PropTypes.number,
  video: PropTypes.string,
  handleVideo: PropTypes.func,
};
