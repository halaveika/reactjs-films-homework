import { URL, API_KEY_V3 } from '../../constants';

class HttpService {
  searchMovieRequest = async (str) => {
    const response = await fetch(`${URL}search/movie?api_key=${API_KEY_V3}&query=${str}&page=1`, { method: 'GET' });
    return response.json();
  }

  movieGenresRequest = async () => {
    const response = await fetch(`${URL}genre/movie/list?api_key=${API_KEY_V3}`, { method: 'GET' });
    console.dir(response);
    return response.json();
  }
}

export default new HttpService();
