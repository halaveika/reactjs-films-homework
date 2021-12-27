import limitMaxResult from '../limitMaxResult';
import { MAX_SEARCH_RESULT, MAX_PAGE } from '../../constants';

describe('limitMaxResult', () => {
  test('limitMaxResult should return result', () => {
    const mockResult = {
      total_pages: 20,
      total_results: 400,
    };
    const result = limitMaxResult(mockResult);
    expect(result).toEqual(mockResult);
    expect(result).toMatchSnapshot();
  });

  test('limitMaxResult should return result lower than max', () => {
    const mockResult = {
      total_pages: MAX_PAGE + 1,
      total_results: MAX_SEARCH_RESULT + 1,
    };
    const result = limitMaxResult(mockResult);
    expect(result.total_pages).toBe(MAX_PAGE);
    expect(result.total_results).toBe(MAX_SEARCH_RESULT);
    expect(result).toMatchSnapshot();
  });
});
