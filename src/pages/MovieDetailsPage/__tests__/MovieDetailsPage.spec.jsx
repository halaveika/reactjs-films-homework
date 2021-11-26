import React from 'react';
import { create } from 'react-test-renderer';
import '../../../utils/matchMedia';
import MovieDetailsPage from '..';

const mockDetailsProps = {
  id: 2412412,
  title: 'Fight club',
  genres: ['drama', 'sport', 'comedy'],
  vote_average: 8,
  poster: 'image_path',
  overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  runtime: 120,
  video: 'youtube-link',
  GetVideoUrl: jest.fn(),
};

describe('test MovieDetailsPage component', () => {
  it('should render MovieDetailsPage component', () => {
    const component = create(
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
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
