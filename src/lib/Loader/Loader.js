import React from 'react';
import './Loader.css';

export const Loader = () => (
  <div className="react-axios-loading">
    <div className="react-axios-spinner">
      <i className="react-axios-spinner__item" />
      <i className="react-axios-spinner__item" />
      <i className="react-axios-spinner__item" />
      <i className="react-axios-spinner__item" />
    </div>
  </div>
);
