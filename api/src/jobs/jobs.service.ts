import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job } from 'src/schemas/Job.schema';
import { CreateJobDto } from './dto/CreateJobDto.dto';

@Injectable()
export class JobsService {
  constructor(
    @InjectModel(Job.name)
    private jobModel: Model<Job>,
  ) {}

  createJob(createJobDto: CreateJobDto) {
    const newJob = new this.jobModel(createJobDto);
    return newJob.save();
  }
}
