import { Module } from '@nestjs/common';
import { TodoController } from './controller/todo.controller';
import { TodoService } from './service/todo.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {TodoEntity} from "./repository/todo.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql.nimbus-bootcamp.svc.cluster.local',
      port: 3306,
      username: 'bootcamp',
      password: 'cyberpunk2077',
      database: 'bootcamp',
      entities: [TodoEntity],
      synchronize: true,
    }),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule {}
