import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { TypeRemoveTodo } from '../types/fn-todo.type';

export const useRemoveTodo = (removeTodoFn: TypeRemoveTodo, key: string) => {
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const removeTodo = useMutation(removeTodoFn, {
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
  return { removeTodo, error };
};
