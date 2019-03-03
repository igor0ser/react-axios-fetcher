import React from 'react';
import { Spin, Empty } from 'antd';
import Fetcher from '../lib/index';
import { ExampleWrapper } from './ExapmpleWrapper';
import { codeBlocks } from './codeBlocks'
import 'antd/dist/antd.css';
import './Examples.css';


const ShowInfo = ({ data, refresh }) => (
  <div>
    <h4>{data.info.seed}</h4>
    <button onClick={refresh}>Refresh</button>
  </div>
)

const getUrl = shouldSuccess => shouldSuccess
  ? 'https://randomuser.me/api'
  : 'https://random1user.me/api';

const Examples = () =>(
  <div className="root">
    <h2>React Axios Fetcher</h2>
    <ExampleWrapper
      title="Default variant (json preview)"
      code={codeBlocks[0]}
    >
      {shouldSuccess => <Fetcher url={getUrl(shouldSuccess)}/>}
    </ExampleWrapper>
    <ExampleWrapper
      title="With children render function"
      code={codeBlocks[1]}
    >
      {shouldSuccess =>
        <Fetcher url={getUrl(shouldSuccess)}>
          {({ data, refresh }) => (
            <div>
              <h4>{data.info.seed}</h4>
              <button onClick={refresh}>Refresh</button>
            </div>
          )}
        </Fetcher>
      }
    </ExampleWrapper>
    <ExampleWrapper
      title="With passed component"
      code={codeBlocks[2]}
    >
      {shouldSuccess => <Fetcher
        url={getUrl(shouldSuccess)}
        component={ShowInfo}
      />}
    </ExampleWrapper>
    <ExampleWrapper
      title="With reassigned axios config (shows error after trying to post)"
      code={codeBlocks[3]}
    >
      {shouldSuccess =>
        <Fetcher url={getUrl(shouldSuccess)} config={{ method: 'PUT' }}/>
      }
    </ExampleWrapper>
    <ExampleWrapper
      title="With passed callbacks"
      code={codeBlocks[4]}
    >
      {shouldSuccess => <Fetcher
        url={getUrl(shouldSuccess)}
        onLoading={() => alert('LOADING')}
        onError={() => alert('ERROR')}
        onSuccess={() => alert('SUCCESS')}
      />}
    </ExampleWrapper>
    <ExampleWrapper
      title="With reassigned loader and error"
      code={codeBlocks[5]}
    >
      {shouldSuccess => <Fetcher
        url={getUrl(shouldSuccess)}
        loader={Spin}
        error={Empty}
      />}
    </ExampleWrapper>
  </div>
);

export default Examples;
