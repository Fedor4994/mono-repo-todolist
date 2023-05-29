import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToMany
} from 'typeorm';
import { hashPassword } from '../helpers/hash-password';
// eslint-disable-next-line import/no-cycle
import { Todo } from './Todo.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: true, default: null })
  token: string;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];

  @BeforeInsert()
  async beforeInsert() {
    this.password = await hashPassword(this.password);
  }
}
