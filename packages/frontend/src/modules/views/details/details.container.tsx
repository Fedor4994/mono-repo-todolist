import React, { ChangeEvent, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import Container from '../../common/components/container/container.component';
import Toggler from '../../common/components/toggler/toggler.component';
import * as Styled from './details-container.styled';
import Header from '../../common/components/header/header.component';
import cube from '../../../assets/image/details-cube.svg';
import Modal from '../../common/components/modal/modal.component';
import TodoForm from '../../common/components/todo-form/todo-form.component';
import { useGetById } from '../../hooks/useGetTodoById';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';
import { httpService } from '../../services/http.service';
import { useUpdateTodo } from '../../hooks/useUpdateTodo';
import { ITodo } from '../../types/todos.type';
import { defaultTodo } from '../../common/consts/initialValues';
import { ErrorComponent } from '../../common/components/error/error.component';

const DetailsPageContainer = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { updateTodo, error: errorUpdate } = useUpdateTodo(
    httpService.updateTodo,
    QUERY_KEYS.GETBYID
  );

  const { isLoading, error, data } = useGetById(
    httpService.getTodoById,
    Number(id),
    QUERY_KEYS.GETBYID
  );

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: QUERY_KEYS.GETBYID });
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const todo = data?.data || defaultTodo;

  const { title, description, isCompleted, isPrivate } = todo;

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>, todoTarget: ITodo) => {
    const newChecked = event.target.checked;
    const updateComplete = { ...todoTarget, isCompleted: newChecked };
    updateTodo.mutate(updateComplete);
  };

  const handlePrivateChange = (event: React.ChangeEvent<HTMLInputElement>, todoTarget: ITodo) => {
    const newPrivate = event.target.checked;
    const updateComplete = { ...todoTarget, isPrivate: newPrivate };
    updateTodo.mutate(updateComplete);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Container>
      <Header />

      {isLoading && <h1>Loading...</h1>}

      {error && <ErrorComponent error={error} />}

      <Styled.Title>{title}</Styled.Title>

      {description && (
        <Styled.Description>
          Description: <br /> <br />
          {description}
        </Styled.Description>
      )}

      <Styled.StatusToggler>
        Complete
        <Toggler
          checked={isCompleted}
          onChange={(event: ChangeEvent<HTMLInputElement>) => handleSwitchChange(event, todo)}
        />
      </Styled.StatusToggler>

      <Styled.StatusToggler>
        Private
        <Toggler
          checked={isPrivate}
          onChange={(event: ChangeEvent<HTMLInputElement>) => handlePrivateChange(event, todo)}
        />
      </Styled.StatusToggler>

      <Styled.BackButton onClick={openModal}>Edit todo</Styled.BackButton>
      {errorUpdate && <ErrorComponent error={errorUpdate} />}

      <Styled.Image src={cube} alt="cube" />

      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <TodoForm onClose={closeModal} editedTodo={{ id, title, description }} />
        </Modal>
      )}
    </Container>
  );
};

export default DetailsPageContainer;
