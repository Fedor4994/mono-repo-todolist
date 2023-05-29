import styled from 'styled-components';
import Button from '../../common/components/button/button.component';
import { FONTS, MEDIA } from '../../theme';

export const Title = styled('h1')`
  margin-bottom: 40px;
  font-weight: ${FONTS.WEIGHTS.normal};
`;

export const Description = styled('p')`
  margin-bottom: 40px;
`;

export const StatusToggler = styled('div')`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;

  @media ${MEDIA.desktop} {
    width: 80%;
  }
`;

export const BackButton = styled(Button)`
  max-width: 100px;
  margin-top: 40px;

  @media ${MEDIA.tablet} {
    max-width: 200px;
  }

  @media ${MEDIA.desktop} {
    max-width: 300px;
  }
`;

export const Image = styled('img')`
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 250px;
  z-index: -2;

  @media ${MEDIA.tablet} {
    max-width: 350px;
  }

  @media ${MEDIA.desktop} {
    max-width: 450px;
  }
`;
