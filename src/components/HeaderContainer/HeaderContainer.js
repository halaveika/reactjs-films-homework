import { connect } from 'react-redux';
import Header from '../Header';
import { SearchData } from '../../modules/content/contentActions';

const HeaderContainer = connect(null, { addSearchResult: SearchData })(Header);

export default HeaderContainer;
