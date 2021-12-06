import React from 'react';
import { Tabs } from 'antd';
import DropDown from '../DropDown';
import PropTypes from 'prop-types';
import {TRENDING,TOPRATED,COMINGSOON,GENRE} from '../../constants';
import './FilterNavBar.scss';
const { TabPane } = Tabs;

 const FilterNavBar = ({genres, handleGenre,activeGenre,setFilter,filter,setCurrentPage}) => {
  function callback(key) {
    if (key === TRENDING) {
      setFilter(TRENDING)
      setCurrentPage(1);}
    if (key === TOPRATED) {
      setFilter(TOPRATED)
      setCurrentPage(1);}
    if (key === COMINGSOON) {
      setFilter(COMINGSOON)
      setCurrentPage(1);}
    if (key === GENRE) {
      setCurrentPage(1);}
  }
  return (
    <div className="filter-navbar">
      <Tabs defaultActiveKey={filter} onChange={callback}>
        <TabPane tab="Trending" key={TRENDING}>
        </TabPane>
        <TabPane tab="Top Rated" key={TOPRATED}>
        </TabPane>
        <TabPane tab="Coming Soon" key={COMINGSOON}>
        </TabPane>
        <TabPane tab={ <DropDown handleGenre={handleGenre} genres={genres}/> } key={GENRE}>
        </TabPane>
      </Tabs>
        <span className="genre-status">{activeGenre}</span>
    </div>
  );
}


FilterNavBar.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string})),
  handleGenre: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired
};

export default FilterNavBar;
