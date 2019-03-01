import React from 'react';
import './Error.css';

export const ErrorComp = ({ error, refresh }) => (
  <div className="react-axios-error">
    <p>Something went terribly wrong.</p>
    <p>{error.message}</p>
    <button onClick={refresh}>Refresh</button>
  </div>
);
