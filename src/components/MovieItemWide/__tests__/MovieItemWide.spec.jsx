import React from 'react';
import { create, act } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import MovieItemWide from '../MovieItemWide';

const mockMovieItemProps = {
  id: 2412412,
  title: 'Fight club',
  genres: ['drama', 'sport', 'comedy'],
  vote_average: 8,
  poster: 'image_path',
  overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  getDetails: jest.fn(),
};

jest.spyOn(window, 'scrollTo').mockImplementation();

describe('test MovieItemWide component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const component = create(
    <BrowserRouter>
      <MovieItemWide
        id={mockMovieItemProps.id}
        title={mockMovieItemProps.title}
        genres={mockMovieItemProps.genres}
        vote_average={mockMovieItemProps.vote_average}
        poster={mockMovieItemProps.poster}
        overview={mockMovieItemProps.overview}
        getDetails={mockMovieItemProps.getDetails}
      />
    </BrowserRouter>
    ,
  );

  it('should render MovieItemWide component', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handleDetailPageNavigation should change state', async () => {
    const { root } = component;
    const clickable = root.findByProps({ className: 'overlay' });
    await act(async () => { clickable.props.onClick(); });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
