import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from './dto/signUpDto.dto';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { LoginDto } from './dto/loginDto.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async signUp(signUpDto: CreateUserDto) {
    return this.userService.createUser(signUpDto);
  }

  async signIn(credentials: LoginDto) {
    const { email, password } = credentials;

    const user = await this.userService.findUserByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Wrong Credentials!');
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      throw new UnauthorizedException('Wrong Password!');
    }

    return {
      success: true,
      user: user._id,
    };
  }
}
