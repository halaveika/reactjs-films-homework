import {
  getSearchMovieResult, getMoviesGenre, getVideo, getSearchList,
} from '../contentSelectors';

const mockState = {
  content: {
    results: [{
      id: 2412412,
      title: 'Fight club',
      genre_ids: [13, 20, 21],
      vote_average: 8,
      poster: 'image_path',
      overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      id: 41412,
      title: 'Sopranos',
      genre_ids: [13, 18],
      vote_average_ids: 10,
      poster: 'image_path',
      overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    }],
    page: 1,
    total_pages: 12,
    total_results: 55,
    genres_array: [{
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
    video_url: 'test_url',
  },
};

describe('contentSelectors testing', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getSearchMovieResult should return results from state', () => {
    expect(getSearchMovieResult(mockState)).toMatchSnapshot();
  });

  test('getMoviesGenre should return genres_array from state', () => {
    expect(getMoviesGenre(mockState)).toMatchSnapshot();
  });

  test('getSearchMovieResult should return video_url from state', () => {
    expect(getVideo(mockState)).toMatchSnapshot();
  });

  test('getSearchMovieResult should return getSearchList props', () => {
    expect(getSearchList(mockState)).toMatchSnapshot();
  });
});
