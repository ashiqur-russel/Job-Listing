import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job, JobDocument } from '../schemas/Job.schema';
import { CreateJobDto } from './dto/CreateJobDto.dto';
import { UpdateJobDto } from './dto/UpdateJobDto.dto';

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

  getAllJobs() {
    return this.jobModel.find();
  }

  getJobById(id: string): Promise<JobDocument> {
    return this.jobModel.findById(id);
  }

  updateJobListById(
    id: string,
    updateJobDto: UpdateJobDto,
  ): Promise<JobDocument> {
    return this.jobModel.findByIdAndUpdate(id, updateJobDto, { new: true });
  }

  async deleteJobById(id: string): Promise<void> {
    const result = await this.jobModel.findByIdAndDelete(id);
    if (!result) {
      throw new Error('Job not found');
    }
  }
}
