import styled from 'styled-components';
import { TodoItem } from '../todo-item/todo-item.component';

export const SwiperTodoItem = styled(TodoItem)`
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 20px;

  h3 {
    font-size: 30px;
  }
`;
