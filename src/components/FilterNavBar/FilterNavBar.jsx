import React, {useState} from 'react';
import { Tabs, Badge } from 'antd';
import { useNavigate } from 'react-router-dom';
import DropDown from '../DropDown';
import PropTypes from 'prop-types';
import './FilterNavBar.scss';
const { TabPane } = Tabs;

export default function FilterNavBar({genres, getTrending, getTopRated, getUpcoming,handleGenre,activeGenre,setFilter,filter}) {
  const navigate = useNavigate()
  function callback(key) {
    if (key === '1') {
      setFilter('1');
      getTrending()}
    if (key === '2') {
      setFilter('2');
      getTopRated()}
    if (key === '3') {
      setFilter('3');
      getUpcoming()}
    if (key === '4') {
    setFilter('4');}
  }
  return (
    <div className="filter-navbar">
      <Tabs defaultActiveKey={filter} onChange={callback}>
        <TabPane tab="Trending" key="1">
        </TabPane>
        <TabPane tab="Top Rated" key="2">
        </TabPane>
        <TabPane tab="Coming Soon" key="3">
        </TabPane>
   
        <TabPane tab={ <DropDown handleGenre={handleGenre} genres={genres}/> } key="4">
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
  getTrending: PropTypes.func.isRequired,
  getTopRated: PropTypes.func.isRequired,
  getUpcoming: PropTypes.func.isRequired,
  handleGenre: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
