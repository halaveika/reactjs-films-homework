import React from 'react';
import { create, act } from 'react-test-renderer';
import DropDown from '../DropDown';
// import { render, unmountComponentAtNode } from "react-dom";
// import { act } from "react-dom/test-utils";

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
  it('should render DropDown component', () => {
    const component = create(
      <DropDown
      genres={genres}
      setGenre={setGenre}
      />,);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('should handle onClick dropdown span', async() => {
  //   let component;
  //   act(() =>{component = create(
  //     <DropDown
  //     genres={genres}
  //     setGenre={setGenre}
  //     />,)});
  //   const { root } = component;
  //   console.dir(root);
  //   const clickable = await root.findByType('span');
  //   // const clickable = root.findByProps({ className: 'ant-dropdown-link' });
  //   await act(async() => clickable.props.onClick());
  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  // it("changes value when clicked", async() => {
  //   let container = null;
  //   container = document.createElement("div");
  //   document.body.appendChild(container);
  //   act(() => {
  //     render(
  //       <DropDown
  //       genres={genres}
  //       tGenre={setGenre} 
  //       />
  //     , container);
  //   });
  
  //   const button = document.querySelector(".ant-dropdown-link");
  //   await act(async() => {
  //     button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  //   });
  //   expect(container).toMatchSnapshot();
    
  //   });
});
