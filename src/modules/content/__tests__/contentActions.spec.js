import {
  GetGenres, GetVideoUrl, getDetails, getContent, setLoading, setFilter, setCurrentPage, setSearchValue
} from '../contentActions';
import HttpService from '../../api/httpService';
import { store } from '../../store';

jest.spyOn(HttpService, 'searchMovieRequest').mockImplementation(() => ({
  results: [{
    id: 2412412,
    title: 'Fight club',
    genre_ids: [13, 20, 21],
    vote_average: 8,
    poster_path: 'image_path',
    overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  },
  {
    id: 41412,
    title: 'Sopranos',
    genre_ids: [13, 18],
    vote_average: 10,
    poster_path: 'image_path',
    overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  }],
  page: 1,
  total_pages: 12,
  total_results: 55,
}));

jest.spyOn(HttpService, 'getTrendingRequest').mockImplementation(() => ({
  results: [{
    id: 2412412,
    title: 'Fight club',
    genre_ids: [13, 20, 21],
    vote_average: 8,
    poster_path: 'image_path',
    overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  },
  {
    id: 41412,
    title: 'Sopranos',
    genre_ids: [13, 18],
    vote_average: 10,
    poster_path: 'image_path',
    overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  }],
  page: 1,
  total_pages: 12,
  total_results: 55,
}));

jest.spyOn(HttpService, 'getTopRatedRequest').mockImplementation(() => ({
  results: [{
    id: 2412412,
    title: 'Fight club',
    genre_ids: [13, 20, 21],
    vote_average: 8,
    poster_path: 'image_path',
    overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  },
  {
    id: 41412,
    title: 'Sopranos',
    genre_ids: [13, 18],
    vote_average: 10,
    poster_path: 'image_path',
    overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  }],
  page: 1,
  total_pages: 12,
  total_results: 55,
}));

jest.spyOn(HttpService, 'getUpcomingRequest').mockImplementation(() => ({
  results: [{
    id: 2412412,
    title: 'Fight club',
    genre_ids: [13, 20, 21],
    vote_average: 8,
    poster_path: 'image_path',
    overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  },
  {
    id: 41412,
    title: 'Sopranos',
    genre_ids: [13, 18],
    vote_average: 10,
    poster_path: 'image_path',
    overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
  }],
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
    overview: 'Lorem Ipsum is simply dummy text of the printing',
  }));

describe('actions', () => {
  afterEach(() => {
    jest.clearAllMocks();
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

  test('getContent from search result and  change store', async () => {
    await store.dispatch({ type: 'SET_SEARCH_VALUE', payload: 'test' });
    await store.dispatch({ type: 'SET_FILTER', payload: '' });
    await store.dispatch(getContent());
    expect(store.getState()).toMatchSnapshot();
  });

  test('getContent from TRENDING and  change store', async () => {
    await store.dispatch({ type: 'SET_FILTER', payload: 'TRENDING' });
    await store.dispatch(getContent());
    expect(store.getState()).toMatchSnapshot();
  });

  test('getContent from TOPRATED and  change store', async () => {
    await store.dispatch({ type: 'SET_FILTER', payload: 'TOPRATED' });
    await store.dispatch(getContent());
    expect(store.getState()).toMatchSnapshot();
  });

  test('getContent from COMINGSOON and  change store', async () => {
    await store.dispatch({ type: 'SET_FILTER', payload: 'COMINGSOON' });
    await store.dispatch(getContent());
    expect(store.getState()).toMatchSnapshot();
  });

  test('setLoading actioin change store', () => {
    store.dispatch(setLoading(true));
    expect(store.getState()).toMatchSnapshot();
  });

  test('setFilter actioin change store', () => {
    store.dispatch(setFilter('COMINGSOON'));
    expect(store.getState()).toMatchSnapshot();
  });

  test('setCurrentPage actioin change store', () => {
    store.dispatch(setCurrentPage(5));
    expect(store.getState()).toMatchSnapshot();
  });

  test('setSearchValue actioin change store', () => {
    store.dispatch(setSearchValue('test'));
    expect(store.getState()).toMatchSnapshot();
  });
});
