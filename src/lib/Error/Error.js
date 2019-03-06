import React from 'react';
import PropTypes from 'prop-types';
import './Error.css';

export const ErrorComp = ({ error, refresh }) => (
  <div className="react-axios-error">
    <p>Something went terribly wrong.</p>
    <p>{error.message}</p>
    <button onClick={refresh}>Refresh</button>
  </div>
);

ErrorComp.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired
  }).isRequired,
  refresh: PropTypes.func.isRequired,
};
