import React from 'react';
import './InfoBar.scss';

export default function InfoBar() {
  const info = {
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
  };
  return (
    <div className="info-container">
      <span className="title">
        {info.original_title}
      </span>
      <span className="genre">
        {info.genres.map((e) => e.name).join('  ')}
        {' '}
        |
        {info.runtime}
      </span>
      <div className="popularity">
        {Array(Math.round(info.vote_average)).fill(1).map((e, i) => <div className="star" key={i} />)}
        <span>
          {info.vote_average}
        </span>
      </div>
    </div>
  );
}
