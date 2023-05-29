import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { TForgotPassword } from '../types/fn-user.types';

export const useForgotPasswordUser = (forgotPasswordFn: TForgotPassword, key: string) => {
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const forgotPassword = useMutation(forgotPasswordFn, {
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

  return { forgotPassword, error };
};
