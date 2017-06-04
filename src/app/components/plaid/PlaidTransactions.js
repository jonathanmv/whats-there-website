// @flow weak

import React              from 'react';
import PropTypes          from 'prop-types';
import * as plaidSelectors from '../../redux/modules/selectors/plaidSelectors'

let PlaidTransaction = ({transaction}) => (
  <tr className="transaction">
    <td>{transaction.date}</td>
    <td>{transaction.name}</td>
    <td>{transaction.amount}</td>
    <td>{(transaction.category || []).join()}</td>
  </tr>
)

const PlaidTransactions = ({transactions}) => (
  <table className="transactions table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Name</th>
        <th>Amount</th>
        <th>Categories</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((transaction, key) => <PlaidTransaction key={key} transaction={transaction} />)}
    </tbody>
  </table>
)

PlaidTransactions.propTypes = {
  transactions: PropTypes.array.isRequired
};

export default PlaidTransactions;
