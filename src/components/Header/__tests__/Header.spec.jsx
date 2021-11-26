import React from 'react';
import { create, act } from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow'
import Header from '..';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
const SearchData = jest.fn(() => true);


describe('test Header component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  
  
  it('should render Header component', () => {
    const component = create(
      <BrowserRouter>
        <Header SearchData={SearchData} />
      </BrowserRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('h1 should handle onclick', () => {
    const component = create(
      <BrowserRouter>
        <Header SearchData={SearchData} />
      </BrowserRouter>
    );

    const { root } = component;

    const title = root.findByProps({ className: 'title' });

    act(() => { title.props.onClick(); });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('input should handle onclick', () => {
    // const renderer = new ShallowRenderer()
    // const result = renderer.render(
    //   <BrowserRouter>
    //     <Header SearchData={SearchData} />
    //   </BrowserRouter>
    // )
    // expect(result).toMatchSnapshot()

    const component = create(
      <BrowserRouter>
        <Header SearchData={SearchData} />
      </BrowserRouter>
    );
    const { root } = component;
    const input = root.findAllByType('input')[0];
    const button = root.findAllByType('button')[0];
 
    console.dir(button.props);
    console.dir(button.props.children);
    (async ( ) => {
      await act(() =>{
        input.props.onChange('test');
        button.props.onClick();
        } );
    });
 

    // act(async() => await input.props.onChange('test'));
    // act(async() => await button.props.onClick());
    const tree = component.toJSON();
    expect(SearchData).toBeCalled();
  });
});
