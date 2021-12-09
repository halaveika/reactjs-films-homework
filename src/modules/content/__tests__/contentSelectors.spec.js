import {
  getSearchMovieResult, getMoviesGenre, getVideo,
  getSearchList, getDetailsPageSelector, getDetailsSelector, getLoadingSelector, getFilter, getPageSelector, getTotalResultsSelector, getSearchValueSelector, getPageSizeSelector
} from '../contentSelectors';
import mockState from '../../../../config/jest/__mocks__/mockState';

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
});
