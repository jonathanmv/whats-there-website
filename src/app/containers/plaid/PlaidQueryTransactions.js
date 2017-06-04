// @flow weak
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as plaidActions      from '../../redux/modules/actions/plaidActions';
import PlaidQueryTransactions from '../../components/plaid/PlaidQueryTransactions'

const mapStateToProps = state => ({})
const mapDispatchToProps = plaidActions

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaidQueryTransactions);
