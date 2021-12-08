import { connect } from 'react-redux';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import { getDetailsPageSelector } from '../../modules/content/contentSelectors';


export const mapStateToProps = (state) => ({
  ...getDetailsPageSelector(state),
});

const DetailsContainer = connect(mapStateToProps, null)(MovieDetailsPage);

export default DetailsContainer;
