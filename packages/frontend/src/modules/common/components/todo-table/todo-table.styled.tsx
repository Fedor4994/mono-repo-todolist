import styled from 'styled-components';
import { COLORS, FONTS } from '../../../theme';

export const Table = styled('table')`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 1px solid ${COLORS.black};
  color: ${COLORS.black};
  box-shadow: ${COLORS.shadowAlt};
  thead th {
    font-weight: ${FONTS.WEIGHTS.normal};
    font-size: 20px;
    border: 1px solid ${COLORS.black};
    width: 70%;
    color: ${COLORS.black};
  }

  thead {
    background: ${COLORS.gradient};
  }

  tbody td {
    text-align: center;
    border: 1px solid ${COLORS.black};
    word-break: break-all;
  }

  th,
  td {
    padding: 10px;
  }

  tbody:nth-child(even) {
    background-color: ${COLORS.white};
  }

  tbody:nth-child(odd) {
    background-color: ${COLORS.grey};
  }
`;

export const ButtonsWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
`;
