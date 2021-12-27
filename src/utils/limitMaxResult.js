import { MAX_SEARCH_RESULT, MAX_PAGE } from '../constants';

const limitMaxResult = (result) => {
  if (result.total_pages > MAX_PAGE) { result.total_pages = MAX_PAGE; }
  if (result.total_results > MAX_SEARCH_RESULT) { result.total_results = MAX_SEARCH_RESULT; }
  return result;
};

export default limitMaxResult;
