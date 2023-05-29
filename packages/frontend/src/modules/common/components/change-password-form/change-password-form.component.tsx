import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Styled from './change-password-form.styled';
import { initialProfileFormValues } from '../../consts/initialValues';
import { validationSchema } from '../../../schemas/profile.validation';
import Shadow from '../shadow/shadow.component';
import { IProfile } from '../../../types/profile.types';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { QUERY_KEYS, STORAGE_KEYS } from '../../consts/app-keys.const';
import { useChangePasswordUser } from '../../../hooks/useChangePassword';
import { userService } from '../../../services/user.service';
import { handlerChangePasswordUser } from '../../../../utils/auth/handleChangePassword';

const ChangePasswordForm = () => {
  const navigate = useNavigate();

  const [, , removeValue] = useLocalStorage(STORAGE_KEYS.TOKEN, null);
  const { changePassword } = useChangePasswordUser(userService.changePassword, QUERY_KEYS.CHANGE);

  const submitNewPassword = (fields: IProfile) => {
    handlerChangePasswordUser(fields, changePassword, removeValue, navigate);
  };

  const { values, handleBlur, errors, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: initialProfileFormValues,
    validationSchema,
    onSubmit: (fields) => {
      submitNewPassword(fields);
      resetForm();
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
        value={values.currentPassword}
        id="currentPassword"
        placeholder="Current password&#42;"
        type="currentPassword"
      />
      <Styled.Input
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.updatePassword}
        id="updatePassword"
        placeholder="New password&#42;"
        type="updatePassword"
      />
      <Styled.SubmitWrapper>
        <Styled.SubmitButton type="submit">Change password</Styled.SubmitButton>
      </Styled.SubmitWrapper>

      {(errors.email && (
        <Styled.EmailErrorMessage>{`< ${errors.email} >`}</Styled.EmailErrorMessage>
      )) ||
        (errors.currentPassword && (
          <Styled.EmailErrorMessage>{`< ${errors.currentPassword} >`}</Styled.EmailErrorMessage>
        )) ||
        (errors.updatePassword && (
          <Styled.EmailErrorMessage>{`< ${errors.updatePassword} >`}</Styled.EmailErrorMessage>
        ))}

      <Shadow top={8} left={8} />
    </Styled.Form>
  );
};

export default ChangePasswordForm;
