import React, { useState } from 'react';
import { Layout } from 'antd';
import InfoBar from '../../components/InfoBar';
import NavBar from '../../components/NavBar';
import { BACKDROP_PATH_URL } from '../../constants';
import './MovieDetailsPage.scss';

export default function MovieDetailsPage({id, title, genres, vote_average, poster, overview, runtime, video, GetVideoUrl }) {

  return (
    <Layout className="movieDetails-container">
      <img className="movieDetails-image" src={`${BACKDROP_PATH_URL}${poster}`} alt="wallpaper" />

      <Layout.Content className="movieDetails-content">
        <InfoBar
          title={title}
          genres={genres}
          vote_average={vote_average}
          runtime={runtime}
        />
        <NavBar
          overview={overview}
          video={video}
          GetVideoUrl={GetVideoUrl}
          id={id}
        />
      </Layout.Content>
    </Layout>
  );
}
