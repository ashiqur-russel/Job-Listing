import { Inject, Injectable } from '@nestjs/common';
import { SignUpDto } from './dto/signUpDto.dto';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async signUp(signUpDto: CreateUserDto) {
    return this.userService.createUser(signUpDto);
  }
}
