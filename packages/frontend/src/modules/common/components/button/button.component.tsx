import React from 'react';
import * as Styled from './button.styled';
import { Shadow } from '../shadow/shadow.styled';
import { ButtonProps } from '../../../types/button.types';

const Button = ({ children, onClick, className }: ButtonProps) => (
  <Styled.Button className={className} onClick={onClick} type="button">
    {children}
    <Shadow top={3} left={3} />
  </Styled.Button>
);

export default Button;
