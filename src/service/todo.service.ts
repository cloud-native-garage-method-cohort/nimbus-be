import {Inject, Injectable, Logger} from '@nestjs/common';
import {TodoModel} from "../model/todo.model";
import {TodoRepository} from "../repository/todo.repository";
import {TodoEntity} from "../repository/todo.entity";

@Injectable()
export class TodoService {

  @Inject()
  private readonly TodoRepository: TodoRepository

  private readonly logger = new Logger(TodoService.name);

  async getTodoList(id): Promise<Array<TodoModel>> {
    let todoList = new Array<TodoModel>();
    this.logger.debug('Todo list data '+id+' '+todoList);

    if(id == undefined) {
      this.logger.debug('id not define, query all');
      todoList = await this.TodoRepository.getTodoList();
    } else {
      todoList = await this.TodoRepository.getTodo(id);
    }
    return todoList;
  }

  async addTodoList(todoData): Promise<TodoModel> {
    this.logger.debug('data to add '+todoData);
    let todoEntity = new TodoEntity()
    todoEntity.id = todoData.id;
    todoEntity.todo = todoData.todo;
    let entity = await this.TodoRepository.addTodo(todoEntity)
    return new TodoModel(entity.id,entity.todo);
  }

  async deleteTodoList(id): Promise<void> {
    this.logger.debug('delete id '+id);
    await this.TodoRepository.deleteTodo(id)
  }
}
