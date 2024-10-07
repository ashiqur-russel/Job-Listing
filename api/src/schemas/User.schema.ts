import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type role = 'employer' | 'employee';

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  userName: string;

  @Prop({ required: true })
  role: role;

  @Prop({ required: false })
  displayName?: string;

  @Prop({ required: false })
  avatarUrl?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
