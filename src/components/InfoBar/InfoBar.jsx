import React from 'react';
import PropTypes from 'prop-types';
import './InfoBar.scss';

export default function InfoBar({
  original_title, genres, runtime, vote_average,
}) {
  return (
    <div className="info-container">
      <span className="title">
        {original_title}
      </span>
      <span className="genre">
        {genres.map((e) => e.name).join('  ')}
        {' '}
        |
        {runtime}
      </span>
      <div className="popularity">
        {Array(Math.round(vote_average)).fill(1).map((e, i) => <div className="star" key={i} />)}
        <span>
          {vote_average}
        </span>
      </div>
    </div>
  );
}

InfoBar.propTypes = {
  original_title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  runtime: PropTypes.number.isRequired,
  vote_average: PropTypes.number.isRequired,
};
