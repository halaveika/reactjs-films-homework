import { URL, API_KEY_V3, URL_YOUTUBE } from '../../constants';

class HttpService {
  static async searchMovieRequest(str) {
    try {
      const response = await fetch(`${URL}search/movie?api_key=${API_KEY_V3}&query=${str}&page=1`, { method: 'GET' });
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
      if (json.results.length === 0) { return `${URL_YOUTUBE}2Q_ZzBGPdqE`; }
      return `${URL_YOUTUBE}${json.results[0].key}`;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default HttpService;