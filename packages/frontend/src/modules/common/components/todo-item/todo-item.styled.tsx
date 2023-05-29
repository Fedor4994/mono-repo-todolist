import styled from 'styled-components';
import { COLORS } from '../../../theme';

export const Card = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  position: relative;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.black};
  padding: 10px;
`;

export const Controlls = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Description = styled('p')`
  max-width: 100%;
  word-break: break-all;
`;

export const ButtonsWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 1;
`;
