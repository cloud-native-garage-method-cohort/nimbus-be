import {Controller, Get, Res, HttpStatus, Logger, HttpException, Param, Post, Body, Delete} from '@nestjs/common';
import { Response } from 'express';
import { TodoService } from '../service/todo.service';
import { TodoModel } from "../model/todo.model";

@Controller('api/todo')
export class TodoController {

  constructor(
      private readonly todoService: TodoService
  ) {}

  private readonly logger = new Logger(TodoController.name);

  @Get()
  async getTodoList(
      @Param() params,
      @Res() httpResponse?: Response,
  ): Promise<Array<TodoModel>> {
    let todoList = Array<TodoModel>();
    try {
      todoList = await this.todoService.getTodoList(params.id);

      httpResponse.status(HttpStatus.OK).send(todoList);
      return todoList;
    } catch (err) {
      this.logger.error(err);
      const errorStatus = new HttpException(
          { status: HttpStatus.BAD_REQUEST, error: err.message },
          HttpStatus.BAD_REQUEST,
      );
      httpResponse.send(errorStatus);
    }
    return todoList;
  }

  @Post()
  async postTodo(
      @Body() reqBody?: TodoModel,
      @Res() httpResponse?: Response,
  ): Promise<Boolean> {
    let isSuccess = Boolean();
    try {
      let isSuccess = await this.todoService.addTodoList(reqBody);

      httpResponse.status(HttpStatus.OK);
      return isSuccess;
    } catch (err) {
      this.logger.error(err);
      const errorStatus = new HttpException(
          { status: HttpStatus.BAD_REQUEST, error: err.message },
          HttpStatus.BAD_REQUEST,
      );
      httpResponse.send(errorStatus);
    }
    return isSuccess;
  }

  @Delete()
  async deleteTodo(
      @Param('id') id,
      @Res() httpResponse?: Response,
  ): Promise<Boolean> {
    let isSuccess = Boolean();
    try {
      let isSuccess = await this.todoService.deleteTodoList(id);

      httpResponse.status(HttpStatus.OK);
      return isSuccess;
    } catch (err) {
      this.logger.error(err);
      const errorStatus = new HttpException(
          { status: HttpStatus.BAD_REQUEST, error: err.message },
          HttpStatus.BAD_REQUEST,
      );
      httpResponse.send(errorStatus);
    }
    return isSuccess;
  }
}
