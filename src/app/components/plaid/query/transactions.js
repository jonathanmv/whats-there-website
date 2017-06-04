// @flow weak

import React              from 'react';
import PropTypes          from 'prop-types';

const createHandler = queryTransactions => event => {
  event.preventDefault()
  const query = event.target.query.value
  event.target.query.value = ''
  queryTransactions(query)
}

const Transactions = ({queryTransactions}) => (
  <form onSubmit={createHandler(queryTransactions)}>
    <div className="form-group">
      <label htmlFor="query">Ask me something</label>
      <input type="text" className="form-control" id="query" placeholder="total expenses in the last month" />
    </div>
  </form>
)

Transactions.propTypes = {
  queryTransactions: PropTypes.func.isRequired
};

export default Transactions;
