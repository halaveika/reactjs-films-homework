import React from 'react';
import { PageHeader} from 'antd';
import FilterNavBar from '../FilterNavBar';
import PropTypes from 'prop-types';
import ColumnsBtn from '../ColumnsBtn'
import RowsBtn from '../RowsBtn';
import './Filter.scss';

const Filter = ({ setListFlexDirection,genres,setGenre,activeGenre,setFilter,filter,setCurrentPage}) => {
  return (
    <PageHeader ghost className="site-page-header">
      <FilterNavBar
        genres={genres}
        setGenre={setGenre}
        activeGenre={activeGenre}
        setFilter={setFilter}
        filter={filter}
        setCurrentPage={setCurrentPage}
        >
      </FilterNavBar>
      <div className="btn-container">
        <RowsBtn setListFlexDirection={setListFlexDirection}></RowsBtn>
        <ColumnsBtn setListFlexDirection={setListFlexDirection}></ColumnsBtn>
      </div>
    </PageHeader>
  );
}

Filter.propTypes = {
  setListFlexDirection: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string})),
  setGenre: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
