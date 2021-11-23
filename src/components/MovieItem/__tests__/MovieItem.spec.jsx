import { create, act } from 'react-test-renderer';
import React, { useState } from 'react';
import MovieItem from '../MovieItem';

const realUseState = useState;

const mockMovieItemProps = {
  id: '2412412',
  title: 'Fight club',
  genres: ['drama', 'sport', 'comedy'],
  vote_average: 8,
  poster: 'image_path',
  overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  video: 'youtube-link',
  handleVideo: jest.fn(),
};

describe('test MovieItem component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const component = create(
    <MovieItem
      id={mockMovieItemProps.id}
      title={mockMovieItemProps.title}
      genres={mockMovieItemProps.genres}
      vote_average={mockMovieItemProps.vote_average}
      poster={mockMovieItemProps.poster}
      overview={mockMovieItemProps.overview}
      video={mockMovieItemProps.video}
      handleVideo={mockMovieItemProps.handleVideo}
    />,
  );

  it('should render MovieItem component', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('toggleHover should change state', () => {
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => realUseState({
        hovered: true,
        active: false,
      }));

    const component = create(
      <MovieItem
        id={mockMovieItemProps.id}
        title={mockMovieItemProps.title}
        genres={mockMovieItemProps.genres}
        vote_average={mockMovieItemProps.vote_average}
        poster={mockMovieItemProps.poster}
        overview={mockMovieItemProps.overview}
        video={mockMovieItemProps.video}
        handleVideo={mockMovieItemProps.handleVideo}
      />,
    );

    const { root } = component;
    console.dir(root);
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((initialState) => [initialState, setState]);
    act(() => { root.findAllByType('button')[0].props.onClick(); });
    expect(setState.mock.calls.length).toBe(1);
    // expect(setState.mock.calls[0][0]).toStrictEqual({hovered: true, active: false });
  });

  // it('handleVisibleChange should handle button click', () => {
  //   const mockCallback = jest.spyOn(NavBar.prototype, 'handleVisibleChange').mockImplementation();

  //   const { root } = create(
  //     <NavBar
  //       overview={mockData.overview}
  //     />,
  //   );
  //   expect(root.instance.state.visible).toBe(false);
  //   act(() => { root.findAllByType('button')[1].props.onClick(); });
  //   expect(mockCallback.mock.calls.length).toBe(1);
  //   expect(mockCallback.mock.calls[0][0]).toBe(true);
  // });
});
