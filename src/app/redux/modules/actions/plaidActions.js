import axios from 'axios'
import moment from 'moment'
import { appConfig } from '../../../config'

import * as plaidSelectors from '../selectors/plaidSelectors'

export const PLAID_AUTHENTICATION_REQUEST = 'PLAID_AUTHENTICATION_REQUEST'
export const PLAID_QUERY_TRANSACTIONS_REQUEST = 'PLAID_QUERY_TRANSACTIONS_REQUEST'
export const PLAID_GET_ACCESS_TOKEN_URL = `${appConfig.plaid.serverUrl}get_access_token`
export const PLAID_QUERY_TRANSACTIONS_URL = `${appConfig.plaid.serverUrl}transactions`

export const request = ({ type, url, id, params, response, error, timestamp }) => dispatch => {
  timestamp = timestamp || new Date().getTime()
  id = id || timestamp
  const action = { type, url, id, params, response, error, timestamp }
  dispatch(action)
  return axios.post(url, params)
    .then(({data: response}) => dispatch(({ ...action,  response })))
    .catch(error => dispatch(({ ...action, error })))
}

export const getPublicTokenSuccessHandler = dispatch => {
  const url = PLAID_GET_ACCESS_TOKEN_URL
  const action = { type: PLAID_AUTHENTICATION_REQUEST, url }
  return public_token => {
    const params = { public_token }
    action.params = params
    dispatch(request(action))
  }
}

export const authenticateAccount = () => dispatch => {
  const handler = Plaid.create({
    apiVersion: 'v2',
    clientName: 'What\'s there website',
    env: 'sandbox',
    product: ['transactions'],
    key: appConfig.plaid.publicKey,
    onSuccess: getPublicTokenSuccessHandler(dispatch)
  })

  handler.open();
}

export const queryTransactions = query => (dispatch, getState) => {
  const plaid = plaidSelectors.successfulAuthenticationRequests(getState())[0]
  if (!plaid) {
    throw new Error(`A bank account must be added first`)
  }

  const { access_token } = plaid.response
  const start_date = moment().subtract(30, 'days').format('YYYY-MM-DD')
  const end_date = moment().format('YYYY-MM-DD')
  const options = { count: 500 }
  const params = { access_token, start_date, end_date, options }

  const url = PLAID_QUERY_TRANSACTIONS_URL
  const action = { type: PLAID_QUERY_TRANSACTIONS_REQUEST, params, url }
  dispatch(request(action))
}
