import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  IsEmail,
} from 'class-validator';

export enum ROLE {
  EMPLOYER = 'employer',
  EMPLOYEE = 'employee',
  ADMIN = 'admin',
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 10)
  userName: string;

  @IsEnum(ROLE)
  role: ROLE;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsString()
  displayName?: string;

  @IsOptional()
  @IsUrl()
  avatarUrl?: string;
}
