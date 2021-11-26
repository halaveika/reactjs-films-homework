import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import MovieItem from '../../components/MovieItem';
import './MovieList.scss';

export default function MovieList({
  items, video, handleVideo, getDetails,
}) {
  const itemList = items.filter((item) => item.poster && !item.poster.includes('null')).slice(0, 15).map((item) => (
    <MovieItem
      key={item.id}
      id={item.id}
      title={item.title}
      genres={item.genres}
      vote_average={item.vote_average}
      poster={item.poster}
      overview={item.overview}
      video={video}
      handleVideo={handleVideo}
      getDetails={getDetails}
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
    title: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    vote_average: PropTypes.number,
    poster: PropTypes.string,
    overview: PropTypes.string,
  })).isRequired,
  video: PropTypes.string.isRequired,
  handleVideo: PropTypes.func.isRequired,
  getDetails: PropTypes.func.isRequired,
};
