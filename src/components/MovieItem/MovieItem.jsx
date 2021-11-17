import React from 'react';
import { Layout, Card } from 'antd';
import { BACKDROP_PATH_URL } from '../../constants';
import './MovieItem.scss';

export default function MovieItem({
  title, genres, vote_average, poster, overview, image,
}) {
  return (
    <Card className="movie-item">
      <img alt="Poster!" src={`${BACKDROP_PATH_URL}${poster}`} />
      <div className="movie-item-container">
        <span className="movie-item_title">
          {title}
        </span>
        <span className="movie-item_vote-average">
          {vote_average}
        </span>
        <span className="movie-item_genre">
          {genres.map((e) => e).join('  ')}
        </span>
      </div>
    </Card>
  );
}
