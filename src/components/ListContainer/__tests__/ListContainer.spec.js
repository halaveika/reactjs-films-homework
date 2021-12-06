import { mapStateToProps } from '../ListContainer';
import mockState from '../../../../config/jest/__mocks__/mockState';

describe('ListContainer', () => {
  it('should show mapStateToProps value', () => {
    expect(mapStateToProps(mockState)).toMatchSnapshot();
  });
});
