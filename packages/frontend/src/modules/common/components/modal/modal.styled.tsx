import styled from 'styled-components';
import { COLORS, MEDIA } from '../../../theme';

export const Backdrop = styled('div')`
  position: fixed;

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background: linear-gradient(rgba(241, 239, 237, 0.8) 100%, rgba(241, 239, 237, 0) 114.26%);
  z-index: 10;
`;
export const Modal = styled('div')`
  width: 290px;
  height: 290px;
  border: 2px solid ${COLORS.black};
  position: absolute;
  background-color: ${COLORS.white};

  left: 50%;
  top: 50%;
  margin-left: -145px;
  margin-top: -145px;

  @media ${MEDIA.tablet} {
    width: 350px;
    height: 350px;

    margin-left: -175px;
    margin-top: -175px;
  }
`;
