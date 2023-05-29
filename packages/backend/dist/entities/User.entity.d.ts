import { BaseEntity } from 'typeorm';
import { Todo } from './Todo.entity';
export declare class User extends BaseEntity {
    id: number;
    email: string;
    password: string;
    token: string;
    todos: Todo[];
    beforeInsert(): Promise<void>;
}
