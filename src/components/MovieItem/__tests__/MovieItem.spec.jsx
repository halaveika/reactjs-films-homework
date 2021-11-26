import React from 'react';
import { create, act } from 'react-test-renderer';
import MovieItem from '../MovieItem';

import { BrowserRouter } from 'react-router-dom';

const mockMovieItemProps = {
  id: 2412412,
  title: 'Fight club',
  genres: ['drama', 'sport', 'comedy'],
  vote_average: 8,
  poster: 'image_path',
  overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  video: 'youtube-link',
  handleVideo: jest.fn(),
  getDetails: jest.fn(),
};

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
      video={mockMovieItemProps.video}
      handleVideo={mockMovieItemProps.handleVideo}
      getDetails={mockMovieItemProps.getDetails}
      />
    </BrowserRouter>
 ,
  );

  it('should render MovieItem component', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('toggleHover should change state', () => {
    const { root } = component;
    const moveiItem = root.findByType('div');
    act(() => { moveiItem.props.onMouseEnter(); });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('toggleActive should change state', () => {
    const { root } = component;

    const buttons = root.findAllByType('button');

    act(() => { buttons[1].props.onClick(); });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


  it('handleDetailPageNavigation should execut', () => {
    const { root } = component;

    const clickable = root.findByProps({ className: 'overlay__active' });

    act(() => { clickable.props.onClick(); });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
