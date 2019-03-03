import React, { useState } from 'react';
import { Switch, Button } from 'antd';
import './ExampleWrapper.css';

export const ExampleWrapper = ({ title, children, code }) => {
  const [showFetcher, changeShowFetcher] = useState(false);
  const [shouldSuccess, changeShouldSuccess] = useState(true);


  return (
    <div className="example-wrapper">
      <h3>{title}:</h3>
      <pre className="example-wrapper__code">
        {code}
      </pre>
      <div className="example-wrapper__controls">
        <label>
          <Switch
            checked={shouldSuccess}
            onChange={changeShouldSuccess}
          />
          &nbsp;
          Use proper url
        </label>
        &nbsp;
        <Button
          onClick={() => changeShowFetcher(!showFetcher)}
          type={shouldSuccess ? 'primary' : 'danger'}
          icon={showFetcher ? 'close-square' : 'play-circle'}
          className="example-wrapper__button"
        >
          {showFetcher ? 'Unmount Fetcher' : 'Render Fetcher'}
        </Button>
      </div>
      <div className="example-wrapper__example">
        {showFetcher ? children(shouldSuccess) : (
          <em>Fetcher will be rendered here</em>
        )}
      </div>
    </div>
  );
}