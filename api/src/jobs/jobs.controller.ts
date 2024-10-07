import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
