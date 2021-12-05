import { connect } from 'react-redux';
import MovieList from '../../pages/MovieList';
import { getSearchList, getVideo, getMoviesGenre,getLoadingSelector, getInitialisation, getFilter } from '../../modules/content/contentSelectors';
import { GetVideoUrl, getDetails, getTrending, getTopRated, getUpcoming,getInitialisated,GetGenres, setFilter} from '../../modules/content/contentActions';

export const mapStateToProps = (state) => ({
  items: getSearchList(state),
  video: getVideo(state),
  genres: getMoviesGenre(state),
  isLoading: getLoadingSelector(state),
  isInitialisated: getInitialisation(state),
  filter: getFilter(state)
});

const ListContainer = connect(mapStateToProps,
  { handleVideo: GetVideoUrl, getDetails, getTrending, getTopRated, getUpcoming,getInitialisated,GetGenres, setFilter})(MovieList);

export default ListContainer;
