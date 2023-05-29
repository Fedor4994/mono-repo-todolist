import React from 'react';
import { ErrorProps } from '../../../types/error.types';
import * as Styled from './error.styled';

export const ErrorComponent = ({ error }: ErrorProps) => (
  <Styled.Error>{error?.toString()}</Styled.Error>
);
