import { connect } from 'react-redux';
import Header from '../Header';
import { SearchData } from '../../modules/content/contentActions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  addSearchResult: (str) => dispatch(SearchData(str)),
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
