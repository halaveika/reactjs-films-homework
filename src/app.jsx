import React from 'react';
import { useLocation } from "react-router-dom";
import HeaderContainer from './components/HeaderContainer';
import AppRouter from './components/AppRouter';



export default function App() {
  return (
    <>
      <HeaderContainer />
      <AppRouter />
    </>
  );
}
