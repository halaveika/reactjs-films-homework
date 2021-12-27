import React from 'react';
import { Layout } from 'antd';
import HeaderContainer from './components/HeaderContainer';
import AppRouter from './components/AppRouter';

export default function App() {
  return (
    <Layout className="container">
      <HeaderContainer />
      <AppRouter />
    </Layout>
  );
}
