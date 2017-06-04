// @flow weak

import React              from 'react';
import PropTypes          from 'prop-types';
import * as lexSelectors from '../../redux/modules/selectors/lexSelectors'

const createHandler = submitQuery => event => {
  event.preventDefault()
  const query = event.target.query.value
  event.target.query.value = ''
  submitQuery(query)
}

const MakeLexRequest = ({submitQuery}) => (
  <form onSubmit={createHandler(submitQuery)}>
    <div className="form-group">
      <label htmlFor="query">Ask me something</label>
      <input type="text" className="form-control" id="query" placeholder="what's the maximum age" />
    </div>
  </form>
)

MakeLexRequest.propTypes = {
  submitQuery: PropTypes.func.isRequired
};

export default MakeLexRequest;
