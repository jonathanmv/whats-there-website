// @flow weak

import React              from 'react';
import PropTypes          from 'prop-types';
import * as lexSelectors from '../../redux/modules/selectors/lexSelectors'

let LexRequest = ({lexRequest}) => (
  <tr className="lex-request">
    <td>{lexSelectors.isCompleted(lexRequest) ? 'Done' : 'Waiting ...' }</td>
    <td>{lexSelectors.query(lexRequest)}</td>
    <td>{lexSelectors.responseText(lexRequest)}</td>
  </tr>
)

const LexRequests = ({lexRequests}) => (
  <table className="lex-requests table">
    <thead>
      <tr>
        <th>Completed</th>
        <th>Query</th>
        <th>Response</th>
      </tr>
    </thead>
    <tbody>
      {lexRequests.map((request, key) => <LexRequest key={key} lexRequest={request} />)}
    </tbody>
  </table>
)

LexRequests.propTypes = {
  lexRequests: PropTypes.array.isRequired
};

export default LexRequests;
