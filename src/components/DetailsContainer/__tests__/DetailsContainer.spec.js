import { mapStateToProps } from '../DetailsContainer';
/* eslint-disable */
import mockState from '../../../../config/jest/__mocks__/mockState';
  /* eslint-enable */

describe('DetailsContainer', () => {
  it('should show mapStateToProps value', () => {
    expect(mapStateToProps(mockState)).toMatchSnapshot();
  });
});
