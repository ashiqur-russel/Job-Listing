import { IsEmail, IsString } from 'class-validator';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';

export class LoginDto {
  @IsEmail()
  @IsString()
  email: string;

  @IsString()
  password: string;
}
