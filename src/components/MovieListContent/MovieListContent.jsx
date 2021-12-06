import React from 'react';
import { Pagination } from 'antd';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem';
import itemfilter from '../../utils/itemFilter';
import './MovieListContent.scss';


export default function MovieListContent({items, video, handleVideo, getDetails, setCurrentPage, page, total_pages,genre}) {
 
  const itemList = itemfilter(items,genre);
  const list = itemList.map((item) => (
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
    {
    (itemList.length) ?
    <>
      {list}
      <Pagination className="pagination" showSizeChanger={true} current={page} total={total_pages} onChange={setCurrentPage} showSizeChanger={false}/>
    </>
    :
      <span className="noresult-msg"> No result! </span>
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
  video: PropTypes.string.isRequired,
  handleVideo: PropTypes.func.isRequired,
  getDetails: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  total_pages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
};
