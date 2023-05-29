import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Styled from './header.styled';
import Button from '../button/button.component';
import TodoForm from '../todo-form/todo-form.component';
import Modal from '../modal/modal.component';
import { ROUTER_KEYS } from '../../consts/app-keys.const';

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToHomePage = () => {
    navigate(ROUTER_KEYS.ROOT);
  };

  const goToProfilePage = () => {
    navigate(ROUTER_KEYS.PROFILE);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Styled.Header scrolled={isScrolled}>
        {pathname === ROUTER_KEYS.ROOT ? (
          <Button onClick={openModal}>Add todo</Button>
        ) : (
          <Button onClick={goToHomePage}>Back</Button>
        )}

        <Button onClick={goToProfilePage}>Profile</Button>
      </Styled.Header>

      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <TodoForm onClose={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Header;
