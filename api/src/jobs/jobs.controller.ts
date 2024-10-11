import {
  Body,
  Controller,
  Delete,
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
import { UpdateJobDto } from './dto/UpdateJobDto.dto';

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
    console.log('get all jobs');
    return this.jobsService.getAllJobs();
  }

  @Get(':id')
  getJobById(@Param('id') id: string): Promise<JobDocument> {
    console.info('Accessing `/jobs/:id`');
    console.log('get job by id:', id);

    return this.jobsService.getJobById(id);
  }

  @Patch(':id')
  async updateJobListById(
    @Param('id') id: string,
    @Body() updateJobDto: UpdateJobDto,
  ): Promise<JobDocument> {
    console.info("Accessing '/jobs/edit/:id'");
    console.log('update job by id:', id);

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

  @Delete(':id')
  async deleteUserbyId(@Param('id') id: string) {
    console.info("Accessing '/jobs/delete/:id'");
    console.log('delete job by id:', id);

    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
      throw new HttpException('Invalid Job id', 404);
    }

    await this.jobsService.deleteJobById(id);

    return { message: 'Job successfully deleted' };
  }
}
