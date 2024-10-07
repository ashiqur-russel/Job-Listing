import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobDocument = Job & Document;

export type Company = {
  name: string;
  description: string;
  contactEmail: string;
  contactPhone: string;
};

@Schema()
export class Job {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  salary: string;

  @Prop({ type: Object, required: true })
  company: Company;
}

export const JobSchema = SchemaFactory.createForClass(Job);
