import aws from 'aws-sdk'
import { appConfig } from '../../../config'
import Promise from 'bluebird'

const lex = Promise.promisifyAll(new aws.LexRuntime(appConfig.aws.credentials))

export const LEX_REQUEST = 'LEX_REQUEST'

export const submitQuery = query => dispatch => {
  const action = {
    type: LEX_REQUEST,
    query,
    completed: false,
    requestId: new Date().getTime()
  }
  dispatch(action)
  return callLexWithText(query)
    .then(response => dispatch({ ...action, completed: true, response }))
    .catch(error => dispatch({ ...action, completed: true, error }))
}

export const callLexWithText = inputText => {
  const params = {
    botAlias: 'one',
    botName: 'WhatsThere',
    inputText,
    userId: 'jonathanmv-webclient'
  }

  return lex.postTextAsync(params)
}
