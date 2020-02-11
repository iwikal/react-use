import { useReducer } from 'react';

const reducer = (num: number): number => ++num % 1_000_000;

const useUpdate = () => {
  const [, dispatch] = useReducer(reducer, 0);
  return dispatch;
};

export default useUpdate;
