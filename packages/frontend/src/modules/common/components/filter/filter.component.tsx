import React from 'react';
import * as Styled from './filter.styled';
import { FilterProps } from '../../../types/filter.types';
import { Categorie } from '../../../types/todos.type';

const Filter = ({
  search,
  isComplete,
  categorie,
  setSearch,
  setIsCompleted,
  setCategorie
}: FilterProps) => {
  const handleAllClick = () => {
    setIsCompleted(false);
    setSearch('');
    setCategorie(Categorie.All);
  };

  const handlePrivateClick = () => {
    setIsCompleted(false);
    setSearch('');
    setCategorie(Categorie.Private);
  };

  const handlePublicClick = () => {
    setIsCompleted(false);
    setSearch('');
    setCategorie(Categorie.Public);
  };

  const handleCompletedClick = () => {
    setIsCompleted(true);
    setSearch('');
    setCategorie(Categorie.All);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Styled.FilterWrapper>
      <Styled.FilterBar>
        <Styled.FilterButton
          isActive={categorie === Categorie.All && !isComplete}
          onClick={handleAllClick}
        >
          All
        </Styled.FilterButton>
        <Styled.FilterButton
          isActive={categorie === Categorie.Private}
          onClick={handlePrivateClick}
        >
          Private
        </Styled.FilterButton>
        <Styled.FilterButton isActive={categorie === Categorie.Public} onClick={handlePublicClick}>
          Public
        </Styled.FilterButton>
        <Styled.FilterButton isActive={isComplete} onClick={handleCompletedClick}>
          Completed
        </Styled.FilterButton>
      </Styled.FilterBar>

      <Styled.SearchInput placeholder="Search" value={search} onChange={handleChange} />
    </Styled.FilterWrapper>
  );
};

export default Filter;
