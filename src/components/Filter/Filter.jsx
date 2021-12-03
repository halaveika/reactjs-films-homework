import React from 'react';
import { PageHeader} from 'antd';
import FilterNavBar from '../FilterNavBar';
import PropTypes from 'prop-types';
import ColumnsBtn from '../ColumnsBtn'
import RowsBtn from '../RowsBtn';
import './Filter.scss';

export default function Filter() {
  return (
    <PageHeader ghost className="site-page-header">
      <FilterNavBar></FilterNavBar>
      <div class="btn-container">
        <RowsBtn></RowsBtn>
        <ColumnsBtn></ColumnsBtn>
      </div>
    </PageHeader>
  );
}


