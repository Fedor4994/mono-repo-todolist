import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { TUserLogin } from '../types/fn-user.types';

export const useLoginUser = (loginUserFn: TUserLogin, key: string) => {
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const loginUser = useMutation(loginUserFn, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: key });
    },
    onError: (e) => {
      if (e) {
        const errorMessage = (e as Error).message;
        setError(errorMessage);
      }
    }
  });

  return { loginUser, error };
};
