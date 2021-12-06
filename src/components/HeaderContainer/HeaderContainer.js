import { connect } from 'react-redux';
import Header from '../Header';
import { setCurrentPage, setFilter, setSearchValue} from '../../modules/content/contentActions';

const HeaderContainer = connect(this,
  { setCurrentPage, setFilter,setSearchValue })(Header);

export default HeaderContainer;

