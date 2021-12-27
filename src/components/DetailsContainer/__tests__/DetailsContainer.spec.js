import { mapStateToProps } from '../DetailsContainer';
import mockState from '../../../../config/jest/__mocks__/mockState';

describe('DetailsContainer', () => {
  it('should show mapStateToProps value', () => {
    expect(mapStateToProps(mockState)).toMatchSnapshot();
  });
});
