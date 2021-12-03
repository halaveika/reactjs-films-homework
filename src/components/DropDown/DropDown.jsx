import React from 'react';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import './DropDown.scss';

export default function DropDown({genres, handleGenre}) {
  console.dir(genres);
  const menuItems = genres.map((genre)=>(
    <Menu.Item key={genre.id}>
      <span className="menu-item" onClick={()=>handleGenre(genre.name)}>{genre.name}</span>
    </Menu.Item>
  ));


  const menu = (
    <Menu>
      {menuItems}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
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
  handleGenre: PropTypes.func.isRequired,
};
