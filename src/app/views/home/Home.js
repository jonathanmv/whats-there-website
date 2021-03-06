// @flow weak

import React, {
  PureComponent
}                     from 'react';
import PropTypes      from 'prop-types';
import {Jumbotron}    from '../../components';
import AnimatedView   from '../../components/animatedView/AnimatedView';
import LexRequests   from '../../components/lexRequests/LexRequests';
import MakeLexRequest   from '../../components/makeLexRequest/MakeLexRequest';
import PlaidAuthenticateAccount from '../../containers/plaid/PlaidAuthenticateAccount';
import PlaidQueryTransactions from '../../containers/plaid/PlaidQueryTransactions';
import PlaidTransactions from '../../components/plaid/PlaidTransactions';
import { Link }       from 'react-router-dom';

class Home extends PureComponent {
  static propTypes= {
    lexRequests:  PropTypes.array.isRequired,
    currentView:  PropTypes.string.isRequired,
    submitQuery:    PropTypes.func.isRequired,
    enterHome:    PropTypes.func.isRequired,
    leaveHome:    PropTypes.func.isRequired
  };

  componentDidMount() {
    const { enterHome } = this.props;
    enterHome();
  }

  componentWillUnmount() {
    const { leaveHome } = this.props;
    leaveHome();
  }

  render() {
    // const { lexRequests, submitQuery } = this.props
    const { plaidTransactions } = this.props
    return(
      <div className="home">
        <PlaidAuthenticateAccount />
        <PlaidQueryTransactions />
        <PlaidTransactions transactions={plaidTransactions} />
        {/* <MakeLexRequest submitQuery={submitQuery} />
        <LexRequests lexRequests={lexRequests} /> */}
      </div>
    );
  }
}

export default Home;
