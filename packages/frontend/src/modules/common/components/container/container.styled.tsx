import styled from 'styled-components';
import { MEDIA } from '../../../theme';

export const Container = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  padding-left: 20px;
  padding-right: 20px;

  @media ${MEDIA.tablet} {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media ${MEDIA.desktop} {
    max-width: 1600px;
    padding-left: 60px;
    padding-right: 60px;
  }
`;
