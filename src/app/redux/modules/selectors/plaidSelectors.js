import { createSelector } from 'reselect'
import _ from 'lodash'

import {
  PLAID_AUTHENTICATION_REQUEST,
  PLAID_QUERY_TRANSACTIONS_REQUEST
} from '../actions/plaidActions'

export const plaidRequests = state => state.plaidRequests

export const requestsByType = (requests, type) => requests.filter(request => request.type == type)

export const requestById = (requests, id) => requests.find(request => request.id == id)

export const successfulRequests = requests => requests.filter(({error, response}) => !error && !response.error)

export const authenticationRequests = createSelector(
  plaidRequests,
  requests => requestsByType(requests, PLAID_AUTHENTICATION_REQUEST)
)

export const successfulAuthenticationRequests = createSelector(
  authenticationRequests,
  successfulRequests
)

export const queryTransactionsRequests = createSelector(
  plaidRequests,
  requests => requestsByType(requests, PLAID_QUERY_TRANSACTIONS_REQUEST)
)

export const successfulQueryTransactionsRequests = createSelector(
  queryTransactionsRequests,
  successfulRequests
)

export const transactions = createSelector(
  successfulQueryTransactionsRequests,
  requests => _.get(requests, '[0].response.transactions') || []
)
