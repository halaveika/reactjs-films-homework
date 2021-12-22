import React from 'react';
import { Layout, Spin } from 'antd';
import PropTypes from 'prop-types';
import Filter from '../../components/Filter';
import Footer from '../../components/Footer';
import MovieListContent from '../../components/MovieListContent';
import './MovieList.scss';

const MovieList = ({
  items, getDetails, genres, getContent, isLoading, GetGenres, setFilter, filter,
  setCurrentPage, page, total_results, searchValue, isRow, genre, setGenre, setListFlexDirection, pageSize,
}) => {
  React.useEffect(() => {
    GetGenres();
  }, []);

  React.useEffect(() => {
    getContent();
  }, [page, filter, searchValue, pageSize]);

  React.useEffect(() => {
    const mql = window.matchMedia('(min-width:640px)');
    mql.addEventListener('change', setListFlexDirection);
  }, []);

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
          isRow={isRow}
        />
        <Layout
          className="movieItem-container"
          style={(isRow) ? { flexDirection: 'row', alignItems: 'center' }
            : { flexDirection: 'column', alignItems: 'center' }}
        >
          { (!isLoading)
            ? (
              <MovieListContent
                items={items}
                getDetails={getDetails}
                setCurrentPage={setCurrentPage}
                page={page}
                total_results={total_results}
                genre={genre}
                pageSize={pageSize}
                isRow={isRow}
              />
            )
            : <Spin tip="Loading..." />}
        </Layout>
      </Layout>
      <Footer />
    </>
  );
};

MovieList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    vote_average: PropTypes.number,
    poster: PropTypes.string,
    overview: PropTypes.string,
  })).isRequired,
  getDetails: PropTypes.func.isRequired,
  genres: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
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
