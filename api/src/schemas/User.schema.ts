import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type Role = 'employer' | 'employee';

@Schema()
export class User {
  @Prop({ unique: true, required: true })
  userName: string;

  @Prop({ type: String, enum: ['employer', 'employee'], required: true })
  role: Role;

  @Prop({ required: false })
  displayName?: string;

  @Prop({ required: false })
  avatarUrl?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
