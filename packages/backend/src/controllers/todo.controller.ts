import { Response, Request } from 'express';
import TodoService from '../services/todo.service';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo(req: Request, res: Response) {
    const { user } = req;
    const { query } = req;

    const data = await this.todoService.findAll(user?.id || 0, query);
    res.send(data);
  }

  async getTodoById(req: Request, res: Response) {
    const { id } = req.params;

    const todo = await this.todoService.findOne(id);
    res.send(todo);
  }

  async addTodo(req: Request, res: Response) {
    const { title, description } = req.body;
    const { user } = req;

    const todo = await this.todoService.addOne({ title, description }, user?.id || 0);
    res.send(todo);
  }

  async deleteTodo(req: Request, res: Response) {
    const { id } = req.params;
    await this.todoService.deleteOne(id);
    res.json({ message: 'Todo successfuly deleted' });
  }

  async updateTodo(req: Request, res: Response) {
    const { id } = req.params;
    const { title, description, isCompleted, isPrivate } = req.body;
    const newData = { title, description, isCompleted, isPrivate };

    await this.todoService.updateOne(id, newData);
    res.json({ message: 'Todo successfuly updated' });
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
