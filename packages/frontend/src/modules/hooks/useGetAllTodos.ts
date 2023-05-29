import { useQuery } from 'react-query';
import { TypeGetAllTodos } from '../types/fn-todo.type';
import { TodosQuery } from '../types/todos.type';

export const useGetAllTodo = (getAllTodoFn: TypeGetAllTodos, query: TodosQuery, key: string) => {
  const { isLoading, error, data } = useQuery([key, query], () => getAllTodoFn(query));
  if (isLoading) {
    return { data: null, error: null, isLoading: true };
  }

  if (error) {
    const errorMessage = (error as Error).message;
    return { data: null, error: errorMessage, isLoading: false };
  }
  return { data, error: null, isLoading: false };
};
