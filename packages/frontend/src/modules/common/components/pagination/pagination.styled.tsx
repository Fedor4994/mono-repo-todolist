import styled from 'styled-components';
import { COLORS } from '../../../theme';

export const Arrow = styled('div')<{ disabled: boolean }>`
  ${(props) =>
    props.disabled &&
    `
    pointer-events: none;
    opacity: 0.5;
    `}

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
`;

export const Pagination = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
  margin-bottom: 10px;
  color: ${COLORS.black};
`;

export const CurrentPage = styled('div')`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 2px solid ${COLORS.black};

  font-size: 20px;
`;
