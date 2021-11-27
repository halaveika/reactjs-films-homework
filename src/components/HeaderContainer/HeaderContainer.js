import { connect } from 'react-redux';
import Header from '../Header';
import { SearchData, GetGenres, getInitialisated } from '../../modules/content/contentActions';
import { getInitialisation } from '../../modules/content/contentSelectors';

export const mapStateToProps = (state) => ({
  isInitialisated: getInitialisation(state),
});

const HeaderContainer = connect(mapStateToProps,
  { SearchData, GetGenres, getInitialisated })(Header);

export default HeaderContainer;
