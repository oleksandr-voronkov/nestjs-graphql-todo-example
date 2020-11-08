import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
  @Prop({ required: true })
  public title: string;

  @Prop({ default: '' })
  public content: string;

  @Prop({ default: false })
  public completed: boolean;

  @Prop({ default: new Date() })
  public createdAt: Date;

  @Prop({ default: [] })
  public tags: string[];
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
