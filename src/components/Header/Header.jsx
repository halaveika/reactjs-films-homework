import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Input } from 'antd';
import PropTypes from 'prop-types';
import './Header.scss';

export default function Header({
  isInitialisated, getInitialisated, SearchData, GetGenres,
}) {
  /* eslint-disable */
  useEffect(() => {
    if (!isInitialisated) {
      SearchData('Hello');
      GetGenres();
      getInitialisated();
    }
  },
  []);
    /* eslint-enable */
  return (
    <Layout.Header className="header">
      <Link to="/">
        <h1 className="title">
          films
        </h1>
      </Link>
      <Link className="search" to="/"><Input.Search className="search" onSearch={ SearchData } /></Link>
    </Layout.Header>
  );
}

Header.propTypes = {
  isInitialisated: PropTypes.bool.isRequired,
  getInitialisated: PropTypes.func.isRequired,
  SearchData: PropTypes.func.isRequired,
  GetGenres: PropTypes.func.isRequired,
};
