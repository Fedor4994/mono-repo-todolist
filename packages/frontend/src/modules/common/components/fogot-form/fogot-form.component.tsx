import React from 'react';
import { useFormik } from 'formik';
import * as Styled from './fogot-form.styled';
import { InitialForgotFormValues } from '../../consts/initialValues';
import { validationSchema } from '../../../schemas/forgot.validation';
import Shadow from '../shadow/shadow.component';
import { IForgot } from '../../../types/forgot.types';
import { useForgotPasswordUser } from '../../../hooks/useForgotPassword';
import { userService } from '../../../services/user.service';
import { QUERY_KEYS } from '../../consts/app-keys.const';
import { handlerForgotPasswordUser } from '../../../../utils/auth/handleForgotPassword';
import { ForgotFormProps } from '../../../types/form.types';

const ForgotForm = ({ setIsActive }: ForgotFormProps) => {
  const { forgotPassword } = useForgotPasswordUser(userService.resetPassword, QUERY_KEYS.FORGOT);
  const submitForgotBody = (fields: IForgot) => {
    handlerForgotPasswordUser(fields, forgotPassword, setIsActive);
  };

  const { values, handleBlur, errors, handleChange, handleSubmit, resetForm } = useFormik({
    initialValues: InitialForgotFormValues,
    validationSchema,
    onSubmit: (fields) => {
      submitForgotBody(fields);
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

      <Styled.SubmitWrapper>
        <Styled.SubmitButton type="submit">Send email</Styled.SubmitButton>
      </Styled.SubmitWrapper>

      {errors.email && <Styled.EmailErrorMessage>{`< ${errors.email} >`}</Styled.EmailErrorMessage>}

      <Shadow top={8} left={8} />
    </Styled.Form>
  );
};

export default ForgotForm;
