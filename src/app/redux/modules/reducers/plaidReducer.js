import {
  PLAID_AUTHENTICATION_REQUEST,
  PLAID_QUERY_TRANSACTIONS_REQUEST
} from '../actions/plaidActions'

import {
  requestById
} from '../selectors/plaidSelectors'

export const plaidRequest = (state, action = {}) => {
  switch (action.type) {
    case PLAID_AUTHENTICATION_REQUEST:
    case PLAID_QUERY_TRANSACTIONS_REQUEST:
      if (!state || state.id == action.id) {
        return { ...action }
      }
      return state
    default:
      return state
  }
}

export default (state = [], action = {}) => {
  switch (action.type) {
    case PLAID_AUTHENTICATION_REQUEST:
    case PLAID_QUERY_TRANSACTIONS_REQUEST:
      const request = requestById(state, action.id)
      if (!request) {
        return [...state, plaidRequest(null, action)]
      }
      return state.map(request => plaidRequest(request, action))
    default:
      return state
  }
}
