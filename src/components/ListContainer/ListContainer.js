import { connect } from 'react-redux';
import MovieList from '../../pages/MovieList';
import { getSearchList, getVideo } from '../../modules/content/contentSelectors';
import { GetVideoUrl, getDetails } from '../../modules/content/contentActions';

const mapStateToProps = (state) => ({
  items: getSearchList(state),
  video: getVideo(state),
});

const ListContainer = connect(mapStateToProps, { handleVideo: GetVideoUrl, getDetails })(MovieList);

export default ListContainer;
