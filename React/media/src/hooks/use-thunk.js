import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback((arg) => {
    setIsLoading(true);
    dispatch(thunk(arg))
      .unwrap()
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [dispatch, thunk]);

  return [isLoading, error, runThunk];
}

export { useThunk };
