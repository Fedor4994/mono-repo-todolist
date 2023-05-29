import { AxiosResponse } from 'axios';
import { ITodo, ITodoData, TodosQuery } from './todos.type';

export type TypeUpdateTodo = (
  todo: Pick<ITodo, 'id' | 'description' | 'title'>
) => Promise<AxiosResponse>;
export type TypeRemoveTodo = (id: number) => Promise<AxiosResponse>;

export type TypeGetAllTodos = (
  query: TodosQuery
) => Promise<AxiosResponse<{ todos: ITodo[]; total: number }>>;

export type TypeByIdTodo = (id: number) => Promise<AxiosResponse<ITodo>>;

export type TypeAddTodo = (todo: ITodoData) => Promise<AxiosResponse<ITodo>>;

export type TypeOnClose = () => void;
