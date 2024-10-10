import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Document } from 'mongoose';
export type Role = 'employer' | 'employee' | 'admin';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ unique: true, required: true })
  userName: string;

  @Prop({
    type: String,
    enum: ['employer', 'employee', 'admin'],
    required: true,
  })
  role: Role;

  @Prop({ required: false })
  firstName?: string;

  @Prop({ required: false })
  lastName?: string;

  @Prop({ required: false })
  displayName?: string;

  @Prop({ required: false })
  avatarUrl?: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<UserDocument>('save', async function (next) {
  const user = this;

  if (!user.isModified('password') && !user.isNew) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  next();
});
