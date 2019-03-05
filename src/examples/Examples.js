import React from 'react';
import { ExampleWrapper } from './ExapmpleWrapper';
import { examples } from './examplesArray';
import { ReactComponent as Logo } from './logo.svg';
import 'antd/dist/antd.css';
import './Examples.css';


const Examples = () =>(
  <div className="root">
    <h2 className="title">
        <Logo className="logo" />
        React Fetcher
    </h2>
    {examples.map(({ code, title, fn }) => (
      <ExampleWrapper
        title={title}
        code={code}
        key={title}
      >
        {fn}
      </ExampleWrapper>
    ))}
  </div>
);

export default Examples;
