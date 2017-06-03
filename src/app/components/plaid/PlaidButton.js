// @flow weak

import React              from 'react';
import PropTypes          from 'prop-types';

const PlaidButton = ({openPlaid}) => (
  <button onClick={openPlaid}>Plaid</button>
)

PlaidButton.propTypes = {
  openPlaid: PropTypes.func.isRequired
};

export default PlaidButton;
