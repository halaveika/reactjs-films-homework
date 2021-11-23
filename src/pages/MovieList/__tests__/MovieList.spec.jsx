import React from 'react';
import { create, act } from 'react-test-renderer';
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
};

describe('test MovieList component', () => {
  it('should render MovieList component', () => {
    const component = create(
      <MovieList
        items={mockMovieListProps.items}
        video={mockMovieListProps.video}
        handleVideo={mockMovieListProps.handleVideo}
      />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
