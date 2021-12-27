import React, { Component } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import HttpService from '../../modules/api/httpService';
import ModalContent from '../ModalContent';
import './WatchVideoModal.scss';

export default class WatchVideoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      video: '',
    };
    this.videoRef = React.createRef();
  }

  handleCancel() {
    this.videoRef.current.src = `${this.state.video}`;
    this.setState({ ...this.state, isModalVisible: false });
  }

  async showModal() {
    const { id } = this.props;
    const video = await HttpService.movieVideoRequest(id);
    this.setState({ ...this.state, isModalVisible: true, video });
  }

  render() {
    const { isModalVisible } = this.state;
    return (
      <>
        { React.cloneElement(this.props.children, { onClick: this.showModal.bind(this) }) }
        <Modal
          visible={isModalVisible}
          cancelText="cancel"
          okButtonProps={{ style: { display: 'none' } }}
          onCancel={this.handleCancel.bind(this)}
          closable={false}
        >
          {' '}
          <ModalContent videoRef={this.videoRef} video={this.state.video} />
        </Modal>
      </>
    );
  }
}

WatchVideoModal.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number,
};
