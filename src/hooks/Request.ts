import { useCallback, useState } from 'react';

export const useRequest = <T extends (...args: any[]) => Promise<any>>(
  request: T
) => {
  const [fetching, setFetching] = useState<boolean>(false);

  const handleRequest: (...args: Parameters<T>) => Promise<ReturnType<T>> =
    useCallback(
      async (...args) => {
        if (fetching) {
          return;
        }

        setFetching(true);

        try {
          const data = await request(...args);

          return { ...data };
        } finally {
          setFetching(false);
        }
      },
      [request, fetching]
    );

  return { fetching, handleRequest };
};
