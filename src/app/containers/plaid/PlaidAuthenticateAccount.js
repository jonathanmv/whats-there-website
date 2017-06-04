// @flow weak
import React from 'react'
import PropTypes          from 'prop-types';
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


PlaidAutenticateAccountComponent.propTypes = {
  authenticateAccount: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaidAutenticateAccountComponent);
