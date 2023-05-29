import styled from 'styled-components';
import { COLORS, MEDIA } from '../../../theme';

export const Label = styled('label')`
  display: flex;
  align-items: center;
  gap: 10px;

  @media ${MEDIA.desktop} {
    cursor: pointer;
  }
`;

export const Switch = styled.div`
  position: relative;
  width: 60px;
  height: 28px;
  background: #b3b3b3;
  border-radius: 32px;
  padding: 4px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: '';
    position: absolute;
    width: 22px;
    height: 22px;
    border-radius: 35px;
    top: 50%;
    left: 4px;
    background: white;
    transform: translate(0, -50%);
  }
`;

export const Input = styled('input')`
  display: none;

  &:checked + ${Switch} {
    background: ${COLORS.primary};

    &:before {
      transform: translate(30px, -50%);
    }
  }
`;
