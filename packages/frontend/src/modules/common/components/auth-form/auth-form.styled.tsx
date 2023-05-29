import styled from 'styled-components';
import { COLORS, MEDIA } from '../../../theme';

export const Form = styled('form')`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 300px;
  border: 2px solid ${COLORS.black};
  position: relative;

  @media ${MEDIA.tablet} {
    width: 350px;
    height: 350px;
  }

  @media ${MEDIA.desktop} {
    width: 400px;
    height: 400px;
  }
`;
const inputStyles = `
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  padding-left: 12px;

  background: ${COLORS.white};
  border-bottom: 2px solid ${COLORS.black};
`;

export const Input = styled('input')`
  ${inputStyles}
`;

export const SubmitWrapper = styled('div')`
  width: 100%;

  padding: 30px 40px;

  background: ${COLORS.gradient};
`;

export const SubmitButton = styled('button')`
  width: 100%;
  height: 50px;
`;

export const EmailErrorMessage = styled('p')`
  position: absolute;
  bottom: 85px;
  color: ${COLORS.black};
`;

export const PasswordErrorMessage = styled('p')`
  position: absolute;
  bottom: 5px;
  color: ${COLORS.black};
`;
