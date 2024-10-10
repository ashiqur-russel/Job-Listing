import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/CreateUser.dto';
import { LoginDto } from './dto/loginDto.dto';
import { RefreshTokenDto } from './dto/refreshTokenDto.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  @UsePipes(new ValidationPipe())
  async signUp(@Body() createUserDto: CreateUserDto) {
    console.info('Accessing to POST /auth/signup');
    try {
      const user = await this.authService.signUp(createUserDto);
      return user;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  async signIn(@Body() credential: LoginDto) {
    console.info('Accessing to POST /auth/login');
    try {
      return await this.authService.signIn(credential);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('refresh')
  @UsePipes(new ValidationPipe())
  async refreshTokens(@Body() refreshTokenDto: RefreshTokenDto) {
    console.info('Accessing to POST /auth/refresh');

    return this.authService.refreshTokens(refreshTokenDto.refreshToken);
  }
}
