import { Body, Controller, Post } from '@nestjs/common';
import { CreateJobDto } from './dto/CreateJobDto.dto';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobController {
  constructor(private jobsSerive: JobsService) {}

  @Post('/create-job')
  createJob(@Body() createJobDto: CreateJobDto) {
    return this.jobsSerive.createJob(createJobDto);
  }
}
