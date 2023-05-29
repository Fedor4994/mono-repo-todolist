import { ReactNode } from 'react';

export type ButtonProps = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};
