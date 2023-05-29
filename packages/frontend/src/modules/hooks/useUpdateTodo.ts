import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { TypeOnClose, TypeUpdateTodo } from '../types/fn-todo.type';

export const useUpdateTodo = (updateTodoFn: TypeUpdateTodo, key: string, onClose?: TypeOnClose) => {
  const [error, setError] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const updateTodo = useMutation(updateTodoFn, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: key });

      if (onClose) {
        onClose();
      }
    },
    onError: (e) => {
      if (e) {
        const errorMessage = (e as Error).message;
        setError(errorMessage);
      }
    }
  });

  return { updateTodo, error };
};
