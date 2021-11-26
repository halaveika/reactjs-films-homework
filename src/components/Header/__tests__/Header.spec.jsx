import React from 'react';
import { create, act } from 'react-test-renderer';
import Header from '..';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
const SearchData = jest.fn();


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
});
