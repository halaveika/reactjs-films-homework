import { connect } from 'react-redux';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import { getDetailsPageSelector } from '../../modules/content/contentSelectors';
import { GetVideoUrl } from '../../modules/content/contentActions';


export const mapStateToProps = (state) => ({
  ...getDetailsPageSelector(state),
});

const DetailsContainer = connect(mapStateToProps, { GetVideoUrl })(MovieDetailsPage);

export default DetailsContainer;
