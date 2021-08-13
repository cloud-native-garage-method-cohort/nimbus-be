import { TodoEntity } from './todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoRepository {
  constructor(
    @InjectRepository(TodoEntity)
    private todoEntityRepository: Repository<TodoEntity>,
  ) {}

  getTodoList(): Promise<TodoEntity[]> {
    return this.todoEntityRepository.find();
  }

  getTodo(_id: number): Promise<TodoEntity[]> {
    return this.todoEntityRepository.find({
      select: ['id', 'todo'],
      where: [{ id: _id }],
    });
  }

  addTodo(todoEntity: TodoEntity) {
    return this.todoEntityRepository.save(todoEntity);
  }

  async deleteTodo(_id: number): Promise<void> {
    await this.todoEntityRepository.delete({ id: _id });
  }
}
