import React from 'react';
import PropTypes from 'prop-types';
import './Success.css';

export const Success = ({ data, refresh }) => (
  <div className="react-axios-success">
    <pre className="react-axios-preview">
      {JSON.stringify(data, null, 2)}
    </pre>
    <button onClick={refresh}>Refresh</button>
  </div>
);

Success.propTypes = {
  data: PropTypes.any,
  refresh: PropTypes.func.isRequired,
};
