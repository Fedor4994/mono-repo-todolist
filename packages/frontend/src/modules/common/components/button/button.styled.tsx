import styled from 'styled-components';
import { COLORS, MEDIA } from '../../../theme';

export const Button = styled('button')`
  position: relative;
  border: 1px solid ${COLORS.black};
  background-color: ${COLORS.white};

  @media ${MEDIA.tablet} {
    padding: 5px 20px;
  }

  @media ${MEDIA.desktop} {
    cursor: pointer;
  }
`;
