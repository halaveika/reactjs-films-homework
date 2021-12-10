import { viewReducer, initialState } from '../viewReducer';

describe('viewt reducer', () => {
  it('should return the initial state', () => {
    expect(viewReducer(undefined, {})).toMatchSnapshot();
  });

  it('should handle SET_LIST_FLEX_DIRECTION', () => {
    const action = {
      type: 'SET_LIST_FLEX_DIRECTION',
      payload: true,
    };
    expect(
      viewReducer(initialState,
        action),
    ).toMatchSnapshot();
  });

  it('should handle SET_GENRE', () => {
    const action = {
      type: 'SET_GENRE',
      payload: 'Drama',
    };
    expect(
      viewReducer(initialState,
        action),
    ).toMatchSnapshot();
  });
});
