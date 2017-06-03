import axios from 'axios'
import { appConfig } from '../../../config'


// import * as plaidSelectors from '../selectors/plaidSelectors'

export const PLAID_AUTHENTICATION_REQUEST = 'PLAID_AUTHENTICATION_REQUEST'
export const PLAID_GET_ACCESS_TOKEN_URL = appConfig.plaid.serverUrl

export const getPublicTokenSuccessHandler = dispatch => {
  const action = { type: PLAID_AUTHENTICATION_REQUEST, timestamp: new Date().getTime() }
  dispatch(action)
  return public_token => {
    dispatch({ ...action, public_token })
    axios.post(PLAID_GET_ACCESS_TOKEN_URL, { public_token })
      .then(({data}) => dispatch({ ...action,  ...data }))
      .catch(error => dispatch({ ...action, error }))
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
