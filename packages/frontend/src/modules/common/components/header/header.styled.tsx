import styled from 'styled-components';
import { COLORS, MEDIA } from '../../../theme';

export type HeaderProps = {
  scrolled: boolean;
};

export const Header = styled('header')<HeaderProps>`
  padding: 30px 20px;

  position: sticky;
  top: 0;
  z-index: 3;
  background-color: ${COLORS.white};

  display: flex;
  align-items: center;
  margin-left: -20px;
  margin-right: -20px;
  justify-content: space-between;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: box-shadow 0.3s ease;

  ${(props) =>
    props.scrolled &&
    `
    box-shadow: ${COLORS.shadow}
    &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0;

    width: 100%;
    height: 20px;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), transparent);
    pointer-events: none;
    }`}

  @media ${MEDIA.tablet} {
    margin-left: -40px;
    margin-right: -40px;
    padding: 30px 40px;
  }

  @media ${MEDIA.desktop} {
    margin-left: -60px;
    margin-right: -60px;
    padding: 30px 60px;
  }
`;
