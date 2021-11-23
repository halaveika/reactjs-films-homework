import { SearchData, GetGenres, GetVideoUrl } from '../contentActions';
import HttpService from '../../api/httpService';
import { store } from '../../store';

const mockSearchMovieRequest = jest.spyOn(HttpService, 'searchMovieRequest').mockImplementation((str) => ({
  results: [],
  page: 1,
  total_pages: 12,
  total_results: 55,
}));
const mockMovieGenresRequest = jest.spyOn(HttpService, 'movieGenresRequest').mockImplementation(() => ({
  genres: [213, 333, 45],
}));
const mockMovieVideoRequest = jest.spyOn(HttpService, 'movieVideoRequest').mockImplementation((id) => 'test_url');

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
