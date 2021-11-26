import React from 'react';
import ListContainer from '../components/ListContainer';
import DetailsContainer from '../components/DetailsContainer';

const routes = [
  { path: '/', element: <ListContainer /> },
  {
    path: '/details',
    element:
  <>
    <DetailsContainer />
    <ListContainer />
  </>,
  },
];

export default routes;
