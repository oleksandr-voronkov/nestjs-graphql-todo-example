import { Field, ID, InputType } from '@nestjs/graphql';
import { CreateTodoInput } from './create-todo.input';

@InputType()
export class UpdateTodoInput extends CreateTodoInput {
  @Field(() => ID)
  id: string;
}
