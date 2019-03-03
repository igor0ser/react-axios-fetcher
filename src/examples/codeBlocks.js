export const codeBlocks = [
`<Fetcher url="https://randomuser.me/api">
  {({ data, refresh }) => (
    <div>
      <h4>{data.info.seed}</h4>
      <button onClick={refresh}>Refresh</button>
    </div>
  )}
</Fetcher>`,
`<Fetcher
  url="https://randomuser.me/api"
  component={ShowInfo}
/>`,
`<Fetcher url="https://randomuser.me/api"/>`,
`<Fetcher
  url="https://randomuser.me/api"
  config={{ method: 'POST' }}
/>`,
`<Fetcher
  url="https://randomuser.me/api"
  onLoading={() => alert('LOADING')}
  onError={() => alert('ERROR')}
  onSuccess={() => alert('SUCCESS')}
/>`,
`<Fetcher
  url={"https://randomuser.me/api"}
  loader={Spin}
  error={Empty}
/>`,
];
