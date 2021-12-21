import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import MovieInfo from '../MovieInfo';
import WatchVideoModal from '../WatchVideoModal';
import './MovieItemWide.scss';

export default function MovieItemWide({
  id, title, genres, vote_average, poster, overview, getDetails,
}) {
  const navigate = useNavigate();

  const handleDetailPageNavigation = async () => {
    await getDetails(id);
    navigate('/details');
  };

  return (
    <div className="movie-item-wide-container">
      <div className="overlay" onClick={handleDetailPageNavigation} />
      <Card className="movie-item-wide">
        <img className="poster" alt="Poster!" src={poster} />
        <WatchVideoModal id={id}>
          <Button className="watch-btn" type="primary" shape="circle">
            <CaretRightOutlined
              className="icon"
              style={{ fontSize: '250%' }}
            />
          </Button>
        </WatchVideoModal>
        <MovieInfo
          active={false}
          className="movie-info__active"
          title={title}
          genres={genres}
          vote_average={vote_average}
        />

      </Card>
      <span className="overview">{overview}</span>
    </div>

  );
}

MovieItemWide.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  vote_average: PropTypes.number,
  poster: PropTypes.string,
  overview: PropTypes.string,
  getDetails: PropTypes.func.isRequired,
};
