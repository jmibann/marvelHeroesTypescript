import {
  useRef,
  useReducer,
  useCallback,
  useLayoutEffect,
} from 'react';

type ObjectType = Record<string, any>

type DispachType = (...args: any[]) => void

const useSafeDispatch = (dispatch: DispachType) => {
  const mounted = useRef(false);

  useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    }
  }, []);

  return useCallback(
    (...args: any[]) => (mounted.current ? dispatch(...args) : void 0),
    [dispatch],
  )
}

const defaultInitialState = {
  status: 'idle',
  data: null,
  error: null,
};

const useAsync = (initialState: any) => {
  const initialStateRef = useRef({
    ...defaultInitialState,
    ...initialState,
  });

  const [{ status, data, error }, setState] = useReducer(
    (s: ObjectType, a: ObjectType) => ({ ...s, ...a }),
    initialStateRef.current,
  )

  const safeSetState = useSafeDispatch(setState);

  const setData = useCallback(
    data => safeSetState({ data, status: 'resolved' }),
    [safeSetState],
  );

  const setError = useCallback(
    error => safeSetState({ error, status: 'rejected' }),
    [safeSetState],
  );

  const reset = useCallback(
    () => safeSetState(initialStateRef.current),
    [safeSetState],
  );

  const run = useCallback(
    promise => {
      if (!promise || !promise.then) {
        throw new Error(
          `The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?`,
        );
      }

      safeSetState({ status: 'pending' });

      return promise
        .then((data: any) => {
          setData(data);
          return data;
        },
          (error: any) => {
            setError(error);
            return Promise.reject(error);
          },
        )
    },
    [safeSetState, setData, setError],
  )

  return {
    isIdle: status === 'idle',
    isLoading: status === 'pending',
    isError: status === 'rejected',
    isSuccess: status === 'resolved',

    setData,
    setError,
    error,
    status,
    data,
    run,
    reset,
  }
}

export default useAsync;
