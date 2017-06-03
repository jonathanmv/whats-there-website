// @flow weak
import React, { PropTypes } from 'react'
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as plaidActions      from '../../redux/modules/actions/plaidActions';

const mapStateToProps = state => ({})
const mapDispatchToProps = plaidActions

export const PlaidAutenticateAccountComponent = ({authenticateAccount}) => (
  <div className="plaid-authenticate-account">
    <button className="btn btn-primary" onClick={authenticateAccount}>
      Connect Bank Account
    </button>
  </div>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaidAutenticateAccountComponent);
