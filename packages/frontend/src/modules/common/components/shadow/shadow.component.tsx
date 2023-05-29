import React from 'react';
import * as Styled from './shadow.styled';
import { ShadowProps } from '../../../types/shadow.types';

const Shadow = (props: ShadowProps) => (
  <Styled.Shadow {...props}>
    <Styled.ShadowTop />
    <Styled.ShadowBottom />
  </Styled.Shadow>
);

export default Shadow;
