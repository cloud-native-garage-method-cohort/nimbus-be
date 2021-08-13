import { TodoEntity } from './todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { TodoModel } from '../model/todo.model';

@Injectable()
export class TodoRepository {
  constructor(
    @InjectRepository(TodoEntity)
    private todoEntityRepository: Repository<TodoEntity>,
  ) {}

  async getTodoList(): Promise<TodoEntity[]> {
    return this.todoEntityRepository.find();
  }

  async getTodo(_id: number): Promise<TodoEntity[]> {
    return this.todoEntityRepository.find({
      select: ['id', 'todo'],
      where: [{ id: _id }],
    });
  }

  async addTodo(todoEntity: TodoEntity) {
    return this.todoEntityRepository.save(todoEntity);
  }

  async deleteTodo(_id: number): Promise<void> {
    await this.todoEntityRepository.delete({ id: _id });
  }
}
