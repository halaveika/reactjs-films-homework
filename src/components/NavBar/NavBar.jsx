import React, { Component } from 'react';
import { Popover, Button, Row } from 'antd';
import PropTypes from 'prop-types';
import WatchVideoModal from '../WatchVideoModal';
import './NavBar.scss';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleVisibleChange(visible) {
    this.setState({ visible });
  }
  render() {
    const { overview, id , video, GetVideoUrl } = this.props;
    const { visible } = this.state;
    return (
      <Row className="navbar-container" justify="space-between">
        <WatchVideoModal video={video} handleVideo={GetVideoUrl} id={id}>
          <Button>Watch Now</Button>
        </WatchVideoModal>
        <Popover
          content={overview}
          trigger="click"
          visible={visible}
          onVisibleChange={this.handleVisibleChange.bind(this)}
        >
          <Button>View Info</Button>
        </Popover>
      </Row>
    );
  }
}
NavBar.propTypes = {
  overview: PropTypes.string.isRequired,
};
