import {Controller, Get, Res, HttpStatus, Logger, HttpException, Param} from '@nestjs/common';
import { Response } from 'express';
import { TodoService } from '../service/todo.service';
import { TodoModel } from "../model/todo.model";

@Controller('api/todo')
export class TodoController {

  constructor(
      private readonly todoService: TodoService
  ) {}

  private readonly logger = new Logger(TodoController.name);

  @Get('list')
  async getTodoList(
      @Param('id') id,
      @Res() httpResponse?: Response,
  ): Promise<Array<TodoModel>> {
    let todoList = Array<TodoModel>();
    try {
      todoList = await this.todoService.getTodoList(id);
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
}
