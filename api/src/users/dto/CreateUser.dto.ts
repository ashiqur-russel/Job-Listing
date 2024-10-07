import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
} from 'class-validator';

export enum ROLE {
  EMPLOYER = 'employer',
  EMPLOYEE = 'employee',
}
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 10)
  userName: string;

  @IsEnum(ROLE)
  role: string;

  @IsOptional()
  @IsString()
  displayName?: string;

  @IsOptional()
  @IsUrl()
  avatarUrl?: string;
}
