import React from 'react';

import * as Styled from './pagination.styled';

const Pagination = ({
  totalTodos,
  page,
  setPage,
  incrementPage,
  decrementPage
}: {
  totalTodos: number;
  page: number;
  setPage: (page: number) => void;
  incrementPage: () => void;
  decrementPage: () => void;
}) => {
  const totalPageCount = Math.ceil(totalTodos / 7);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const goToFirstPage = () => {
    setPage(1);
    scrollToTop();
  };
  const goToLastPage = () => {
    setPage(totalPageCount);
    scrollToTop();
  };

  const handleIncrement = () => {
    scrollToTop();
    incrementPage();
  };

  const handleDecrement = () => {
    scrollToTop();
    decrementPage();
  };

  return (
    <Styled.Pagination>
      <Styled.Arrow disabled={page < 2} onClick={goToFirstPage}>
        ❮❮
      </Styled.Arrow>
      <Styled.Arrow disabled={page < 2} onClick={handleDecrement}>
        ❮
      </Styled.Arrow>

      <Styled.CurrentPage>{page}</Styled.CurrentPage>

      <Styled.Arrow disabled={page === totalPageCount} onClick={handleIncrement}>
        ❯
      </Styled.Arrow>

      <Styled.Arrow disabled={page === totalPageCount} onClick={goToLastPage}>
        ❯❯
      </Styled.Arrow>
    </Styled.Pagination>
  );
};

export default Pagination;
