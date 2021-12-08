import { connect } from 'react-redux';
import Header from '../Header';
import { setCurrentPage, setFilter, setSearchValue} from '../../modules/content/contentActions';
import { getPageSizeSelector } from '../../modules/content/contentSelectors';

export const mapStateToProps = (state) => ({
  pageSize: getPageSizeSelector(state)
});

const HeaderContainer = connect(mapStateToProps,
  { setCurrentPage, setFilter,setSearchValue })(Header);

export default HeaderContainer;

