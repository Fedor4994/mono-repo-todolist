import { Like } from 'typeorm';
import { Categorie, ITodo, TodosQuery } from '../types/todos.type';
import { Todo } from '../entities/Todo.entity';

export default class TodoService {
  async findAll(userId: number, query: TodosQuery) {
    const { search, status, categorie, limit = 7, page = 1 } = query;

    const isTrueStatus = status === 'true';
    const skipCount = (page - 1) * limit;

    const [todos, total] = await Todo.findAndCount({
      where:
        categorie === Categorie.All
          ? isTrueStatus
            ? {
                userId,
                title: Like(`%${search}%`),
                isCompleted: isTrueStatus
              }
            : {
                userId,
                title: Like(`%${search}%`)
              }
          : {
              userId,
              title: Like(`%${search}%`),
              isPrivate: categorie === Categorie.Private
            },
      order: {
        id: 'ASC'
      },
      take: limit,
      skip: skipCount
    });

    return { todos, total };
  }

  async findOne(id: string) {
    const todo = await Todo.findOneBy({ id });
    return todo;
  }

  async addOne({ title, description = '' }: ITodo, userId: number) {
    const createdTodo = Todo.create({
      title,
      description,
      userId
    });
    await createdTodo.save();
    return createdTodo;
  }

  async deleteOne(id: string) {
    await Todo.delete({ id });
  }

  async updateOne(id: string, newData: ITodo) {
    await Todo.update(id, newData);
  }
}
