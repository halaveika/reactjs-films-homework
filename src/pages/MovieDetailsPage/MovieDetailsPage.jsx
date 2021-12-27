import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import InfoBar from '../../components/InfoBar';
import NavBar from '../../components/NavBar';
import './MovieDetailsPage.scss';

export default function MovieDetailsPage({
  id, title, genres, vote_average, backdrop, overview, runtime,
}) {
  return (
    <Layout className="movieDetails">
      <img className="movieDetails-image" src={backdrop} alt="wallpaper" />
      <Layout.Content className="movieDetails-container">
        <InfoBar
          title={title}
          genres={genres}
          vote_average={vote_average}
          runtime={runtime}
        />
        <NavBar
          overview={overview}
          id={id}
        />
      </Layout.Content>
    </Layout>
  );
}

MovieDetailsPage.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  vote_average: PropTypes.number,
  backdrop: PropTypes.string,
  overview: PropTypes.string,
  runtime: PropTypes.number,
};
