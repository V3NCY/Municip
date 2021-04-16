import {connect} from 'react-redux';
import Hotel from '../Hotel/Hotel';

function mapStateToProps(state) {
  return {
    hotels: state.hotels
  };
}

export default connect(mapStateToProps)(Hotel);