// @flow weak

import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as viewsActions      from '../../redux/modules/views';
import * as lexActions      from '../../redux/modules/actions/lexActions';
import * as lexSelectors      from '../../redux/modules/selectors/lexSelectors';
import { Home }               from '../../views';


const mapStateToProps = state => {
  return {
    currentView:  state.views.currentView,
    lexRequests: lexSelectors.lex(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      enterHome: viewsActions.enterHome,
      leaveHome: viewsActions.leaveHome,
      submitQuery: lexActions.submitQuery
    },
    dispatch
  );
};

/*
  without bindActionCreators:
 */
// const mapDispatchToProps = (dispatch) => {
//   return {
//     enterHome: () => dispatch(viewsActions.enterHome()),
//     leaveHome: () => dispatch(viewsActions.leaveHome())
//   };
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
