import React, { useState } from 'react';
import { Switch, Button } from 'antd';
import './ExampleWrapper.css';

export const ExampleWrapper = ({ title, children, code }) => {
  const [start, changeStart] = useState(false);
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
          {/*<input*/}
            {/*type="checkbox"*/}
            {/*checked={shouldSuccess}*/}
            {/*onChange={(e) => changeShouldSuccess(e.target.checked)}*/}
          {/*/>*/}
          &nbsp;
          Use proper url
        </label>
        &nbsp;
        {!start && (
          <Button
            onClick={() => changeStart(true)}
            type={shouldSuccess ? 'primary' : 'danger'}
          >
            Start loading
          </Button>
        )}
      </div>
      <div className="example-wrapper__example">
        {start && children(shouldSuccess)}
      </div>
    </div>
  );
}