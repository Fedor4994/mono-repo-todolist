import { ReactNode } from 'react';

export type ModalProps = {
  children: ReactNode;
  setIsModalOpen: (isOpen: boolean) => void;
};
