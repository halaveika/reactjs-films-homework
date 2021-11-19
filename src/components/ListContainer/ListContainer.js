import { connect } from 'react-redux';
import MovieList from '../../pages/MovieList';
import { getSearchList, getVideo } from '../../modules/content/contentSelectors';
import { GetVideoUrl } from '../../modules/content/contentActions';

const mapStateToProps = (state) => ({
  items: getSearchList(state),
  video: getVideo(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleVideo: (id) => dispatch(GetVideoUrl(id)),
});

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(MovieList);

export default ListContainer;
