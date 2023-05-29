import styled from 'styled-components';
import { COLORS } from '../../../theme';
import { ShadowProps } from '../../../types/shadow.types';

export const Shadow = styled('div')<ShadowProps>`
  position: absolute;
  pointer-events: none;
  z-index: -1;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;

  border: 2px solid ${COLORS.black};

  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ShadowTop = styled('div')`
  width: 100%;
  height: 50%;
`;

export const ShadowBottom = styled('div')`
  width: 100%;
  height: 50%;
  background: ${COLORS.black};
  outline: ${COLORS.black} solid 1px;
`;
