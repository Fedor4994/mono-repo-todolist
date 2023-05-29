import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { TChangePassword } from '../types/fn-user.types';

export const useChangePasswordUser = (changePasswordFn: TChangePassword, key: string) => {
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const changePassword = useMutation(changePasswordFn, {
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

  return { changePassword, error };
};
