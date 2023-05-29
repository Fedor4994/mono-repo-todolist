import styled from 'styled-components';
import { COLORS } from '../../../theme';

export const Form = styled('form')`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
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

export const Textarea = styled('textarea')`
  ${inputStyles}
  padding: 12px;
  resize: none;
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

export const ErrorMessage = styled('p')`
  position: absolute;
  bottom: 5px;
  color: ${COLORS.black};
`;
