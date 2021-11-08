import React from 'react';
import { Row, Button } from 'antd';
import './NavBar.scss';

export default function NavBar() {
  return (
    <Row className="navbar-container" justify="space-between">
      <Button>Watch Now</Button>
      <Button>View Info</Button>
    </Row>
  );
}
