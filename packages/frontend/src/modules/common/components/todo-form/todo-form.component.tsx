import React from 'react';
import { useFormik } from 'formik';
import * as Styled from './todo-form.styled';
import { useAddTodo } from '../../../hooks/useAddTodo';
import { httpService } from '../../../services/http.service';
import { QUERY_KEYS } from '../../consts/app-keys.const';
import { useUpdateTodo } from '../../../hooks/useUpdateTodo';
import { validationSchema } from '../../../schemas/todo.validation';
import { FormProps } from '../../../types/form.types';
import { ITodoData } from '../../../types/todos.type';
import { InitialFormValues } from '../../consts/initialValues';
import { ErrorComponent } from '../error/error.component';

const TodoForm = ({ editedTodo, onClose }: FormProps) => {
  const { addTodo, error } = useAddTodo(httpService.createTodo, onClose, QUERY_KEYS.TODO);
  const { updateTodo, error: errorUpdate } = useUpdateTodo(
    httpService.updateTodo,
    QUERY_KEYS.GETBYID,
    onClose
  );

  const submitTodoBody = (fields: ITodoData) => {
    if (editedTodo) {
      updateTodo.mutate({ id: Number(editedTodo.id), ...fields });
    } else {
      addTodo.mutate(fields);
    }
  };

  const { values, handleBlur, errors, handleChange, handleSubmit } = useFormik({
    initialValues: InitialFormValues(editedTodo),
    validationSchema,
    onSubmit: submitTodoBody
  });

  if (error) {
    return <ErrorComponent error={error} />;
  }

  if (errorUpdate) {
    return <ErrorComponent error={errorUpdate} />;
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.Input
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.title}
        id="title"
        placeholder="Title&#42;"
        type="text"
      />
      <Styled.Textarea
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.description}
        id="description"
        placeholder="Description (optional)"
      />
      <Styled.SubmitWrapper>
        <Styled.SubmitButton type="submit">{editedTodo ? 'Edit' : 'Add'} todo</Styled.SubmitButton>
      </Styled.SubmitWrapper>
      {errors.title && <Styled.ErrorMessage>{`< ${errors.title} >`}</Styled.ErrorMessage>}
      {errors.description && (
        <Styled.ErrorMessage>{`< ${errors.description} >`}</Styled.ErrorMessage>
      )}
    </Styled.Form>
  );
};
export default TodoForm;
