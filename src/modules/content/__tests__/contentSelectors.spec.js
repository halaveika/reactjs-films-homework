import {
  getSearchMovieResult, getMoviesGenre, getVideo,
  getSearchList, getDetailsPageSelector, getInitialisation,
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
    details: {
      id: 2412412,
      title: 'Fight club',
      runtime: 120,
      vote_average_ids: 10,
      poster: 'image_path',
      overview: 'Lorem Ipsum is simply dummy text of the printing',
    },
    isInitialisated: false,
  },
};

const mockStateEmpty = {
  content: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
    genres_array: [],
    video_url: '',
    details: {},
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
  });

  test('getSearchList should return getSearchList props', () => {
    expect(getSearchList(mockState)).toMatchSnapshot();
  });

  test('getSearchList should correct handl empty result of search', () => {
    expect(getSearchList(mockStateEmpty)).toMatchSnapshot();
  });

  test('getDetailsPageSelector should return getDetailsPageSelector props', () => {
    expect(getDetailsPageSelector(mockState)).toMatchSnapshot();
  });
});
