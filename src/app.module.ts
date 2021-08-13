import { Module } from '@nestjs/common';
import { TodoController } from './controller/todo.controller';
import { TodoService } from './service/todo.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TodoEntity} from "./repository/todo.entity";
import {TodoRepository} from "./repository/todo.repository";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'bootcamp',
      password: 'cyberpunk2077',
      database: 'bootcamp',
      entities: [TodoEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([TodoEntity])
  ],
  controllers: [TodoController],
  providers: [TodoService, TodoRepository],
})
export class AppModule {}
