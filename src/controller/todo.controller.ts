import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Logger,
  HttpException,
  Param,
  Post,
  Body,
  Delete,
  Query,
  HttpCode,
  Response,
} from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { TodoModel } from '../model/todo.model';

@Controller('api/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  private readonly logger = new Logger(TodoController.name);

  @Get()
  @HttpCode(200)
  async getTodoList(
    @Query('id') id,
  ): Promise<Array<TodoModel>> {
    let todoList = Array<TodoModel>();
    try {
      todoList = await this.todoService.getTodoList(id);
    } catch (err) {
      this.logger.error(err);
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, error: err.message },
        HttpStatus.BAD_REQUEST,
      );
    }
    return todoList;
  }

  @Post()
  @HttpCode(200)
  async postTodo(
    @Body() reqBody?: TodoModel,
  ): Promise<TodoModel> {
    let response = new TodoModel();
    try {
      response = await this.todoService.addTodoList(reqBody);
    } catch (err) {
      this.logger.error(err);
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, error: err.message },
        HttpStatus.BAD_REQUEST,
      );
    }
    return response;
  }

  @Delete()
  @HttpCode(200)
  async deleteTodo(
    @Query('id') id,
  ): Promise<void> {
    try {
      await this.todoService.deleteTodoList(id);
    } catch (err) {
      this.logger.error(err);
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, error: err.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
