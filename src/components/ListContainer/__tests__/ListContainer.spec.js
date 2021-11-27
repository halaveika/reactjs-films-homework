import { mapStateToProps } from '../ListContainer';
/* eslint-disable */
import mockState from '../../../../config/jest/__mocks__/mockState';
  /* eslint-enable */

describe('ListContainer', () => {
  it('should show mapStateToProps value', () => {
    expect(mapStateToProps(mockState)).toMatchSnapshot();
  });
});
