import React, { ReactNode } from 'react';
import * as Styled from './container.styled';

const Container = ({ children }: { children: ReactNode }) => (
  <Styled.Container>{children}</Styled.Container>
);

export default Container;
