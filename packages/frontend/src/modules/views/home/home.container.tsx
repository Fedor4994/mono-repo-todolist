import React, { useEffect, useState } from 'react';

import { useMediaQuery } from 'react-responsive';
import { useQueryClient } from 'react-query';
import { TodoList } from '../../common/components/todo-list/todo-list.component';
import Container from '../../common/components/container/container.component';
import * as Styled from './home.styled';
import decor from '../../../assets/image/bottomDecor.svg';
import Header from '../../common/components/header/header.component';
import TodoSwiper from '../../common/components/todo-swiper/todo-swiper.component';
import TodoTable from '../../common/components/todo-table/todo-table.component';
import { useGetAllTodo } from '../../hooks/useGetAllTodos';
import { httpService } from '../../services/http.service';
import { QUERY_KEYS } from '../../common/consts/app-keys.const';
import { ErrorComponent } from '../../common/components/error/error.component';
import { Categorie } from '../../types/todos.type';
import Filter from '../../common/components/filter/filter.component';
import Pagination from '../../common/components/pagination/pagination.component';

const HomePageContainer = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 425 });
  const isMediumScreen = useMediaQuery({ minWidth: 426, maxWidth: 768 });
  const isBigScreen = useMediaQuery({ minWidth: 769 });

  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [categorie, setCategorie] = useState<Categorie>(Categorie.All);

  const query = { search, status: isCompleted, categorie, page };
  const { data, error, isLoading } = useGetAllTodo(httpService.getAllTodos, query, QUERY_KEYS.TODO);

  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: QUERY_KEYS.TODO });
  }, [search, isCompleted, categorie]);

  const handleIncrementPage = () => {
    setPage((prev) => prev + 1);
  };

  const handleDecrementPage = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <Container>
      <Header />
      <Filter
        search={search}
        isComplete={isCompleted}
        categorie={categorie}
        setSearch={setSearch}
        setIsCompleted={setIsCompleted}
        setCategorie={setCategorie}
      />
      {isSmallScreen && <TodoList todos={data?.data.todos || []} />}
      {isMediumScreen && <TodoSwiper todos={data?.data.todos || []} />}
      {isBigScreen && <TodoTable todos={data?.data.todos || []} />}

      {!isLoading && !error && (
        <Pagination
          totalTodos={data?.data.total || 0}
          page={page}
          setPage={setPage}
          incrementPage={handleIncrementPage}
          decrementPage={handleDecrementPage}
        />
      )}

      {isLoading && <h1>Loading...</h1>}

      {error && <ErrorComponent error={error} />}

      {!isSmallScreen && <Styled.Image src={decor} alt="decoration" />}
    </Container>
  );
};

export default HomePageContainer;
