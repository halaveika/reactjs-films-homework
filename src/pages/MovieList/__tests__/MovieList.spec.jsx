import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import '../../../utils/matchMedia';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import MovieList from '..';

const resizeWindow = (x) => {
  window.innerWidth = x;
  window.dispatchEvent(new Event('resize'));
};

const mockMovieListProps = {
  items: [{
    id: 2412412,
    title: 'Fight club',
    genres: ['Drama', 'Sport', 'Comedy'],
    vote_average: 8,
    poster: 'image_path',
    overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 41412,
    title: 'Sopranos',
    genres: ['Drama', 'Criminal', 'comedy'],
    vote_average: 10,
    poster: 'image_path',
    overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  }],
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
  isLoading: false,
  filter: 'TRENDING',
  page: 1,
  total_results: 2,
  total_pages: 1,
  searchValue: '',
  isRow: true,
  genre: 'Drama',
  pageSize: 20,
  handleVideo: jest.fn(),
  getDetails: jest.fn(),
  getContent: jest.fn(),
  GetGenres: jest.fn(),
  setFilter: jest.fn(),
  setCurrentPage: jest.fn(),
  setGenre: jest.fn(),
  setListFlexDirection: jest.fn(),
};

describe('test MovieList component', () => {
  let useEffect;
  const mockUseEffect = () => {
    useEffect.mockImplementationOnce((f) => f());
  };

  beforeEach(() => {
    useEffect = jest.spyOn(React, 'useEffect');
    mockUseEffect();
    mockUseEffect();
  });

  it('should render MovieList component loaded', async () => {
    const renderer = new ShallowRenderer();
    let result;
    await TestRenderer.act(async () => {
      result = renderer.render(
        <MovieList
          items={mockMovieListProps.items}
          video={mockMovieListProps.video}
          genres={mockMovieListProps.genres}
          isLoading={mockMovieListProps.isLoading}
          filter={mockMovieListProps.filter}
          page={mockMovieListProps.page}
          total_pages={mockMovieListProps.total_pages}
          searchValue={mockMovieListProps.searchValue}
          isRow={mockMovieListProps.isRow}
          genre={mockMovieListProps.genre}
          handleVideo={mockMovieListProps.handleVideo}
          getDetails={mockMovieListProps.getDetails}
          getContent={mockMovieListProps.getContent}
          GetGenres={mockMovieListProps.GetGenres}
          setFilter={mockMovieListProps.setFilter}
          setCurrentPage={mockMovieListProps.setCurrentPage}
          setGenre={mockMovieListProps.setGenre}
          setListFlexDirection={mockMovieListProps.setListFlexDirection}
          total_results={mockMovieListProps.total_results}
          pageSize={mockMovieListProps.pageSize}
        />,
      );
    });
    expect(result).toMatchSnapshot();
  });

  it('should render MovieList component loading', async () => {
    const renderer = new ShallowRenderer();
    let result;
    await TestRenderer.act(async () => {
      result = renderer.render(
        <MovieList
          items={mockMovieListProps.items}
          video={mockMovieListProps.video}
          genres={mockMovieListProps.genres}
          isLoading
          filter={mockMovieListProps.filter}
          page={mockMovieListProps.page}
          total_pages={mockMovieListProps.total_pages}
          searchValue={mockMovieListProps.searchValue}
          isRow={mockMovieListProps.isRow}
          genre={mockMovieListProps.genre}
          handleVideo={mockMovieListProps.handleVideo}
          getDetails={mockMovieListProps.getDetails}
          getContent={mockMovieListProps.getContent}
          GetGenres={mockMovieListProps.GetGenres}
          setFilter={mockMovieListProps.setFilter}
          setCurrentPage={mockMovieListProps.setCurrentPage}
          setGenre={mockMovieListProps.setGenre}
          setListFlexDirection={mockMovieListProps.setListFlexDirection}
          total_results={mockMovieListProps.total_results}
          pageSize={mockMovieListProps.pageSize}
        />,
      );
    });
    expect(result).toMatchSnapshot();
  });

  it('should render MovieList component in Column oder', async () => {
    const renderer = new ShallowRenderer();
    let result;
    await TestRenderer.act(async () => {
      result = renderer.render(
        <MovieList
          items={mockMovieListProps.items}
          video={mockMovieListProps.video}
          genres={mockMovieListProps.genres}
          isLoading
          filter={mockMovieListProps.filter}
          page={mockMovieListProps.page}
          total_pages={mockMovieListProps.total_pages}
          searchValue={mockMovieListProps.searchValue}
          isRow={false}
          genre={mockMovieListProps.genre}
          handleVideo={mockMovieListProps.handleVideo}
          getDetails={mockMovieListProps.getDetails}
          getContent={mockMovieListProps.getContent}
          GetGenres={mockMovieListProps.GetGenres}
          setFilter={mockMovieListProps.setFilter}
          setCurrentPage={mockMovieListProps.setCurrentPage}
          setGenre={mockMovieListProps.setGenre}
          setListFlexDirection={mockMovieListProps.setListFlexDirection}
          total_results={mockMovieListProps.total_results}
          pageSize={mockMovieListProps.pageSize}
        />,
      );
    });
    expect(result).toMatchSnapshot();
  });

  it('should listen change resize screen less then 640px', async () => {
    let container = null;
    container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      render(
        <MovieList
          items={mockMovieListProps.items}
          video={mockMovieListProps.video}
          genres={mockMovieListProps.genres}
          isLoading
          filter={mockMovieListProps.filter}
          page={mockMovieListProps.page}
          total_pages={mockMovieListProps.total_pages}
          searchValue={mockMovieListProps.searchValue}
          isRow={false}
          genre={mockMovieListProps.genre}
          handleVideo={mockMovieListProps.handleVideo}
          getDetails={mockMovieListProps.getDetails}
          getContent={mockMovieListProps.getContent}
          GetGenres={mockMovieListProps.GetGenres}
          setFilter={mockMovieListProps.setFilter}
          setCurrentPage={mockMovieListProps.setCurrentPage}
          setGenre={mockMovieListProps.setGenre}
          setListFlexDirection={mockMovieListProps.setListFlexDirection}
          total_results={mockMovieListProps.total_results}
          pageSize={mockMovieListProps.pageSize}
        />, container,
      );
    });
    resizeWindow(320);
    expect(window.innerWidth).toBe(320);
    expect(container).toMatchSnapshot();
  });
});
