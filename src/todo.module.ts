import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoEntity } from './repository/todo.entity';
import { TodoRepository } from './repository/todo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  exports: [TypeOrmModule],
})
export class TodoModule {}
