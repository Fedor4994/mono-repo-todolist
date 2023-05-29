import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import { ITodo } from '../../../types/todos.type';
import * as Styled from './todo-swiper.styled';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const TodoSwiper = ({ todos }: { todos: ITodo[] }) => (
  <Swiper
    effect="coverflow"
    grabCursor
    centeredSlides
    slidesPerView="auto"
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false
    }}
    pagination={{
      dynamicBullets: true
    }}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
  >
    {todos.map((todo) => (
      <SwiperSlide key={todo.id}>
        <Styled.SwiperTodoItem todo={todo} />
      </SwiperSlide>
    ))}
  </Swiper>
);
export default TodoSwiper;
