import { Injectable, Logger } from '@nestjs/common';
import { TodoModel } from '../model/todo.model';
import { TodoController } from '../controller/todo.controller';

@Injectable()
export class TodoService {
  private readonly logger = new Logger(TodoService.name);

  async getTodoList(id): Promise<Array<TodoModel>> {
    const todoList = new Array<TodoModel>();
    //query todo from database and return
    this.logger.debug('Todo list data ' + id + ' ' + todoList);
    return todoList;
  }

  async addTodoList(todoData): Promise<boolean> {
    let createStatus = Boolean();
    createStatus = true;
    //add todo to database and return status
    this.logger.debug('data to add ' + todoData);
    return createStatus;
  }

  async deleteTodoList(id): Promise<boolean> {
    let deleteStatus = Boolean();
    deleteStatus = true;
    //remove todo from database and return status
    this.logger.debug('delete id ' + id);
    return deleteStatus;
  }
}
