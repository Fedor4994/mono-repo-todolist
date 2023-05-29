import { ITodo, TodosQuery } from '../types/todos.type';
import { Todo } from '../entities/Todo.entity';
export default class TodoService {
    findAll(userId: number, query: TodosQuery): Promise<{
        todos: Todo[];
        total: number;
    }>;
    findOne(id: string): Promise<Todo | null>;
    addOne({ title, description }: ITodo, userId: number): Promise<Todo>;
    deleteOne(id: string): Promise<void>;
    updateOne(id: string, newData: ITodo): Promise<void>;
}
