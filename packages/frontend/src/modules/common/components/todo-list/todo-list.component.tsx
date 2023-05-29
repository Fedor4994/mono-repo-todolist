import React from 'react';
import { ITodo } from '../../../types/todos.type';
import { TodoItem } from '../todo-item/todo-item.component';
import * as Styled from './todo-list.styled';

export const TodoList = ({ todos }: { todos: ITodo[] }) => (
  <Styled.TodoList>
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ))}
  </Styled.TodoList>
);
