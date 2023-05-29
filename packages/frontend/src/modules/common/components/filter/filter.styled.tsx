import styled from 'styled-components';
import Button from '../button/button.component';
import { MEDIA } from '../../../theme';

export type FilterButtonProps = {
  isActive: boolean;
};
export const FilterBar = styled('div')`
  display: flex;
  align-items: center;
`;

export const FilterWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  margin-bottom: 20px;

  @media ${MEDIA.tablet} {
    align-items: center;
  }

  @media ${MEDIA.desktop} {
    flex-direction: row;
    gap: 0;
    align-items: center;
    justify-content: space-between;
  }
`;
export const SearchInput = styled('input')`
  width: 250px;
  height: 30px;
  padding: 3px 30px;
  background: transparent
    url('https://icons.veryicon.com/png/o/miscellaneous/prototyping-tool/search-bar-01.png')
    no-repeat 0 center;
  background-size: contain;
`;

export const FilterButton = styled(Button)<FilterButtonProps>`
  font-size: 10px;
  ${(props) =>
    props.isActive &&
    `
    padding: 3px 15px;

    @media ${MEDIA.tablet} {
    font-size: 16px;
    padding: 3px 20px;
  }

  
  `}
`;
