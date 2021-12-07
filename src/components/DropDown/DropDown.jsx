import React from 'react';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import './DropDown.scss';

const DropDown = ({genres, setGenre}) => {
  const menuItems = genres.map((genre)=>(
    <Menu.Item key={genre.id}>
      <span className="menu-item" onClick={()=>setGenre(genre.name)}>{genre.name}</span>
    </Menu.Item>
  ));

  const menu = (
    <Menu>
      <Menu.Item key="1">
      <span className="menu-item" onClick={()=>setGenre('')}>All</span>
      </Menu.Item>
      {menuItems}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
      <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>{'Genre '}
        <DownOutlined />
      </span>
    </Dropdown>
  );
}


DropDown.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string})),
  setGenre: PropTypes.func.isRequired,
};

export default DropDown;
