// @flow weak

import { routerReducer }    from 'react-router-redux';
import { combineReducers }  from 'redux';
import views                from './views';
import fakeModuleWithFetch  from './fakeModuleWithFetch';
import lex from './reducers/lexReducer'
import plaid from './reducers/plaidReducer'

export default combineReducers({
  views,
  fakeModuleWithFetch,
  lex,
  plaid,
  routing: routerReducer
});
