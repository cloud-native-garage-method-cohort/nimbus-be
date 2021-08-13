import { Module } from '@nestjs/common';
import { TodoController } from './controller/todo.controller';
import { TodoService } from './service/todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'bootcamp',
      password: 'cyberpunk2077',
      database: 'bootcamp',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [TodoController],
  providers: [TodoService],
})
export class AppModule {}
