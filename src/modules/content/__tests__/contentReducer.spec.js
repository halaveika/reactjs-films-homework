import { contentReducer, initialState } from '../contentReducer';

describe('content reducer', () => {
  it('should return the initial state', () => {
    expect(contentReducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle ADD_ITEMS', () => {
    const action = {
      type: 'ADD_ITEMS',
      payload: {
        results: [],
        page: 1,
        total_pages: 12,
        total_results: 55,
      },
    };
    expect(
      contentReducer(initialState,
        action),
    ).toMatchSnapshot();
  });

  it('should handle ADD_GENRES', () => {
    const action = {
      type: 'ADD_GENRES',
      payload: {
        genres: [213, 333, 45],
      },
    };
    expect(
      contentReducer(initialState,
        action),
    ).toMatchSnapshot();
  });

  it('should handle ADD_VIDEO', () => {
    const action = { type: 'ADD_VIDEO', payload: 'test_url' };
    expect(
      contentReducer(initialState,
        action),
    ).toMatchSnapshot();
  });
});
