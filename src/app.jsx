import React from 'react';
import ListContainer from './components/ListContainer';
import DetailsContainer from './components/DetailsContainer';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <DetailsContainer />
      <ListContainer />
    </>
  );
}
