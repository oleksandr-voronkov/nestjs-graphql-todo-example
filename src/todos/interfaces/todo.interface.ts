import { Document } from 'mongoose';

export interface ITodo extends Document {
  readonly id: String;
  readonly title: string;
  readonly content: string;
  readonly completed: boolean;
  readonly createdAt: Date;
  readonly tags: string[];
}
