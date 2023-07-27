import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export type BlogDocument = Blog & Document;

const transform = (_, ret) => {
  ret.id = ret._id;
  delete ret._id;
  delete ret.__v;
};
@Schema({
  collection: 'blog',
  timestamps: true,
  toJSON: { virtuals: true, getters: true, transform },
  toObject: { virtuals: true, transform },
})
export class Blog {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ type: [Types.ObjectId], ref: 'User', required: true })
  author: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
