import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { JobDocument } from '../schemas/Job.schema';
import { CreateJobDto } from './dto/CreateJobDto.dto';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobController {
  constructor(private jobsSerive: JobsService) {}

  @Post('/add')
  createJob(@Body() createJobDto: CreateJobDto) {
    console.info('Accessing Create `/jobs/add`');
    return this.jobsSerive.createJob(createJobDto);
  }

  @Get()
  getAllJobs() {
    console.info('Accessing `/jobs`');
    return this.jobsSerive.getAllJobs();
  }

  @Get(':id')
  getJobById(@Param('id') id: string): Promise<JobDocument> {
    console.info('Accessing `/jobs/:id`');

    return this.jobsSerive.getJobById(id);
  }
}
