import React from 'react';
import { create, act } from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import MovieItem from '../MovieItem';

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

describe('test MovieItem component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const component = create(
    <BrowserRouter>
      <MovieItem
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

  it('should render MovieItem component', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('toggleHover should change state', async () => {
    const { root } = component;
    const moveiItem = root.findByType('div');
    await act(async () => { moveiItem.props.onMouseEnter(); });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('toggleActive should change state', async () => {
    const { root } = component;

    const buttons = root.findAllByType('button');

    await act(async () => { buttons[1].props.onClick(); });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handleDetailPageNavigation should execut', async () => {
    const { root } = component;

    const clickable = root.findByProps({ className: 'overlay__active' });

    await act(async () => { clickable.props.onClick(); });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
