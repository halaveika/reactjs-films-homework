import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Layout, Input } from 'antd';

import PropTypes from 'prop-types';
import './Header.scss';

export default function Header({ SearchData }) {
  const navigate = useNavigate();

  const onSearch = (value) => {
    if(value.trim()){
      SearchData(value);
      navigate('/');
    }
  };

  return (
    <Layout.Header className="header">
      <h1 className="title" onClick={()=>navigate('/')}>
        films
      </h1>
      <Input.Search className="search" onSearch={onSearch} />
    </Layout.Header>
  );
}

Header.propTypes = {
  SearchData: PropTypes.func.isRequired,
};
