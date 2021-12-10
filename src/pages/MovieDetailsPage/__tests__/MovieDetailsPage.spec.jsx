import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { act } from 'react-test-renderer';
import MovieDetailsPage from '..';

const mockDetailsProps = {
  id: 2412412,
  title: 'Fight club',
  genres: ['drama', 'sport', 'comedy'],
  vote_average: 8,
  poster: 'image_path',
  overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  runtime: 120,
  video: 'youtube-link',
  GetVideoUrl: jest.fn(),
};

describe('test MovieDetailsPage component', () => {
  it('should render MovieDetailsPage component', () => {
    const renderer = new ShallowRenderer();
    let result;
    act(() => {
      result = renderer.render(
        <MovieDetailsPage
          id={mockDetailsProps.id}
          title={mockDetailsProps.title}
          genres={mockDetailsProps.genres}
          vote_average={mockDetailsProps.vote_average}
          poster={mockDetailsProps.poster}
          overview={mockDetailsProps.overview}
          runtime={mockDetailsProps.runtime}
          video={mockDetailsProps.video}
          GetVideoUrl={mockDetailsProps.GetVideoUrl}
        />,
      );
    });
    expect(result).toMatchSnapshot();
  });
});
