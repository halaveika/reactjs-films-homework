import React  from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import './Footer.scss';

export default function Footer({isMoved}) {
 
  return (
    <Layout.Footer className={`footer${(isMoved) ? ' moved' : ''}` }>
      <span className="title">films</span>
      <span className="copyright">COPYRIGHT © 2021 Films  HALAVEIKA ALIAKSANDR</span>
    </Layout.Footer>
  );
}

Footer.propTypes = {
  isMoved: PropTypes.bool.isRequired,
};
