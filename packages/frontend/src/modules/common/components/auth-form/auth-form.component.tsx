import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Styled from './auth-form.styled';
import { IUser } from '../../../types/user.types';
import { AuthFormProps } from '../../../types/form.types';
import { InitialAuthFormValues } from '../../consts/initialValues';
import { validationSchema } from '../../../schemas/user.validation';
import Shadow from '../shadow/shadow.component';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { QUERY_KEYS, STORAGE_KEYS } from '../../consts/app-keys.const';
import { useLoginUser } from '../../../hooks/useLoginUser';
import { userService } from '../../../services/user.service';
import { TSetValueFunction } from '../../../types/localstorage.types';
import { handleLogin } from '../../../../utils/auth/handleLogin';
import { useSignupUser } from '../../../hooks/useSignupUser';
import { handlerSignup } from '../../../../utils/auth/handleSignup';

const AuthForm = ({ isRegister }: AuthFormProps) => {
  const navigate = useNavigate();

  const [, setValue] = useLocalStorage(STORAGE_KEYS.TOKEN, '');
  const { loginUser } = useLoginUser(userService.login, QUERY_KEYS.LOGIN);
  const { signup } = useSignupUser(userService.signup, QUERY_KEYS.SIGNUP);

  const submitTodoBody = (fields: IUser, resetFn: () => void) => {
    if (isRegister) {
      handlerSignup(fields, signup, setValue as TSetValueFunction, navigate);
    } else {
      handleLogin(fields, loginUser, setValue as TSetValueFunction, navigate);
    }
    resetFn();
  };

  const { values, handleBlur, errors, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: InitialAuthFormValues,
    validationSchema,
    onSubmit: (fields) => {
      submitTodoBody(fields, resetForm);
    }
  });

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.Input
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        id="email"
        placeholder="Email&#42;"
        type="email"
      />
      <Styled.Input
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        id="password"
        placeholder="Password&#42;"
        type="password"
      />
      <Styled.SubmitWrapper>
        <Styled.SubmitButton type="submit">{isRegister ? 'Register' : 'Login'}</Styled.SubmitButton>
      </Styled.SubmitWrapper>
      {errors.email && <Styled.EmailErrorMessage>{`< ${errors.email} >`}</Styled.EmailErrorMessage>}
      {errors.password && (
        <Styled.PasswordErrorMessage>{`< ${errors.password} >`}</Styled.PasswordErrorMessage>
      )}
      <Shadow top={8} left={8} />
    </Styled.Form>
  );
};

export default AuthForm;
