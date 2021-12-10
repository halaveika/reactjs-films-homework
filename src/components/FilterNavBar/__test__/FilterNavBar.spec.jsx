import React from 'react';
import FilterNavBar from '..';
import { render } from "react-dom";
import { act } from "react-dom/test-utils";

const mockFilterNavBarProps = {
  genres: [{
    id: 13,
    name: 'Adventure',
  }, {
    id: 18,
    name: 'Drama',
  }, {
    id: 20,
    name: 'Family',
  }, {
    id: 21,
    name: 'Fantasy',
  }],
  filter: 'TRENDING',
  getContent: jest.fn(),
  GetGenres: jest.fn(),
  setFilter: jest.fn(),
  setCurrentPage: jest.fn(),
  setGenre: jest.fn(),
};

describe('test FilterNavBar component', () => {
  it("FilterNavBar changes value when clicked TRENDING", async() => {
  let container = null;
  container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    render(
      <FilterNavBar
        genres={mockFilterNavBarProps.genres}
        setGenre={mockFilterNavBarProps.setGenre}
        activeGenre={mockFilterNavBarProps.activeGenre}
        setFilter={mockFilterNavBarProps.setFilter}
        filter={mockFilterNavBarProps.filter}
        setCurrentPage={mockFilterNavBarProps.setCurrentPage}
      />, container);
  });

  const button = document.querySelectorAll(".ant-tabs-tab-btn")[0];
  await act(async() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(container).toMatchSnapshot();
  
  });

  it("FilterNavBar changes value when clicked TOPRATED", async() => {
    let container = null;
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      render(
        <FilterNavBar
          genres={mockFilterNavBarProps.genres}
          setGenre={mockFilterNavBarProps.setGenre}
          activeGenre={mockFilterNavBarProps.activeGenre}
          setFilter={mockFilterNavBarProps.setFilter}
          filter={mockFilterNavBarProps.filter}
          setCurrentPage={mockFilterNavBarProps.setCurrentPage}
        />, container);
    });
  
    const button = document.querySelectorAll(".ant-tabs-tab-btn")[1];
    await act(async() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(container).toMatchSnapshot();      
  });

  it("FilterNavBar changes value when clicked COMINGSOON", async() => {
    let container = null;
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      render(
        <FilterNavBar
          genres={mockFilterNavBarProps.genres}
          setGenre={mockFilterNavBarProps.setGenre}
          activeGenre={mockFilterNavBarProps.activeGenre}
          setFilter={mockFilterNavBarProps.setFilter}
          filter={mockFilterNavBarProps.filter}
          setCurrentPage={mockFilterNavBarProps.setCurrentPage}
        />, container);
    });
  
    const button = document.querySelectorAll(".ant-tabs-tab-btn")[2];
    await act(async() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(container).toMatchSnapshot();      
  });

  it("FilterNavBar changes value when clicked GENRE", async() => {
    let container = null;
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      render(
        <FilterNavBar
          genres={mockFilterNavBarProps.genres}
          setGenre={mockFilterNavBarProps.setGenre}
          activeGenre={mockFilterNavBarProps.activeGenre}
          setFilter={mockFilterNavBarProps.setFilter}
          filter={mockFilterNavBarProps.filter}
          setCurrentPage={mockFilterNavBarProps.setCurrentPage}
        />, container);
    });
  
    const button = document.querySelectorAll(".ant-tabs-tab-btn")[3];
    await act(async() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(container).toMatchSnapshot();      
  });

});
