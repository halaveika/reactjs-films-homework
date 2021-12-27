import React from 'react';
import { Tabs } from 'antd';
import PropTypes from 'prop-types';
import DropDown from '../DropDown';
import {
  TRENDING, TOPRATED, COMINGSOON, GENRE,
} from '../../constants';
import './FilterNavBar.scss';

const { TabPane } = Tabs;

const FilterNavBar = ({
  genres, setGenre, activeGenre, setFilter, filter, setCurrentPage,
}) => {
  function callback(key) {
    if (key === TRENDING) {
      setFilter(TRENDING);
      setCurrentPage(1);
    }
    if (key === TOPRATED) {
      setFilter(TOPRATED);
      setCurrentPage(1);
    }
    if (key === COMINGSOON) {
      setFilter(COMINGSOON);
      setCurrentPage(1);
    }
    if (key === GENRE) {
      setCurrentPage(1);
    }
  }
  return (
    <div className="filter-navbar">
      <Tabs defaultActiveKey={filter} onChange={callback}>
        <TabPane tab="Trending" key={TRENDING} />
        <TabPane tab="Top Rated" key={TOPRATED} />
        <TabPane tab="Coming Soon" key={COMINGSOON} />
        <TabPane tab={<DropDown setGenre={setGenre} genres={genres} />} key={GENRE} />
      </Tabs>
      <span className="genre-status">{activeGenre}</span>
    </div>
  );
};

FilterNavBar.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
  setGenre: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default FilterNavBar;
