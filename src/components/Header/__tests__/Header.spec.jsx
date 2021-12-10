import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '..';
import { render } from "react-dom";
import { act } from "react-dom/test-utils";

const setCurrentPage = jest.fn().mockImplementation(()=>true);
const setFilter = jest.fn().mockImplementation(()=>true);
const setSearchValue = jest.fn().mockImplementation(()=>true);
const pageSize = 20;

describe('test Header component', () => {
  let container = null;
  it("render Header and handle click", async() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      render(
        <BrowserRouter>
          <Header
            pageSize={pageSize}
            setCurrentPage={setCurrentPage}
            setFilter={setFilter}
            setSearchValue={setSearchValue}
          />
        </BrowserRouter>
      , container);
    });
  
    const button = document.querySelector(".ant-input-search-button");
    await act(async() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(container).toMatchSnapshot();
  });

});
