import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { TypeAddTodo, TypeOnClose } from '../types/fn-todo.type';

export const useAddTodo = (addTodoFn: TypeAddTodo, onClose: TypeOnClose, key: string) => {
  const [error, setError] = useState<string | null>(null);

  const queryClient = useQueryClient();
  const addTodo = useMutation(addTodoFn, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: key });
      onClose();
    },
    onError: (e) => {
      if (e) {
        const errorMessage = (e as Error).message;
        setError(errorMessage);
      }
    }
  });

  return { addTodo, error };
};
