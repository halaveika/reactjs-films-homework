import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { BACKDROP_PATH_URL } from '../../constants';
import MovieInfo from '../MovieInfo';
import WatchVideoModal from '../WatchVideoModal';
import './MovieItem.scss';

export default function MovieItem({
  id, title, genres, vote_average, poster, overview, video, handleVideo, getDetails,
}) {
  const navigate = useNavigate();
  const [ownState, setState] = useState(
    {
      hovered: false,
      active: false,
    },
  );

  const toggleHover = () => setState({ ...ownState, hovered: !ownState.hovered, active: false });
  const toggleActive = () => setState({ ...ownState, active: true });

  const handleDetailPageNavigation = async () => {
    await getDetails(id);
    navigate('/details');
  };

  return (
  /* eslint-disable */
    <Card
      className={`movie-item${(ownState.hovered) ? '__hovered' : ''}`}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <div className={`overlay${(ownState.active) ? '__active' : ''}`} onClick={handleDetailPageNavigation} />
      <img className={`poster${(ownState.active) ? '__active' : ''}`} alt="Poster!" src={`${BACKDROP_PATH_URL}${poster}`} />
      {
  
      (ownState.hovered)
        ? (!ownState.active)
          ? (
            <>
              <WatchVideoModal video={video} handleVideo={handleVideo} id={id}>
                <Button className="watch-btn" type="primary" shape="circle"><CaretRightOutlined className="icon" style={{ fontSize: '250%' }} /></Button>
              </WatchVideoModal>
              <Button className="more-btn" onClick={toggleActive}>View Info</Button>
            </>
          )
          : (
            <WatchVideoModal video={video} handleVideo={handleVideo} id={id}>
              <Button className="watch-btn__active" type="primary">Watch Now</Button>
            </WatchVideoModal>
          )

        : ''
      /* eslint-enable */
        }
      {(ownState.active)
        ? (
          <>
            <MovieInfo active className="movie-info__active" title={title} genres={genres} vote_average={vote_average} />
            <span className="overview">{overview}</span>
          </>
        )
        : <MovieInfo active={false} className="movie-info" title={title} genres={genres} vote_average={vote_average} />}
    </Card>

  );
}

/* eslint-disable */
MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  vote_average: PropTypes.number,
  poster: PropTypes.string,
  overview: PropTypes.string,
  video: PropTypes.string.isRequired,
  handleVideo: PropTypes.func.isRequired,
  getDetails: PropTypes.func.isRequired,
};
      /* eslint-enable */
