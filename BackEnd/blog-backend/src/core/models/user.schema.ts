import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

const transform = (_, ret) => {
  ret.id = ret._id;
  delete ret._id;
  delete ret.__v;
};

@Schema({
  collection: 'user',
  timestamps: true,
  toJSON: { virtuals: true, getters: true, transform },
  toObject: { virtuals: true, transform },
})
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
