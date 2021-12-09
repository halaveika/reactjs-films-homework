import React from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import './GenreMenu.scss';

const GenreMenu = ({genres, setGenre}) => {
  const menuItems = genres.map((genre)=>(
    <Menu.Item key={genre.id}>
      <span className="menu-item" onClick={()=>setGenre(genre.name)}>{genre.name}</span>
    </Menu.Item>
  ));

  return (
      <Menu>
        <Menu.Item key="1">
        <span className="menu-item" onClick={()=>setGenre('')}>All</span>
        </Menu.Item>
        {menuItems}
      </Menu>
  );
}


GenreMenu.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string})),
  setGenre: PropTypes.func.isRequired,
};

export default GenreMenu;
