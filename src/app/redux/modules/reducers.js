// @flow weak

import { routerReducer }    from 'react-router-redux';
import { combineReducers }  from 'redux';
import views                from './views';
import fakeModuleWithFetch  from './fakeModuleWithFetch';
import lex from './reducers/lexReducer'

export default combineReducers({
  views,
  fakeModuleWithFetch,
  lex,
  routing: routerReducer
});
