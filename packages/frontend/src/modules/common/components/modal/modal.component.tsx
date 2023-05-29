import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as Styled from './modal.styled';
import Shadow from '../shadow/shadow.component';
import { ModalProps } from '../../../types/modal.types';

const Modal = ({ children, setIsModalOpen }: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';

    return () => {
      document.body.style.overflow = 'visible';
      document.body.style.position = 'inherit';
    };
  }, []);

  useEffect(() => {
    const onEscClose = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', onEscClose);
    return () => {
      window.removeEventListener('keydown', onEscClose);
    };
  }, [setIsModalOpen]);

  const backdropClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return createPortal(
    <Styled.Backdrop onClick={backdropClickHandler}>
      <Styled.Modal>
        {children}
        <Shadow top={11} left={11} />
      </Styled.Modal>
    </Styled.Backdrop>,
    document.querySelector('#portal')!
  );
};

export default Modal;
