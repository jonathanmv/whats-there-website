import { createSelector } from 'reselect'
import _ from 'lodash'

export const lex = state => state.lex

export const isCompleted = request => _.get(request, 'completed')
export const query = request => _.get(request, 'query')
export const responseText = request => _.get(request, 'response.message')
