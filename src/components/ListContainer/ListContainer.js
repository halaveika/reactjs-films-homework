import { connect } from 'react-redux';
import MovieList from '../../pages/MovieList';
import { getSearchList } from '../../modules/content/contentSelectors';

const mapStateToProps = (state) => ({
  items: getSearchList(state),
});

const mapDispatchToProps = (dispatch) => ({
});

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(MovieList);

export default ListContainer;
