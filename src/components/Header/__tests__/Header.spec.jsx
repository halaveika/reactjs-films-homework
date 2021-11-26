import React from 'react';
import { create, act } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from '..';

const SearchData = jest.fn();
const GetGenres = jest.fn();
const getInitialisated = jest.fn();

describe('test Header component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render Header component no isInitialisated', () => {
    let component;
    const isInitialisated = false;
    act(() => {
      component = create(
        <BrowserRouter>
          <Header
            isInitialisated={isInitialisated}
            getInitialisated={getInitialisated}
            GetGenres={GetGenres}
            SearchData={SearchData}
          />
        </BrowserRouter>,
      );
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('input should handle onclick', () => {
    let component;
    const isInitialisated = false;
    /* eslint-disable */
    act(() => {
      component = create(<BrowserRouter>
        <Header
          isInitialisated={isInitialisated}
          getInitialisated={getInitialisated}
          GetGenres={GetGenres}
          SearchData={SearchData}
        />
      </BrowserRouter>);
    });
    const { root } = component;
    const button = root.findAllByType('button')[0];

    (async () => {
      await act(() => {
        button.props.onClick();
      });
    });
  /* eslint-enable */
    expect(SearchData).toBeCalled();
  });

  it('should render Header component isInitialisated', () => {
    let component;
    const isInitialisated = true;
    act(() => {
      component = create(
        <BrowserRouter>
          <Header
            isInitialisated={isInitialisated}
            getInitialisated={getInitialisated}
            GetGenres={GetGenres}
            SearchData={SearchData}
          />
        </BrowserRouter>,
      );
    });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
