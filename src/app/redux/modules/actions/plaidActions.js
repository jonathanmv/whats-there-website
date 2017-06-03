import axios from 'axios'

// import * as plaidSelectors from '../selectors/plaidSelectors'

export const PLAID_AUTHENTICATION_REQUEST = 'PLAID_AUTHENTICATION_REQUEST'
export const PLAID_GET_ACCESS_TOKEN_URL = 'http://localhost:8000/get_access_token'

export const getPublicTokenSuccessHandler = dispatch => {
  const action = { type: PLAID_AUTHENTICATION_REQUEST, timestamp: new Date().getTime() }
  dispatch(action)
  return public_token => {
    dispatch({ ...action, public_token })
    axios.post(PLAID_GET_ACCESS_TOKEN_URL, { public_token })
      .then(({data}) => dispatch({ ...action,  ...data }))
      .catch(error => console.log(error))
  }
}

export const openPlaid = () => dispatch => {
  const handler = Plaid.create({
    apiVersion: 'v2',
    clientName: 'What\'s there website',
    env: 'sandbox',
    product: ['transactions'],
    key: 'f65e621d69834aa1a802aa2c452dbe',
    onSuccess: getPublicTokenSuccessHandler(dispatch)
  })

  handler.open();
}
