import axios from 'axios';
import { ITodo, ITodoData, TodosQuery } from '../types/todos.type';

const { REACT_APP_BASE_URL } = process.env;
class HttpService {
  async getAllTodos({ search, status, categorie, page }: TodosQuery) {
    const data = await axios.get(
      `${REACT_APP_BASE_URL}/todos?search=${search}&status=${status}&categorie=${categorie}&page=${page}`
    );
    return data;
  }

  async getTodoById(todoId: number) {
    const todo = await axios.get(`${REACT_APP_BASE_URL}/todos/${todoId}`);
    return todo;
  }

  async createTodo(newTodo: ITodoData) {
    const createdTodo = await axios.post(`${REACT_APP_BASE_URL}/todos`, newTodo);
    return createdTodo;
  }

  async deleteTodo(todoId: number) {
    const response = await axios.delete(`${REACT_APP_BASE_URL}/todos/${todoId}`);
    return response;
  }

  async updateTodo(credential: Pick<ITodo, 'id' | 'description' | 'title'>) {
    const { id, ...data } = credential;
    const response = await axios.put(`${REACT_APP_BASE_URL}/todos/${id}`, data);
    return response;
  }
}

export const httpService = new HttpService();
