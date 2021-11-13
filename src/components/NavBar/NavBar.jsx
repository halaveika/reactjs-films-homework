import React, { Component } from 'react';
import { Popover, Button, Row } from 'antd';
import PropTypes from 'prop-types';
import './NavBar.scss';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  };

  render() {
    const { overview } = this.props;
    const { visible } = this.state;
    return (
      <Row className="navbar-container" justify="space-between">
        <Button>Watch Now</Button>
        <Popover
          content={overview}
          trigger="click"
          visible={visible}
          onVisibleChange={this.handleVisibleChange}
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
