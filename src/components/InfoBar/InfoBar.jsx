import React from 'react';
import PropTypes from 'prop-types';
import secondsToHoursMinutes from '../../utils/secondsToHoursMinutes';
import './InfoBar.scss';

export default function InfoBar({
  title, genres, runtime, vote_average,
}) {
  return (
    <div className="info-container">
      <span className="title">
        {title}
      </span>
      <span className="genre">
        {`${genres.join('  ')} | ${secondsToHoursMinutes(runtime)}`}
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

/* eslint-disable */
InfoBar.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  runtime: PropTypes.number.isRequired,
  vote_average: PropTypes.number,
};
      /* eslint-enable */
