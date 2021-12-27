import React, { useState } from 'react';
import { Layout, Input } from 'antd';
import './Header.scss';

export default function Header() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Layout.Header className="header">
      <h1 className="title">
        films
        {searchValue}
      </h1>
      <Input.Search className="search" onSearch={setSearchValue} />
    </Layout.Header>
  );
}
