import { Injectable } from '@nestjs/common';
import {TodoModel} from "../model/todo.model";
import {TodoController} from "../controller/todo.controller";

@Injectable()
export class TodoService {

  async getTodoList(id): Promise<Array<TodoModel>> {
    let todoList = new Array<TodoModel>();
    //query it
    return todoList;
  }

  async addTodoList(id): Promise<Array<TodoModel>> {
    let todoList = new Array<TodoModel>();
    //add todo list
    return todoList;
  }

  async deleteTodoList(id): Promise<Array<TodoModel>> {
    let todoList = new Array<TodoModel>();
    //remove todo list
    return todoList;
  }
}
