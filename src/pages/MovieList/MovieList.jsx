import React,{useEffect, useState} from 'react';
import { Layout, Spin } from 'antd';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Filter from '../../components/Filter';
import Footer from '../../components/Footer';
import MovieListContent from '../../components/MovieListContent'
import './MovieList.scss';


export default function MovieList({
  items, video, handleVideo, getDetails, genres, getContent, isLoading, isInitialisated, GetGenres, getInitialisated, setFilter, filter, setCurrentPage, page, total_pages,searchValue
}) {
 
  const [isRow, setRow] = useState(true);
  const [genre, setGenre] = useState('');
  const location = useLocation('/')
  useEffect(() => {
    if (isInitialisated) {
      getContent()
    }},[page,filter,searchValue]);
    
  useEffect(() => {
    if (!isInitialisated) {
      GetGenres();
      getContent()
      getInitialisated();
    }
    },[]);

  function handlRow(){
    setRow(true);
  }

  function handleColumn(){
    setRow(false);
  }

  function handleGenre(name){
    setGenre(name);
  }

    
  return (
    <>
      <Layout className={`movieList-container${(location.pathname !== '/details') ? ' active' : ''}`}>
        <Filter 
          handleColumn={handleColumn}
          handlRow={handlRow}
          genres={genres}
          getContent={getContent}
          handleGenre={handleGenre}
          activeGenre={genre}
          setFilter={setFilter}
          filter={filter}
          setCurrentPage={setCurrentPage}
          >
        </Filter>
        <Layout className="movieItem-container" style={(isRow) ? { flexDirection: 'row',alignItems: 'center'}
         :
         { flexDirection: 'column',alignItems: 'center' }}>
      { (!isLoading) ?
        <MovieListContent
          items={items}
          video={video}
          handleVideo={handleVideo}
          getDetails={getDetails}
          setCurrentPage={setCurrentPage}
          page={page}
          total_pages={total_pages}
          genre={genre}
        /> :
        <Spin tip="Loading...">
        </Spin>
      }
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
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string})),
  getContent: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  total_pages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  isInitialisated: PropTypes.bool.isRequired,
  getInitialisated: PropTypes.func.isRequired,
  GetGenres: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
};
