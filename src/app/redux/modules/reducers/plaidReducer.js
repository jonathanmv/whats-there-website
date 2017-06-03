import {
  PLAID_AUTHENTICATION_REQUEST
} from '../actions/plaidActions'

import {
  requestByTimestamp
} from '../selectors/plaidSelectors'

export const plaidAuthenticationRequest = (state, action = {}) => {
  switch (action.type) {
    case PLAID_AUTHENTICATION_REQUEST:
      if (!state || state.timestamp == action.timestamp) {
        const request = { ...action }
        delete request.type
        return request
      }
      return state
    default:
      return state
  }
}

export default (state = [], action = {}) => {
  switch (action.type) {
    case PLAID_AUTHENTICATION_REQUEST:
      const request = requestByTimestamp(state, action.timestamp)
      if (!request) {
        return [...state, plaidAuthenticationRequest(null, action)]
      }
      return state.map(request => plaidAuthenticationRequest(request, action))
    default:
      return state
  }
}
