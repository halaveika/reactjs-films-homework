import HttpService from '../httpService';
import { NOT_FOUND_IMG_PATH } from '../../../constants';

const mockMovieGenresResponse = {
  genres: [{
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
};

const mockSearchMovieResponse = {
  results: [{
    id: 2412412,
    title: 'Fight club',
    genre_ids: [13, 20, 21],
    vote_average: 8,
    poster: 'image_path',
    overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 41412,
    title: 'Sopranos',
    genre_ids: [13, 18],
    vote_average_ids: 10,
    poster: 'image_path',
    overview: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  }],
  page: 1,
  total_pages: 12,
  total_results: 55,
};

const mockVideoResponse = {
  id: 14030,
  results: [{
    iso_639_1: 'en',
    iso_3166_1: 'US',
    name: 'Hello, Dolly! (1969) Trailer',
    key: 'ae8wmdtGkqg',
    published_at: '2017-12-24 05:20:31 UTC',
    site: 'YouTube',
    size: 1080,
    type: 'Trailer',
    official: false,
    id: '5a3f3931c3a36858e400455a',
  }, {
    iso_639_1: 'en',
    iso_3166_1: 'US',
    name: 'Hello, Dolly! - Trailer',
    key: '8Dm4GhaYj84',
    published_at: '2014-07-15 22:35:10 UTC',
    site: 'YouTube',
    size: 720,
    type: 'Trailer',
    official: false,
    id: '58f1c9fa9251412fb1004ca2',
  }],
};

const mockVideoResponseEmpty = { id: 14030, results: [] };

const mockMovieDetailsResponse = {
  id: 14030,
  runtime: 120,
  vote_average_ids: 10,
  poster: 'image_path',
  title: 'Sopranos',
  overview: 'Lorem Ipsum is simply dummy text of the printing',
};

function mockFetch(data) {
  return jest.fn().mockImplementation(() => Promise.resolve({
    ok: true,
    json: () => data,
  }));
}

describe('HttpService testing', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('searchMovieRequest should return response', async () => {
    global.fetch = mockFetch(mockSearchMovieResponse);
    const result = await HttpService.searchMovieRequest('test');
    expect(result).toMatchSnapshot();
  });

  test('searchMovieRequest should handle error', () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject());
    expect(async () => await HttpService.searchMovieRequest('test')).rejects.toThrowErrorMatchingSnapshot();
  });

  test('movieGenresRequest should return response', async () => {
    global.fetch = mockFetch(mockMovieGenresResponse);
    const result = await HttpService.movieGenresRequest();
    expect(result).toMatchSnapshot();
  });

  test('movieGenresRequest should handle error', () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject());
    expect(async () => {
      await HttpService.movieGenresRequest();
    }).rejects.toThrowErrorMatchingSnapshot();
  });

  test('movieVideoRequest should return response', async () => {
    global.fetch = mockFetch(mockVideoResponse);
    const result = await HttpService.movieVideoRequest('test');
    expect(result).toMatchSnapshot();
  });

  test('movieVideoRequest should replace video url if emty result error has come', async () => {
    global.fetch = mockFetch(mockVideoResponseEmpty);
    const result = await HttpService.movieVideoRequest('test');
    expect(result).toMatchSnapshot(NOT_FOUND_IMG_PATH);
  });

  test('movieVideoRequest should handle error', () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject());
    expect(async () => {
      await HttpService.movieVideoRequest('test');
    }).rejects.toThrowErrorMatchingSnapshot();
  });

  test('movieDetailsRequest should return response', async () => {
    global.fetch = mockFetch(mockMovieDetailsResponse);
    const result = await HttpService.movieDetailsRequest('test');
    expect(result).toMatchSnapshot();
  });

  test('movieDetailsRequest should handle error', () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject());
    expect(async () => {
      await HttpService.movieDetailsRequest('test');
    }).rejects.toThrowErrorMatchingSnapshot();
  });

  test('getTrendingRequest should return response', async () => {
    global.fetch = mockFetch(mockSearchMovieResponse);
    const result = await HttpService.getTrendingRequest('test');
    expect(result).toMatchSnapshot();
  });

  test('getTrendingRequest should handle error', () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject());
    expect(async () => {
      await HttpService.getTrendingRequest('test');
    }).rejects.toThrowErrorMatchingSnapshot();
  });

  test('getTopRatedRequest should return response', async () => {
    global.fetch = mockFetch(mockSearchMovieResponse);
    const result = await HttpService.getTopRatedRequest('test');
    expect(result).toMatchSnapshot();
  });

  test('getTopRatedRequest should handle error', () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject());
    expect(async () => {
      await HttpService.getTopRatedRequest('test');
    }).rejects.toThrowErrorMatchingSnapshot();
  });

  test('getUpcomingRequest should return response', async () => {
    global.fetch = mockFetch(mockSearchMovieResponse);
    const result = await HttpService.getUpcomingRequest('test');
    expect(result).toMatchSnapshot();
  });

  test('getUpcomingRequest should handle error', () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.reject());
    expect(async () => {
      await HttpService.getUpcomingRequest('test');
    }).rejects.toThrowErrorMatchingSnapshot();
  });
});
