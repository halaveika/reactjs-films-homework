import { SearchData, GetGenres, GetVideoUrl } from '../contentActions';
import HttpService from '../../api/httpService';
import { store } from '../../store';

jest.spyOn(HttpService, 'searchMovieRequest').mockImplementation(() => ({
  results: [],
  page: 1,
  total_pages: 12,
  total_results: 55,
}));

jest.spyOn(HttpService, 'movieGenresRequest').mockImplementation(() => ({
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
}));

jest.spyOn(HttpService, 'movieVideoRequest').mockImplementation(() => 'test_url');

describe('actions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('SearchData actioin change store', async () => {
    await store.dispatch(SearchData('test'));
    expect(store.getState()).toMatchSnapshot();
  });

  test('GetGenres actioin change store', async () => {
    await store.dispatch(GetGenres());
    expect(store.getState()).toMatchSnapshot();
  });

  test('GetVideoUrl actioin change store', async () => {
    await store.dispatch(GetVideoUrl('test'));
    expect(store.getState()).toMatchSnapshot();
  });
});
