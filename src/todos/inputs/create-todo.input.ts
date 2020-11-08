import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field()
  title: string;

  @Field({ defaultValue: '' })
  content: string;

  @Field({ defaultValue: false })
  completed: boolean;

  @Field(() => Date, { defaultValue: new Date() })
  createdAt: Date;

  @Field(() => [String], { defaultValue: [] })
  tags: string[];
}
