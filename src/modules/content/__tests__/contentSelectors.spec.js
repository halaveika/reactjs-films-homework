import {
  getSearchMovieResult, getMoviesGenre, getVideo,
  getSearchList, getDetailsPageSelector, getDetailsSelector, getLoadingSelector, getFilter, getPageSelector, getTotalResultsSelector, getSearchValueSelector, getPageSizeSelector
} from '../contentSelectors';
import mockState from '../../../../config/jest/__mocks__/mockState';
const testState = {
  content: {
    results: [{
      id: 2412412,
      title: 'Fight club',
      genre_ids: [13, 20, 21],
      vote_average: 8,
      poster_path: '',
      overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      id: 41412,
      title: 'Sopranos',
      genre_ids: [13, 18],
      vote_average: 10,
      poster_path: '',
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
    details: {
      id: 2412412,
      title: 'Fight club',
      genres: ['Drama','Adventure','Fantasy'],
      runtime: 120,
      vote_average: 10,
      backdrop_path: '',
      overview: 'Lorem Ipsum is simply dummy text of the printing',
    },
    isLoading: true,
    filter: 'TRENDING',
    searchValue: '',
    pageSize: 20
  },
  view: {
    isRow: true,
    genre:''
  }

};
const mockStateEmpty = {
  content: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
    genres_array: [],
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

  test('getMoviesGenre should return genres_array from state', () => {
    expect(getMoviesGenre(mockState)).toMatchSnapshot();
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
        poster: 'https://image.tmdb.org/t/p/w500/image_path',
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
        poster: 'https://image.tmdb.org/t/p/w500/image_path',
        title: 'Sopranos',
        vote_average: 10,
      },
    ]);
  });

  test('getSearchList should return getSearchList props with default poster', () => {
    expect(getSearchList(testState)).toMatchSnapshot();
    // expect(getSearchList(testState)).toMatchObject({poster:'assets/images/not-found.png'});
  });

  test('getSearchList should correct handl empty result of search', () => {
    expect(getSearchList(mockStateEmpty)).toMatchSnapshot();
  });
  
  test('getDetailsPageSelector should return getDetailsPageSelector props', () => {
    expect(getDetailsPageSelector(mockState)).toMatchSnapshot();
  });

  test('getDetailsSelector should return details from state', () => {
    expect(getDetailsSelector(mockState)).toMatchSnapshot();
    expect(getDetailsSelector(mockState)).toBeInstanceOf(Object);
  });

  test('getLoadingSelector should return loading status from state', () => {
    expect(getLoadingSelector(mockState)).toMatchSnapshot();
    expect(getLoadingSelector(mockState)).toBe(true);
  });

  test('getFilter should return filter from state', () => {
    expect(getFilter(mockState)).toMatchSnapshot();
    expect(getFilter(mockState)).toBe('TRENDING');
  });

  test('getPageSelector should return page  number from state', () => {
    expect(getPageSelector(mockState)).toMatchSnapshot();
    expect(getPageSelector(mockState)).toBe(1);
  });

  test('getTotalResultsSelector should return total results  number from state', () => {
    expect(getTotalResultsSelector(mockState)).toMatchSnapshot();
    expect(getTotalResultsSelector(mockState)).toBe(55);
  });

  test('getSearchValueSelector should return search value from state', () => {
    expect(getSearchValueSelector(mockState)).toMatchSnapshot();
    expect(getSearchValueSelector(mockState)).toBe('');
  });

  test('getPageSizeSelector should return page size from state', () => {
    expect(getPageSizeSelector(mockState)).toMatchSnapshot();
    expect(getPageSizeSelector(mockState)).toBe(20);
  });

  test('getDetailsPageSelector should return value with backdrop default', () => {
    expect(getDetailsPageSelector(testState)).toMatchSnapshot();
  });

  test('getDetailsPageSelector should return props DetailsPageSelecto from state', () => {
    expect(getDetailsPageSelector(mockState)).toMatchSnapshot();
  });
});
