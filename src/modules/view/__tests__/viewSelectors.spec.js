import { getListFlexDirectionView, getGenreView } from '../viewSelectors';
import mockState from '../../../../config/jest/__mocks__/mockState';

describe('contentSelectors testing', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getListFlexDirectionView should return isRow from state', () => {
    expect(getListFlexDirectionView(mockState)).toMatchSnapshot();
  });

  test('getGenreView should return genre from state', () => {
    expect(getGenreView(mockState)).toMatchSnapshot();
  });
});
