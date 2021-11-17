import React from 'react';
import ListContainer from './components/ListContainer';
import DetailsContainer from './components/DetailsContainer';
import HeaderContainer from './components/HeaderContainer';

export default function App() {
  return (
    <>
      <HeaderContainer />
      <DetailsContainer />
      <ListContainer />
    </>
  );
}
