import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Container from '../../common/components/container/container.component';
import Header from '../../common/components/header/header.component';
import * as Styled from './profile.styled';
import lock from '../../../assets/image/lock.png';
import { handleLogout } from '../../../utils/auth/handleLogout';
import { STORAGE_KEYS } from '../../common/consts/app-keys.const';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import ChangePasswordForm from '../../common/components/change-password-form/change-password-form.component';

const ProfilePageContainer = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({ maxWidth: 425 });

  const [, , removeValue] = useLocalStorage(STORAGE_KEYS.TOKEN, null);

  const logout = () => {
    handleLogout(removeValue, navigate);
  };

  return (
    <Container>
      <Header />
      <ChangePasswordForm />

      <Styled.LogoutButton onClick={logout}>Logout</Styled.LogoutButton>

      {!isSmallScreen && <Styled.Image src={lock} alt="decoration" />}
    </Container>
  );
};

export default ProfilePageContainer;
