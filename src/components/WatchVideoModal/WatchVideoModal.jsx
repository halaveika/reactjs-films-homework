import React, { Component } from 'react';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import HttpService from '../../modules/api/httpService';
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
    if(this.state.video) {
    this.videoRef.current.src =`${this.state.video}`;
    }
    this.setState({...this.state,isModalVisible:false});
  }

  async showModal() {
    const { id, handleVideo } = this.props;
    const video = await HttpService.movieVideoRequest(id);
    this.setState({...this.state,isModalVisible:true,video});
  }

  render() {
    const { isModalVisible } = this.state;
  return (
    <>
      { React.cloneElement(this.props.children, { onClick: this.showModal.bind(this) }) }
      <Modal visible={isModalVisible} cancelText="cancel" okButtonProps={{ style: { display: 'none' } }} onCancel={this.handleCancel.bind(this)} closable={false}>
      {
      (this.state.video) ? <iframe src={`${this.state.video}`} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ref={this.videoRef} />
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
};
