import { useState, useCallback, useEffect } from 'react';
import axios, { CancelToken } from 'axios';
import { noop } from './utils'

export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const SUCCESS = 'SUCCESS';

export const useFetch = ({ url, config, callbacks }) => {
  const { onLoading, onError, onSuccess } = callbacks;
  const [{ fetchState, data, error }, changeState] = useState({
    fetchState: LOADING,
  });

  const [refreshToken, changeRefreshToken] = useState(Symbol());

  useEffect(() => {
    let cancel = noop;

    if (fetchState !== LOADING) changeState({ fetchState: LOADING });
    onLoading();

    axios({
      url,
      cancelToken: new CancelToken(c => { cancel = c }),
      method: 'GET',
      ...config,
    })
      .then((data) => {
        changeState({ fetchState: SUCCESS, data });
        onSuccess();
      })
      .catch((error) => {
        changeState({ fetchState: ERROR, error });
        onError();
      });

    return cancel
  }, [refreshToken, url]);

  return {
    fetchState,
    data,
    error,
    refresh: useCallback(() => changeRefreshToken(Symbol()), [])
  }
}