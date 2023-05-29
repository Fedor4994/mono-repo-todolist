import React, { useState } from 'react';
import Container from '../../common/components/container/container.component';
import * as Styled from './login.styled';
import AuthForm from '../../common/components/auth-form/auth-form.component';
import ForgotForm from '../../common/components/fogot-form/fogot-form.component';

const LoginPageContainer = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isForgotActive, setIsForgotActive] = useState(false);

  const toggleForgotForm = () => {
    setIsForgotActive((prev) => !prev);
  };

  const toggleFormType = () => {
    setIsRegister((prev) => !prev);
  };

  return (
    <Container>
      <Styled.LoginPage>
        {isForgotActive ? (
          <Styled.Title>Enter your email</Styled.Title>
        ) : (
          <Styled.Title> {isRegister ? 'Register now!' : 'Login now!'}</Styled.Title>
        )}

        {isForgotActive ? (
          <ForgotForm setIsActive={setIsForgotActive} />
        ) : (
          <AuthForm isRegister={isRegister} />
        )}

        <Styled.CluesWrapper>
          {!isForgotActive && (
            <Styled.Clue onClick={toggleFormType}>
              {isRegister ? 'Already have an account?' : 'Not a member yet?'}
            </Styled.Clue>
          )}

          <Styled.Clue onClick={toggleForgotForm}>
            {isForgotActive ? 'I remember it' : 'Forgot password?'}
          </Styled.Clue>
        </Styled.CluesWrapper>
      </Styled.LoginPage>
    </Container>
  );
};

export default LoginPageContainer;
