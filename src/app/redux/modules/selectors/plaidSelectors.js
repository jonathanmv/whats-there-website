import { createSelector } from 'reselect'
import _ from 'lodash'

export const plaidRequests = state => state.plaidRequests

export const requestById = (requests, id) => requests.find(request => request.id == id)
