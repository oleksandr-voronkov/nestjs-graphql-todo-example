import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoInput } from './inputs/create-todo.input';
import { DeleteTodoInput } from './inputs/delete-todo.input';
import { UpdateTodoInput } from './inputs/update-todo-input';
import { ITodo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<ITodo>) {}

  async create(request: CreateTodoInput): Promise<ITodo> {
    const todo = new this.todoModel(request);

    return await todo.save();
  }

  async update(request: UpdateTodoInput): Promise<ITodo> {
    return await this.todoModel
      .findOneAndUpdate(
        {
          _id: request.id,
        },
        { ...request },
      )
      .exec();
  }

  async delete(request: DeleteTodoInput): Promise<ITodo> {
    return await this.todoModel.findOneAndDelete({ _id: request.id });
  }

  async findAll(): Promise<ITodo[]> {
    return this.todoModel.find().exec();
  }

  async findOne(id: string): Promise<ITodo> {
    return await this.todoModel.findOne({ _id: id }).exec();
  }
}
