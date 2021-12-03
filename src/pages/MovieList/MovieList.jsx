import React,{useEffect, useState} from 'react';
import { Layout } from 'antd';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieItem from '../../components/MovieItem';
import Filter from '../../components/Filter';
import Footer from '../../components/Footer';
import './MovieList.scss';


export default function MovieList({
  items, video, handleVideo, getDetails,
}) {
  const location = useLocation()
  useEffect(() => {},[location]);
  const [isRow, setRow] = useState(true);

  function handlRow(){
    setRow(true);
  }

  function handleColumn(){
    setRow(false);
  }

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
    <>
      <Layout className={`movieList-container${(location.pathname !== '/details') ? ' active' : ''}`}>
        <Filter handleColumn={handleColumn} handlRow={handlRow}></Filter>
        <Layout className="movieItem-container" style={(isRow) ? { flexDirection: 'row',alignItems: 'flex-start'}
         :
         { flexDirection: 'column',alignItems: 'center' }}>
        {itemList}
        </Layout>
      </Layout>
      <Footer isMoved={(location.pathname !== '/details') ? true : false}/>
    </>
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
