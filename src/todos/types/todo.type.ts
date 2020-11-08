import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TodoType {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  completed: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => [String])
  tags: string[];
}
