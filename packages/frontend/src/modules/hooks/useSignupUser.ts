import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { TSignupUser } from '../types/fn-user.types';

export const useSignupUser = (signupUserFn: TSignupUser, key: string) => {
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const signup = useMutation(signupUserFn, {
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

  return { signup, error };
};
