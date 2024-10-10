import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type Role = 'employer' | 'employee' | 'admin';

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
