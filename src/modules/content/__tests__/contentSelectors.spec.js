import {
  getSearchMovieResult, getMoviesGenre, getVideo,
  getSearchList, getDetailsPageSelector, getInitialisation,
} from '../contentSelectors';
/* eslint-disable */
import mockState from '../../../../config/jest/__mocks__/mockState';
  /* eslint-enable */
const mockStateEmpty = {
  content: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
    genres_array: [],
    video_url: '',
    details: {},
    poster: 'image_path',
  },
};

describe('contentSelectors testing', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getSearchMovieResult should return results from state', () => {
    expect(getSearchMovieResult(mockState)).toMatchSnapshot();
  });

  test('getInitialisation should return results from state', () => {
    expect(getInitialisation(mockState)).toMatchSnapshot();
  });

  test('getMoviesGenre should return genres_array from state', () => {
    expect(getMoviesGenre(mockState)).toMatchSnapshot();
  });

  test('getVideo should return video_url from state', () => {
    expect(getVideo(mockState)).toMatchSnapshot();
    expect(getVideo(mockState)).toBe('test_url');
  });

  test('getSearchList should return getSearchList props', () => {
    expect(getSearchList(mockState)).toMatchSnapshot();
    expect(getSearchList(mockState)).toEqual([
      {
        genres: [
          'Adventure',
          'Family',
          'Fantasy',
        ],
        id: 2412412,
        overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        poster: 'image_path',
        title: 'Fight club',
        vote_average: 8,
      },
      {
        genres: [
          'Adventure',
          'Drama',
        ],
        id: 41412,
        overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        poster: 'image_path',
        title: 'Sopranos',
        vote_average: 10,
      },
    ]);
  });

  test('getSearchList should correct handl empty result of search', () => {
    expect(getSearchList(mockStateEmpty)).toMatchSnapshot();
  });

  test('getDetailsPageSelector should return getDetailsPageSelector props', () => {
    expect(getDetailsPageSelector(mockState)).toMatchSnapshot();
  });
});
