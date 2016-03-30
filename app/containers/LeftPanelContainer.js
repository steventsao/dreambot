import { connect } from 'react-redux';
import LeftPanel from '../components/LeftPanel';
import { logout } from '../actions/authActions';

const mapDispatchToProps = dispatch => ({ logout: () => dispatch(logout()) });

export default connect(null, mapDispatchToProps)(LeftPanel);
