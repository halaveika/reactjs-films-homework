import React from "react";
import ListContainer from '../components/ListContainer';
import DetailsContainer from '../components/DetailsContainer';

export const routes = [
  {path: '/', element: <ListContainer/>},
  {path: '/details', element: 
    <>
      <DetailsContainer/>
      <ListContainer/>
    </>
  },
]
