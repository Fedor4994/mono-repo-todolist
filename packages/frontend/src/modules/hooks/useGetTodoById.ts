import { useQuery } from 'react-query';
import { TypeByIdTodo } from '../types/fn-todo.type';

export const useGetById = (getByIdFn: TypeByIdTodo, id: number, key: string) => {
  const { isLoading, error, data } = useQuery([key, id], () => getByIdFn(id));

  if (isLoading) {
    return { data: null, error: null, isLoading: true };
  }

  if (error) {
    const errorMessage = (error as Error).message;
    return { data: null, error: errorMessage, isLoading: false };
  }

  return { data, error: null, isLoading: false };
};
