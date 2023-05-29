import { EditedTodo } from '../../types/form.types';
import { ITodo } from '../../types/todos.type';

export const InitialFormValues = (editedTodo?: EditedTodo) => ({
  title: editedTodo?.title || '',
  description: editedTodo?.description || ''
});

export const defaultTodo: ITodo = {
  title: '',
  description: '',
  id: 0,
  isCompleted: false,
  isPrivate: false
};

export const InitialAuthFormValues = {
  email: '',
  password: ''
};

export const initialProfileFormValues = {
  email: '',
  currentPassword: '',
  updatePassword: ''
};

export const InitialForgotFormValues = {
  email: ''
};
