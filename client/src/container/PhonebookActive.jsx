import { connect } from 'react-redux'
import { deleteStore, resendStore} from '../action'
import Store from '../components/ListPhonebook'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: () => dispatch(deleteStore(ownProps.id)),
  resend: () => dispatch(resendStore(ownProps.id, ownProps.name, ownProps.phone))
})

export default connect(
  null,
  mapDispatchToProps
)(Store)