import { connect } from 'react-redux'
import { deleteStore} from '../action'
import Store from '../components/ListPhonebook'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(deleteStore(ownProps.id)),
})

export default connect(
  null,
  mapDispatchToProps
)(Store)