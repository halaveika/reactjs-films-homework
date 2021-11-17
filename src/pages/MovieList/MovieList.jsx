import React from 'react';
import { Layout } from 'antd';
import MovieItem from '../../components/MovieItem';
import './MovieList.scss';

export default function MovieList({ items }) {
  console.dir(items);
  const itemList = items.map((item) => (
    <MovieItem
      key={item.id}
      title={item.title}
      genres={item.genres}
      vote_average={item.vote_average}
      poster={item.poster}
      overview={item.overview}
      image={item.image}
    />
  ));

  return (
    <Layout className="movieList-container">
      {itemList}
    </Layout>
  );
}
