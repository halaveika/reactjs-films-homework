import React,{useEffect, useState} from 'react';
import { Layout, Spin, Alert } from 'antd';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieItem from '../../components/MovieItem';
import Filter from '../../components/Filter';
import Footer from '../../components/Footer';
import itemfilter from '../../utils/itemFilter';
import './MovieList.scss';


export default function MovieList({
  items, video, handleVideo, getDetails, genres, getTrending,getTopRated, getUpcoming, isLoading, isInitialisated, GetGenres, getInitialisated, setFilter, filter
}) {
 
  const [isRow, setRow] = useState(true);
  const [genre, setGenre] = useState('');
  const location = useLocation('/')
  useEffect(() => {},[location,genre]);
    
    useEffect(() => {
    if (!isInitialisated) {
      console.log(isInitialisated);
      GetGenres();
      getTrending();
      getInitialisated();
    }
  },
  []);

  function handlRow(){
    setRow(true);
  }

  function handleColumn(){
    setRow(false);
  }

  function handleGenre(name){
    setGenre(name);
  }

  let content;
  const itemList = itemfilter(items,genre);
  if (itemList.length) {
    content = itemList.map((item) => (
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
  } else {
    console.log('no result');
    content= (<span className="noresult-msg"> No result! </span>);
  }
  
  return (
    <>
      <Layout className={`movieList-container${(location.pathname !== '/details') ? ' active' : ''}`}>
        <Filter 
          handleColumn={handleColumn}
          handlRow={handlRow}
          genres={genres}
          getTrending={getTrending}
          getTopRated={getTopRated}
          getUpcoming={getUpcoming}
          handleGenre={handleGenre}
          activeGenre={genre}
          setFilter={setFilter}
          filter={filter}
          >
        </Filter>
        <Layout className="movieItem-container" style={(isRow) ? { flexDirection: 'row',alignItems: 'center'}
         :
         { flexDirection: 'column',alignItems: 'center' }}>
      { (!isLoading) ?
        content :
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
  getTrending: PropTypes.func.isRequired,
  getTopRated: PropTypes.func.isRequired,
  getUpcoming: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
