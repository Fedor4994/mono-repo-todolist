import { BaseEntity } from 'typeorm';
import { User } from './User.entity';
export declare class Todo extends BaseEntity {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
    isPrivate: boolean;
    user: User;
    userId: number;
}
