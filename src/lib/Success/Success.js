import React from 'react';
import './Success.css';

export const Success = ({ data, refresh }) => (
  <div className="react-axios-success">
    <pre className="react-axios-preview">
      {JSON.stringify(data, null, 2)}
    </pre>
    <button onClick={refresh}>Refresh</button>
  </div>
);
