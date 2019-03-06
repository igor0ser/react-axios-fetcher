import React from 'react';
import Fetcher from '../lib/index';
import { Spin, Empty } from 'antd';

const ShowInfo = ({ data, refresh }) => (
  <div>
    <h4>{data.info.seed}</h4>
    <button onClick={refresh}>Refresh</button>
  </div>
)

const getUrl = shouldSuccess => shouldSuccess
  ? 'https://randomuser.me/api'
  : 'https://wrong-url.com';

export const examples = [
  {
    title: 'Default JSON preview (for debug purposes)',
    code: shouldSuccess => `<Fetcher url="${getUrl(shouldSuccess)}"/>`,
    fn: shouldSuccess => <Fetcher url={getUrl(shouldSuccess)}/>,
  },
  {
    title: 'With children render function',
    code: shouldSuccess => `
      <Fetcher url="${getUrl(shouldSuccess)}">
        {({ data, refresh }) => (
          <div>
            <h4>{data.info.seed}</h4>
            <button onClick={refresh}>Refresh</button>
          </div>
        )}
      </Fetcher>
    `,
    fn: shouldSuccess =>
      <Fetcher url={getUrl(shouldSuccess)}>
        {({ data, refresh }) => (
          <div>
            <h4>{data.info.seed}</h4>
            <button onClick={refresh}>Refresh</button>
          </div>
        )}
      </Fetcher>
  },
  {
    title: 'With passed component',
    code: shouldSuccess => `
      <Fetcher
        url="${getUrl(shouldSuccess)}"
        component={ShowInfo}
      />
    `,
    fn: shouldSuccess =>
      <Fetcher
        url={getUrl(shouldSuccess)}
        component={ShowInfo}
      />
  },
  {
    title: 'With reassigned axios config',
    code: shouldSuccess =>
      `<Fetcher url="${getUrl(shouldSuccess)}" config={{ method: 'HEAD' }}`,
    fn: shouldSuccess =>
      <Fetcher url={getUrl(shouldSuccess)} config={{ method: 'HEAD' }}/>
  },
  {
    title: 'With passed callbacks',
    code: shouldSuccess => `
      <Fetcher
        url="${getUrl(shouldSuccess)}"
        onLoading={() => alert('LOADING')}
        onError={() => alert('ERROR')}
        onSuccess={() => alert('SUCCESS')}
      />
    `,
    fn: shouldSuccess =>
      <Fetcher
        url={getUrl(shouldSuccess)}
        onLoading={() => alert('LOADING')}
        onError={() => alert('ERROR')}
        onSuccess={() => alert('SUCCESS')}
      />,
  },
  {
    title: 'With reassigned loader and error components',
    code: shouldSuccess => `
      <Fetcher
        url="${getUrl(shouldSuccess)}"
        loader={Spin}
        error={Empty}
      />
    `,
    fn: shouldSuccess =>
      <Fetcher
        url={getUrl(shouldSuccess)}
        loader={Spin}
        error={Empty}
      />,
  },
];
