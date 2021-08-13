import { Module } from '@nestjs/common';
import { TodoController } from './controller/todo.controller';
import { TodoService } from './service/todo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './repository/todo.entity';
import { TodoRepository } from './repository/todo.repository';
//mysql.nimbus-bootcamp.svc.cluster.local
import { TodoModule } from './todo.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: `${process.env.DB_HOST}` || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: `${process.env.DB_USERNAME}` || `bootcamp`,
      password: `${process.env.DB_PASSWORD}` || `cyberpunk2077`,
      database: `${process.env.DB_DATABASE}` || `bootcamp`,
      entities: [TodoEntity],
      synchronize: true,
    }),
    TodoModule,
  ],
  exports: [TypeOrmModule],
  controllers: [TodoController],
  providers: [TodoService, TodoRepository],
})
export class AppModule {}
