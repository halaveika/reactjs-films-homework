import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { act } from 'react-test-renderer';
import MovieList from '..';

const mockMovieListProps = {
  items: [{
    id: 2412412,
    title: 'Fight club',
    genres: ['drama', 'sport', 'comedy'],
    vote_average: 8,
    poster: 'image_path',
    overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  },
  {
    id: 41412,
    title: 'Sopranos',
    genres: ['drama', 'Criminal', 'comedy'],
    vote_average: 10,
    poster: 'image_path',
    overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  }],
  video: 'youtube-link',
  handleVideo: jest.fn(),
  getDetails: jest.fn(),
  SearchData: jest.fn(),
  GetGenres: jest.fn(),
};

describe('test MovieList component', () => {
  it('should render MovieList component', async () => {
    const renderer = new ShallowRenderer();
    let result;
    await act(async () => {
      result = renderer.render(
        <MovieList
          items={mockMovieListProps.items}
          video={mockMovieListProps.video}
          handleVideo={mockMovieListProps.handleVideo}
          getDetails={mockMovieListProps.getDetails}
          SearchData={mockMovieListProps.SearchData}
          GetGenres={mockMovieListProps.GetGenres}
        />,
      );
    });
    expect(result).toMatchSnapshot();
  });
});
