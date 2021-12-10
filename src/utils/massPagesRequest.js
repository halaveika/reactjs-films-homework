import { API_PAGE_SIZE } from '../constants';

const massPagesRequest = async (page, pageSize, httpService, str = '') => {
  const countPages = Math.ceil(pageSize / API_PAGE_SIZE);
  let json;
  if (str) {
    json = await Promise.all(Array(countPages).fill(1).map(async (_, index) => await httpService(str, page + index)));
  } else {
    json = await Promise.all(Array(countPages).fill(1).map(async (_, index) => await httpService(page + index)));
  }
  return {
    page,
    results: json.reduce((arr, e) => arr = arr.concat(e.results), []),
    total_pages: json[json.length - 1].total_pages,
    total_results: json[json.length - 1].total_results,
  };
};

export default massPagesRequest;
