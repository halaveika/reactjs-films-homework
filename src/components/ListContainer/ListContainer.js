import { connect } from 'react-redux';
import MovieList from '../../pages/MovieList';
import {
  getSearchList, getMoviesGenre, getLoadingSelector, getFilter, getPageSelector,
  getTotalResultsSelector, getSearchValueSelector, getPageSizeSelector,
} from '../../modules/content/contentSelectors';
import {
  getDetails, getContent, GetGenres, setFilter, setCurrentPage,
} from '../../modules/content/contentActions';
import { setGenre, setListFlexDirection } from '../../modules/view/viewActions';
import { getListFlexDirectionView, getGenreView } from '../../modules/view/viewSelectors';

export const mapStateToProps = (state) => ({
  items: getSearchList(state),
  genres: getMoviesGenre(state),
  isLoading: getLoadingSelector(state),
  filter: getFilter(state),
  page: getPageSelector(state),
  total_results: getTotalResultsSelector(state),
  searchValue: getSearchValueSelector(state),
  isRow: getListFlexDirectionView(state),
  genre: getGenreView(state),
  pageSize: getPageSizeSelector(state),
});

const ListContainer = connect(mapStateToProps,
  {
    getDetails, getContent, GetGenres, setFilter, setCurrentPage, setGenre, setListFlexDirection,
  })(MovieList);

export default ListContainer;
