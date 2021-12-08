import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Input } from 'antd';
import PropTypes from 'prop-types';
import './Header.scss';

export default function Header({setCurrentPage,setFilter,setSearchValue,pageSize}) {

  function callback(value) {
    setCurrentPage(1,pageSize);
    setFilter('');
    setSearchValue(value.trim());
  }

  return (
    <Layout.Header className="header">
      <Layout className="header-container">
            <Link to="/">
          <h1 className="title">
            films
          </h1>
        </Link>
        <Input.Search className="search" onSearch={callback} />
      </Layout>
    </Layout.Header>
  );
}

Header.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  setSearchValue: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
};
