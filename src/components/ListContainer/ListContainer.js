import { connect } from 'react-redux';
import MovieList from '../../pages/MovieList';
import { getSearchList, getVideo, getMoviesGenre,getLoadingSelector, getInitialisation, getFilter, getPageSelector, getTotalPageSelector } from '../../modules/content/contentSelectors';
import { GetVideoUrl, getDetails, getTrending, getTopRated, getUpcoming,getInitialisated,GetGenres, setFilter, setCurrentPage} from '../../modules/content/contentActions';

export const mapStateToProps = (state) => ({
  items: getSearchList(state),
  video: getVideo(state),
  genres: getMoviesGenre(state),
  isLoading: getLoadingSelector(state),
  isInitialisated: getInitialisation(state),
  filter: getFilter(state),
  page: getPageSelector(state),
  total_page: getTotalPageSelector(state)
});

const ListContainer = connect(mapStateToProps,
  { handleVideo: GetVideoUrl, getDetails, getTrending, getTopRated, getUpcoming,getInitialisated,GetGenres, setFilter, setCurrentPage})(MovieList);

export default ListContainer;
