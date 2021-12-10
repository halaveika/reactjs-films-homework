import React from 'react';
import DropDown from '../DropDown';
import { render } from "react-dom";
import { act } from "react-dom/test-utils";

const genres = [{
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
}];
const setGenre = jest.fn();

describe('test DropDown component', () => {
  let container = null;
  it("render DropDown and handle click", async() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    act(() => {
      render(
        <DropDown
        genres={genres}
        setGenre={setGenre} 
        />
      , container);
    });
  
    const button = document.querySelector(".ant-dropdown-link");
    await act(async() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(container).toMatchSnapshot();
  });

  it("handle click on menu-item", async() => {
    const button = document.querySelectorAll(".menu-item")[1];
    await act(async() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(container).toMatchSnapshot();
  });

  it("handle click on menu-item All", async() => {
    const button = document.querySelector(".ant-dropdown-link");
    await act(async() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    const button2 = document.querySelectorAll(".menu-item")[0];
    await act(async() => {
      button2.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(container).toMatchSnapshot();
  });

});
