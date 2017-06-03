import {
  LEX_REQUEST
} from '../actions/lexActions'

export const getRequest = (requests, requestId) => requests.find(request => request.requestId == requestId)

export const lexRequest = (state, action = {}) => {
  switch (action.type) {
    case LEX_REQUEST:
      if (!state || state.requestId == action.requestId) {
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
    case LEX_REQUEST:
      const request = getRequest(state, action.requestId)
      if (!request) {
        return [...state, lexRequest(null, action)]
      }
      return state.map(request => lexRequest(request, action))
    default:
      return state
  }
}
