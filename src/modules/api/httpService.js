import { URL, API_KEY_V3, URL_YOUTUBE } from '../../constants';

class HttpService {
  static async searchMovieRequest(str,page) {
    try {
      const response = await fetch(`${URL}search/movie?api_key=${API_KEY_V3}&query=${str}&page=${page}`, { method: 'GET' });
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getTrendingRequest(page) {
    try {
      const response = await fetch(`${URL}movie/popular?api_key=${API_KEY_V3}&page=${page}`, { method: 'GET' });
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getTopRatedRequest(page) {
    try {
      const response = await fetch(`${URL}movie/top_rated?api_key=${API_KEY_V3}&page=${page}`, { method: 'GET' });
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async getUpcomingRequest(page) {
    try {
      const response = await fetch(`${URL}movie/upcoming?api_key=${API_KEY_V3}&page=${page}`, { method: 'GET' });
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async movieGenresRequest() {
    try {
      const response = await fetch(`${URL}genre/movie/list?api_key=${API_KEY_V3}`, { method: 'GET' });
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }

  static async movieVideoRequest(id) {
    try {
      const videoInfo = await fetch(`${URL}movie/${id}/videos?api_key=${API_KEY_V3}`, { method: 'GET' });
      const json = await videoInfo.json();
      if (json.results.length === 0) { return ''; }
      return `${URL_YOUTUBE}${json.results[0].key}`;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async movieDetailsRequest(id) {
    try {
      const response = await fetch(`${URL}movie/${id}?api_key=${API_KEY_V3}`, { method: 'GET' });
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default HttpService;
