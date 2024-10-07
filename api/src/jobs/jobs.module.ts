import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Job, JobSchema } from 'src/schemas/Job.schema';
import { JobController } from './jobs.controller';
import { JobsService } from './jobs.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Job.name,
        schema: JobSchema,
      },
    ]),
  ],
  providers: [JobsService],
  controllers: [JobController],
})
export class JobModule {}
