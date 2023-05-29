import styled from 'styled-components';
import { COLORS, MEDIA } from '../../theme';

export const LoginPage = styled('div')`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const CluesWrapper = styled('div')`
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: space-between;

  @media ${MEDIA.desktop} {
    width: 400px;
  }
`;

export const Clue = styled('p')`
  cursor: pointer;
  color: ${COLORS.primary};
  text-decoration: underline;
  font-size: 12px;

  @media ${MEDIA.desktop} {
    font-size: 16px;
  }
`;

export const Title = styled('h1')`
  color: ${COLORS.black};
`;
