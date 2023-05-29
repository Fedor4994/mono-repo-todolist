import React, { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ITodo } from '../../../types/todos.type';
import * as Styled from './todo-item.styled';
import Shadow from '../shadow/shadow.component';
import Toggler from '../toggler/toggler.component';
import Button from '../button/button.component';
import { useRemoveTodo } from '../../../hooks/useDeleteTodo';
import { httpService } from '../../../services/http.service';
import { QUERY_KEYS } from '../../consts/app-keys.const';
import { useUpdateTodo } from '../../../hooks/useUpdateTodo';
import { ErrorComponent } from '../error/error.component';

export const TodoItem = ({ todo, className }: { todo: ITodo; className?: string }) => {
  const navigate = useNavigate();
  const { removeTodo, error: errorRemove } = useRemoveTodo(httpService.deleteTodo, QUERY_KEYS.TODO);
  const { updateTodo, error: errorUpdate } = useUpdateTodo(httpService.updateTodo, QUERY_KEYS.TODO);

  const handleDelete = () => {
    removeTodo.mutate(todo.id);
  };

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>, todoTarget: ITodo) => {
    const newChecked = event.target.checked;
    const updateComplete = { ...todoTarget, isCompleted: newChecked };
    updateTodo.mutate(updateComplete);
  };

  const goToDetailsPage = () => {
    navigate(`/todo/${todo.id}`);
  };

  return (
    <Styled.Card className={className}>
      <h3>{todo.title}</h3>
      <Styled.Description>{todo.description.slice(0, 100) || '-'}</Styled.Description>

      <Styled.Controlls>
        <Styled.ButtonsWrapper>
          <Button onClick={goToDetailsPage}>View</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </Styled.ButtonsWrapper>

        <Toggler
          checked={todo.isCompleted}
          onChange={(event: ChangeEvent<HTMLInputElement>) => handleSwitchChange(event, todo)}
        />
      </Styled.Controlls>
      {errorRemove && <ErrorComponent error={errorRemove} />}
      {errorUpdate && <ErrorComponent error={errorUpdate} />}

      <Shadow top={4} left={4} />
    </Styled.Card>
  );
};
