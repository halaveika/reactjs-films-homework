import { connect } from 'react-redux';
import MovieList from '../../pages/MovieList';
import { getSearchList, getVideo, getMoviesGenre,getLoadingSelector, getFilter, getPageSelector, getTotalPageSelector,getSearchValueSelector } from '../../modules/content/contentSelectors';
import { GetVideoUrl, getDetails, getContent,GetGenres, setFilter, setCurrentPage} from '../../modules/content/contentActions';
import { setGenre, setListFlexDirection} from '../../modules/view/viewActions';
import { getListFlexDirectionView, getGenreView } from '../../modules/view/viewSelectors';

export const mapStateToProps = (state) => ({
  items: getSearchList(state),
  video: getVideo(state),
  genres: getMoviesGenre(state),
  isLoading: getLoadingSelector(state),
  filter: getFilter(state),
  page: getPageSelector(state),
  total_pages: getTotalPageSelector(state),
  searchValue: getSearchValueSelector(state),
  isRow: getListFlexDirectionView(state),
  genre: getGenreView(state)
});

const ListContainer = connect(mapStateToProps,
  { handleVideo: GetVideoUrl, getDetails, getContent ,GetGenres, setFilter, setCurrentPage,setGenre,setListFlexDirection})(MovieList);

export default ListContainer;
