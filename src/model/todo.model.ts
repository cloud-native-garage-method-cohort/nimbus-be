import {TodoEntity} from "../repository/todo.entity";
import {classToPlain, plainToClass} from "class-transformer";

export class TodoModel {
    constructor(
        id?: number,
        todo?: string,
    ) {
        this.id = id;
        this.todo = todo;
    }

    id: number;
    todo: string;
}