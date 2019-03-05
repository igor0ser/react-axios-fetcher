## React Fetcher

A simple and lightweight component for fetching data without writing tones of template code. Uses [axios](https://github.com/axios/axios).
Features:
 - fetch data from passed url
 - redefine axios config if you want to modify request
 - define components for *Loading*, *Error* and *Success* states (or use default ones)
 - refresh data if you need
 - request is cancelled if component is unmounted or new request is sent

## Installation

```bash
npm install react-axios-fetcher
```

## Usage

You can pass function as a children or pass prop `component` to render received data:

```javascipt
import Fetcher from 'react-axios-fetcher';

const ShowData = ({ data, refresh }) => (...)

const Component1 = () => (
  <Fetcher url="https://randomuser.me/api">
    ({ data, refresh }) => <ShowData data={data} refresh={refresh} />
  </Fetcher>
)

const Component2 = () => (
  <Fetcher url="https://randomuser.me/api" component={ShowData} />
)
```

See more examples at [Demo](https://igor0ser.github.io/).

## Api

| Prop                | Type                                                                | Default            | Description                                                          |
|---------------------|---------------------------------------------------------------------|--------------------|----------------------------------------------------------------------|
| url                 | string                                                              | -                  | Url to fetch data. Required if not defined in config.                |
| config              | [AxiosRequestConfig](https://github.com/axios/axios#request-config) | -                  | Axios config to rewrite defaults. You can redefine http method here. |
| children            | ({ data: any, refresh: () => void }) => React.Element               | -                  | Function to render when fetch is succeeded.                          |
| component           | React.Component<{ data: any, refresh: () => void }>                 | Success            | Component to render when fetch succeeded and children aren't passed. |
| error               | React.Component<{ error: AxiosError, refresh: () => void }>         | Error              | Component to render when fetch failed.                               |
| loader              | React.Component<{ refresh: () => void }>                            | Loader             | Component to render when fetch is in process.                        |
| onLoading           | () => void                                                          | -                  | Callback would be invoked when fetch started.                        |
| onError             | (error) => void                                                     | -                  | Callback would be invoked when failed.                               |
| onSuccess           | (data) => void                                                      | -                  | Callback would be invoked when succeeded.                            |
| getDataFromResponse | (response: AxiosResponse) => any                                    | ({ data }) => data | Get needed data from received response.                              |

## Why axios instead of native fetch

[Why I won’t be using Fetch API in my apps](https://medium.com/@shahata/why-i-wont-be-using-fetch-api-in-my-apps-6900e6c6fe78).
