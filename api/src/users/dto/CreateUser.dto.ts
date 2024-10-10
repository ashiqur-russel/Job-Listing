import {
  IsEmail,
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
  ADMIN = 'admin',
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
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 20)
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsOptional()
  @IsString()
  displayName?: string;

  @IsOptional()
  @IsUrl()
  avatarUrl?: string;
}
