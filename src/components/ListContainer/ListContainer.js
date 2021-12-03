import { connect } from 'react-redux';
import MovieList from '../../pages/MovieList';
import { getSearchList, getVideo, getMoviesGenre } from '../../modules/content/contentSelectors';
import { GetVideoUrl, getDetails, getTrending, getTopRated, getUpcoming } from '../../modules/content/contentActions';

export const mapStateToProps = (state) => ({
  items: getSearchList(state),
  video: getVideo(state),
  genres: getMoviesGenre(state)
});

const ListContainer = connect(mapStateToProps,
  { handleVideo: GetVideoUrl, getDetails, getTrending, getTopRated, getUpcoming})(MovieList);

export default ListContainer;
