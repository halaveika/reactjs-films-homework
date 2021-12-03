import React from 'react';
import { Tabs } from 'antd';
import { useNavigate } from 'react-router-dom';
import DropDown from '../DropDown';
import PropTypes from 'prop-types';
import './FilterNavBar.scss';
const { TabPane } = Tabs;

export default function FilterNavBar({genres, getTrending, getTopRated, getUpcoming,handleGenre}) {
  const navigate = useNavigate()
  function callback(key) {
 
    if (key === '1') {
      navigate("/"); getTrending()}
    if (key === '2') {
      navigate("/"); getTopRated()}
    if (key === '3') {
      navigate("/"); getUpcoming()}
  }
  return (
    <div className="filter-navbar">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Trending" key="1">
        </TabPane>
        <TabPane tab="Top Rated" key="2">
        </TabPane>
        <TabPane tab="Coming Soon" key="3">
        </TabPane>
        <TabPane tab={<DropDown handleGenre={handleGenre} genres={genres}/>} key="4">
        </TabPane>
      </Tabs>
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
};
