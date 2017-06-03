import { createSelector } from 'reselect'
import _ from 'lodash'

export const plaid = state => state.plaid

export const public_token = createSelector(
  plaid,
  plaid => plaid.public_token
)

export const access_token_response = createSelector(
  plaid,
  plaid => plaid.access_token
)

export const access_token = createSelector(
  access_token_response,
  (response = {}) => response.access_token
)

export const requestByTimestamp = (requests, timestamp) => requests.find(request => request.timestamp == timestamp)
