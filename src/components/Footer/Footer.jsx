import React from 'react';
import { Layout } from 'antd';
import './Footer.scss';

export default function Footer() {
  return (
    <Layout.Footer className="footer">
      <span className="title">films</span>
      <span className="copyright">COPYRIGHT © 2021 Films  HALAVEIKA ALIAKSANDR</span>
    </Layout.Footer>
  );
}
