import React from 'react';
import { PageHeader} from 'antd';
import FilterNavBar from '../FilterNavBar';
import PropTypes from 'prop-types';
import ColumnsBtn from '../ColumnsBtn'
import RowsBtn from '../RowsBtn';
import './Filter.scss';

export default function Filter({handleColumn, handlRow}) {
  return (
    <PageHeader ghost className="site-page-header">
      <FilterNavBar></FilterNavBar>
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
};
