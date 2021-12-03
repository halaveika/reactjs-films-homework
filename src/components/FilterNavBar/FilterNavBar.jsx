import React from 'react';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import './FilterNavBar.scss';

export default function FilterNavBar() {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <span className="menu-item">1st menu item</span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );
  return (
    <div
    className="filter-navbar"
  >
    <span>Trending</span>
    <span>Top Rated</span>
    <span>Coming Soon</span>
    <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Genre <DownOutlined />
    </a>
  </Dropdown>
    </div>
  );
}


