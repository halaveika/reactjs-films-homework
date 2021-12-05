import React from 'react';
import { PageHeader} from 'antd';
import FilterNavBar from '../FilterNavBar';
import PropTypes from 'prop-types';
import ColumnsBtn from '../ColumnsBtn'
import RowsBtn from '../RowsBtn';
import './Filter.scss';

export default function Filter({handleColumn, handlRow,genres,getTrending,getTopRated, getUpcoming,handleGenre,activeGenre,setFilter,filter}) {
  return (
    <PageHeader ghost className="site-page-header">
      <FilterNavBar
        genres={genres}
        getTrending={getTrending}
        getTopRated={getTopRated}
        getUpcoming={getUpcoming}
        handleGenre={handleGenre}
        activeGenre={activeGenre}
        setFilter={setFilter}
        filter={filter}
        >
      </FilterNavBar>
      <div className="btn-container">
        <RowsBtn handlRow={handlRow}></RowsBtn>
        <ColumnsBtn handleColumn={handleColumn}></ColumnsBtn>
      </div>
    </PageHeader>
  );
}


Filter.propTypes = {
  handlRow: PropTypes.func.isRequired,
  handleColumn: PropTypes.func.isRequired,
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
