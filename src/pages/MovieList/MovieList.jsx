import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import MovieItem from '../../components/MovieItem';
import './MovieList.scss';

export default function MovieList({ items, video, handleVideo }) {
  const itemList = items.map((item) => (
    <MovieItem
      key={item.id}
      id={String(item.id)}
      title={item.title}
      genres={item.genres}
      vote_average={item.vote_average}
      poster={item.poster}
      overview={item.overview}
      video={video}
      handleVideo={handleVideo}
    />
  ));

  return (
    <Layout className="movieList-container">
      {itemList}
    </Layout>
  );
}

MovieList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    vote_average: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  })).isRequired,
  video: PropTypes.string.isRequired,
  handleVideo: PropTypes.func.isRequired,
};
