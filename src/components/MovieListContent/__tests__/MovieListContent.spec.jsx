import React from 'react';
import { create, act } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import MovieListContent from '../MovieListContent';
import '../../../utils/matchMedia';

const mockMovieListContentProps = {
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
    genres: ['Drama', 'Criminal', 'Comedy'],
    vote_average: 10,
    poster: 'image_path',
    overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  }],
  page: 1,
  total_results: 77,
  genre: 'Drama',
  pageSize: 20,
  getDetails: jest.fn(),
  setCurrentPage: jest.fn(),
};

describe('test MovieListContent component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  let component;
  it('should render MovieListContent component with results as rows', async () => {
    await act(async () => component = create(
      <BrowserRouter>
        <MovieListContent
          items={mockMovieListContentProps.items}
          getDetails={mockMovieListContentProps.getDetails}
          setCurrentPage={mockMovieListContentProps.setCurrentPage}
          page={mockMovieListContentProps.page}
          total_results={mockMovieListContentProps.total_results}
          genre={mockMovieListContentProps.genre}
          pageSize={mockMovieListContentProps.pageSize}
          isRow
        />
      </BrowserRouter>,
    ));
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render MovieListContent no result', async () => {
    await act(async () => component = create(
      <BrowserRouter>
        <MovieListContent
          items={mockMovieListContentProps.items}
          getDetails={mockMovieListContentProps.getDetails}
          setCurrentPage={mockMovieListContentProps.setCurrentPage}
          page={mockMovieListContentProps.page}
          total_results={mockMovieListContentProps.total_results}
          genre="History"
          pageSize={mockMovieListContentProps.pageSize}
          isRow
        />
      </BrowserRouter>,
    ));
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render MovieListContent component with results as columns', async () => {
    await act(async () => component = create(
      <BrowserRouter>
        <MovieListContent
          items={mockMovieListContentProps.items}
          getDetails={mockMovieListContentProps.getDetails}
          setCurrentPage={mockMovieListContentProps.setCurrentPage}
          page={mockMovieListContentProps.page}
          total_results={mockMovieListContentProps.total_results}
          genre={mockMovieListContentProps.genre}
          pageSize={mockMovieListContentProps.pageSize}
          isRow={false}
        />
      </BrowserRouter>,
    ));
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
