import {
  Body,
  Controller,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { JobDocument } from '../schemas/Job.schema';
import { CreateJobDto } from './dto/CreateJobDto.dto';
import { JobsService } from './jobs.service';
import mongoose from 'mongoose';

@Controller('jobs')
export class JobController {
  constructor(private jobsService: JobsService) {}

  @Post('/add')
  createJob(@Body() createJobDto: CreateJobDto) {
    console.info('Accessing Create `/jobs/add`');
    return this.jobsService.createJob(createJobDto);
  }

  @Get()
  getAllJobs() {
    console.info('Accessing `/jobs`');
    return this.jobsService.getAllJobs();
  }

  @Get(':id')
  getJobById(@Param('id') id: string): Promise<JobDocument> {
    console.info('Accessing `/jobs/:id`');

    return this.jobsService.getJobById(id);
  }

  @Patch(':id')
  async updateJobListById(
    @Param('id') id: string,
    @Body() updateJobDto: any,
  ): Promise<JobDocument> {
    console.info("Accessing '/jobs/edit/:id'");

    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId)
      throw new HttpException('Update request for invalid job id', 404);
    const updatedJob = await this.jobsService.updateJobListById(
      id,
      updateJobDto,
    );

    if (!updatedJob) throw new HttpException('Job not found', 404);

    return updatedJob;
  }
}
