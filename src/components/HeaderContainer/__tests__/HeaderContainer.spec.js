import { mapStateToProps } from '../HeaderContainer';
/* eslint-disable */
import mockState from '../../../../config/jest/__mocks__/mockState';
  /* eslint-enable */
describe('HeaderContainer', () => {
  it('should show mapStateToProps value', () => {
    expect(mapStateToProps(mockState)).toMatchSnapshot();
  });
});
