import { SearchData, GetGenres, GetVideoUrl, getDetails } from '../contentActions';
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

jest.spyOn(HttpService, 'movieDetailsRequest').mockImplementation(() => (
  {
    id: 14030,
    runtime: 120,
    vote_average_ids: 10,
    poster: 'image_path',
    title: 'Sopranos',
    overview: 'Lorem Ipsum is simply dummy text of the printing'
  }));

describe('actions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('SearchData actioin change store', async () => {
    await store.dispatch(SearchData(43));
    expect(store.getState()).toMatchSnapshot();
  });

  test('GetGenres actioin change store', async () => {
    await store.dispatch(GetGenres());
    expect(store.getState()).toMatchSnapshot();
  });

  test('GetVideoUrl actioin change store', async () => {
    await store.dispatch(GetVideoUrl(43));
    expect(store.getState()).toMatchSnapshot();
  });

  test('getDetails actioin change store', async () => {
    await store.dispatch(getDetails(43));
    expect(store.getState()).toMatchSnapshot();
  });
});
