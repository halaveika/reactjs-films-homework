import React from 'react';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem';
import MovieItemWide from '../MovieItemWide/MovieItemWide';
import itemfilter from '../../utils/itemFilter';
import './MovieListContent.scss';

export default function MovieListContent({
  items, getDetails, setCurrentPage, page, total_results, genre, pageSize, isRow,
}) {
  const itemList = itemfilter(items, genre);
  const list = itemList.map((item) => ((isRow)
    ? (
      <MovieItem
        key={item.id * Math.random()}
        id={item.id}
        title={item.title}
        genres={item.genres}
        vote_average={item.vote_average}
        poster={item.poster}
        overview={item.overview}
        getDetails={getDetails}
      />
    )
    : (
      <MovieItemWide
        key={item.id * Math.random()}
        id={item.id}
        title={item.title}
        genres={item.genres}
        vote_average={item.vote_average}
        poster={item.poster}
        overview={item.overview}
        getDetails={getDetails}
      />
    )));

  return (
    <>
      {
    (itemList.length)
      ? (
        <>
          {list}
          <Pagination
            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} films`}
            className="pagination"
            current={page}
            total={total_results}
            onChange={setCurrentPage}
            defaultPageSize={pageSize}
            pageSizeOptions={[20, 40, 60]}
            responsive
          />
        </>
      )
      : <span className="noresult-msg"> No result! </span>
  }
    </>
  );
}

MovieListContent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    vote_average: PropTypes.number,
    poster: PropTypes.string,
    overview: PropTypes.string,
  })).isRequired,
  getDetails: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  total_results: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
  isRow: PropTypes.bool.isRequired,
};
