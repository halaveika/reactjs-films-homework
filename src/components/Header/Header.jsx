import React from 'react';
import { Layout, Input } from 'antd';
import './Header.scss';

export default function Header() {
  const onSearch = (value) => console.log(value);

  return (
    <Layout.Header className="header">
      <h1 className="title">films</h1>
      <Input.Search className="search" onSearch={onSearch} />
    </Layout.Header>
  );
}
