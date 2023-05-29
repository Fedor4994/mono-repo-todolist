export type EditedTodo = {
  id?: string;
  title?: string;
  description?: string;
};

export type FormProps = {
  editedTodo?: EditedTodo;
  onClose: () => void;
};
export type AuthFormProps = {
  isRegister?: boolean;
};
export type ForgotFormProps = { setIsActive: (isActive: boolean) => void };
