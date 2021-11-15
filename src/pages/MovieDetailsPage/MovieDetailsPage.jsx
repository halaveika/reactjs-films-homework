import React, { useState } from 'react';
import { Layout } from 'antd';
import InfoBar from '../../components/InfoBar';
import NavBar from '../../components/NavBar';
import Header from '../../components/Header';
import './MovieDetailsPage.scss';

export default function MovieDetailsPage() {
  const mockData = {
    original_title: 'the jungle book',
    genres: [{
      id: 13,
      name: 'Adventure',
    }, {
      id: 18,
      name: 'Drama',
    }, {
      id: 20,
      name: 'Family',
    }, {
      id: 21,
      name: 'Fantasy',
    }],
    vote_average: 4.8,
    runtime: 139,
    overview: 'There are growing dangers in the wizarding world of 1926 New York. Something mysterious is leaving a path of destruction in the streets, threatening to expose the wizarding',
  };
  /* eslint-disable */
  const [filmDetails, setFilmDetails] = useState(mockData);
  /* eslint-enable */
  return (
    <Layout className="movieDetails-container">
      <img className="movieDetails-image" src="/assets/images/cover-image.jpg" alt="wallpaper" />
      <Header />
      <Layout.Content className="movieDetails-content">
        <InfoBar
          original_title={filmDetails.original_title}
          genres={filmDetails.genres}
          vote_average={filmDetails.vote_average}
          runtime={filmDetails.runtime}
        />
        <NavBar
          overview={filmDetails.overview}
        />
      </Layout.Content>
    </Layout>
  );
}
