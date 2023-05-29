import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ITodo } from '../../../types/todos.type';
import Button from '../button/button.component';
import Toggler from '../toggler/toggler.component';
import * as Styled from './todo-table.styled';
import { httpService } from '../../../services/http.service';
import { QUERY_KEYS } from '../../consts/app-keys.const';
import { useRemoveTodo } from '../../../hooks/useDeleteTodo';
import { useUpdateTodo } from '../../../hooks/useUpdateTodo';
import { ErrorComponent } from '../error/error.component';

const TodoTable = ({ todos }: { todos: ITodo[] }) => {
  const navigate = useNavigate();
  const { removeTodo, error: errorRemove } = useRemoveTodo(httpService.deleteTodo, QUERY_KEYS.TODO);
  const { updateTodo, error: errorUpdate } = useUpdateTodo(httpService.updateTodo, QUERY_KEYS.TODO);

  const handleDelete = (id: number) => {
    removeTodo.mutate(id);
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>, todoTarget: ITodo) => {
    const newChecked = event.target.checked;
    const updateComplete = { ...todoTarget, isCompleted: newChecked };
    updateTodo.mutate(updateComplete);
  };

  return (
    <Styled.Table>
      <thead>
        <tr>
          <th>Title</th>
          <th
            style={{
              width: '100%'
            }}
          >
            Description
          </th>
          <th>Actions</th>
        </tr>
      </thead>

      {todos.map((todo) => (
        <tbody key={todo.id}>
          <tr>
            <td>{todo.title}</td>
            <td>{todo.description || '-'}</td>
            <td>
              <Styled.ButtonsWrapper>
                <Button onClick={() => navigate(`/todo/${todo.id}`)}>View</Button>
                <Button onClick={() => handleDelete(todo.id)}>Delete</Button>
                <Toggler
                  checked={todo.isCompleted}
                  onChange={
                    (event: ChangeEvent<HTMLInputElement>) => handleSwitchChange(event, todo)
                    /* eslint-disable */
                  }
                />
              </Styled.ButtonsWrapper>
            </td>
          </tr>
        </tbody>
      ))}

      {errorRemove && <ErrorComponent error={errorRemove} />}
      {errorUpdate && <ErrorComponent error={errorUpdate} />}
    </Styled.Table>
  );
};

export default TodoTable;
