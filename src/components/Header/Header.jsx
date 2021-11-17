import React from 'react';
import { Layout, Input } from 'antd';
import './Header.scss';

export default function Header({ addSearchResult }) {
  return (
    <Layout.Header className="header">
      <h1 className="title">
        films
      </h1>
      <Input.Search className="search" onSearch={addSearchResult} />
    </Layout.Header>
  );
}
