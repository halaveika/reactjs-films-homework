import { mapStateToProps } from '../HeaderContainer';
import mockState from '../../../../config/jest/__mocks__/mockState';
describe('HeaderContainer', () => {
  it('should show mapStateToProps value', () => {
    expect(mapStateToProps(mockState)).toMatchSnapshot();
  });
});
