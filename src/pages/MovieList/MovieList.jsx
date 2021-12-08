import React,{useEffect} from 'react';
import { Layout, Spin } from 'antd';
import PropTypes from 'prop-types';
import Filter from '../../components/Filter';
import Footer from '../../components/Footer';
import MovieListContent from '../../components/MovieListContent'
import './MovieList.scss';


const MovieList = ({
  items, video, handleVideo, getDetails, genres, getContent, isLoading, GetGenres, setFilter, filter, setCurrentPage, page, total_results,searchValue, isRow, genre, setGenre, setListFlexDirection,pageSize
}) => {

  useEffect(() => {
    GetGenres();

  },[]);
  
  useEffect(() => {
      getContent()
  },[page,filter,searchValue,pageSize]);
    

 
  return (
    <>
      <Layout className="movieList-container">
        <Filter 
          setListFlexDirection={setListFlexDirection}
          genres={genres}
          getContent={getContent}
          setGenre={setGenre}
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
          total_results={total_results}
          genre={genre}
          pageSize={pageSize}
        /> :
        <Spin tip="Loading...">
        </Spin>
      }
        </Layout>
      </Layout>
      <Footer/>
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
  total_results: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  GetGenres: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  isRow: PropTypes.bool.isRequired,
  genre: PropTypes.string.isRequired,
  setGenre: PropTypes.func.isRequired,
  setListFlexDirection: PropTypes.func.isRequired,
  pageSize: PropTypes.number.isRequired,
};

export default MovieList;
