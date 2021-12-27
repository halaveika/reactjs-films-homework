import React from 'react';
import PropTypes from 'prop-types';
import './MovieInfo.scss';

export default function MovieInfo({
  title, genres, vote_average, active,
}) {
  return (
    <div className={`movie-item-container${(active) ? '__active' : ''}`}>
      <span className="movie-item_title">
        {title}
      </span>
      <span className="movie-item_vote-average">
        {vote_average}
      </span>
      <span className="movie-item_genre">
        {genres.map((e) => e).slice(0, 3).join(', ')}
      </span>
    </div>
  );
}

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  vote_average: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
};
