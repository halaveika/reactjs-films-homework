import { connect } from 'react-redux';
import MovieList from '../../pages/MovieList';
import { getSearchList, getVideo } from '../../modules/content/contentSelectors';
import { GetVideoUrl } from '../../modules/content/contentActions';

const mapStateToProps = (state) => ({
  items: getSearchList(state),
  video: getVideo(state),
});

const ListContainer = connect(mapStateToProps, { handleVideo: GetVideoUrl })(MovieList);

export default ListContainer;
