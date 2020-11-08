import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { TodoType } from './types/todo.type';
import { CreateTodoInput } from './inputs/create-todo.input';
import { TodosService } from './todos.service';
import { UpdateTodoInput } from './inputs/update-todo-input';
import { DeleteTodoInput } from './inputs/delete-todo.input';

@Resolver()
export class TodosResolver {
  constructor(private readonly service: TodosService) {}

  @Query(() => TodoType)
  async todo(@Args('id', { type: () => ID }) id: string) {
    console.log(id);
    return await this.service.findOne(id);
  }

  @Query(() => [TodoType])
  async todos() {
    return await this.service.findAll();
  }

  @Mutation(() => TodoType)
  async createTodo(@Args('input') input: CreateTodoInput) {
    return await this.service.create(input);
  }

  @Mutation(() => TodoType)
  async updateTodo(@Args('input') input: UpdateTodoInput) {
    return await this.service.update(input);
  }

  @Mutation(() => TodoType)
  async deleteTodo(@Args('input') input: DeleteTodoInput) {
    return await this.service.delete(input);
  }
}
