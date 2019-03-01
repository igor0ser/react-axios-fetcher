import React from 'react';
import { Loader as DefaultLoader } from './Loader/Loader'
import { ErrorComp as DefaultErrorComp } from './Error/Error'
import { Success } from './Success/Success'
import { useFetch, LOADING, ERROR, SUCCESS } from './useFetch';
import { noop } from './utils'

const Fetcher = ({
  url,
  loader: Loader,
  error: ErrorComp,
  component: Component,
  children,
  transformData,
  config,
  onLoading,
  onError,
  onSuccess,
}) => {
  const callbacks = { onLoading, onError, onSuccess };
  const { fetchState, data, error, refresh } = useFetch({ url, config, callbacks });

  if (fetchState === LOADING) {
    return <Loader />;
  }

  if (fetchState === ERROR) {
    return <ErrorComp error={error} refresh={refresh} />;
  }

  if (fetchState === SUCCESS) {
    const props = { data: transformData(data), refresh };
    return children ? children(props) : <Component {...props} />;
  }

  return null;
}

const defaultTransformData = ({ data }) => data;

Fetcher.defaultProps = {
  loader: DefaultLoader,
  error: DefaultErrorComp,
  component: Success,
  transformData: defaultTransformData,
  onLoading: noop,
  onError: noop,
  onSuccess: noop,
}

export default Fetcher;