import React from 'react';
import { Layout, Input } from 'antd';
import InfoBar from '../../components/InfoBar';
import NavBar from '../../components/NavBar';
import './MovieDetailsPage.scss';

export default function MovieDetailsPage() {
  return (
    <Layout className="movieDetails-container">
      <img className="movieDetails-image" src="/images/cover-image.jpg" alt="wallpaper" />
      <Layout.Header className="header">
        <h1 className="title">films</h1>
        <Input className="search" />
      </Layout.Header>
      <Layout.Content className="movieDetails-content">
        <InfoBar />
        <NavBar />
      </Layout.Content>
    </Layout>
  );
}
