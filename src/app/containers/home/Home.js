import { connect }        from 'react-redux';
import * as viewsActions  from '../../redux/actions';
import { Home }           from '../../views';


const mapStateToProps = (state) => {
  return {
    currentView:  state.views.currentView
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    enterHome: () => dispatch(viewsActions.enterHome()),
    leaveHome: () => dispatch(viewsActions.leaveHome())
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);
