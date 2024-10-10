import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from './dto/signUpDto.dto';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/CreateUser.dto';
import { LoginDto } from './dto/loginDto.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { RefreshToken } from './schemas/refreshToken.schema';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(RefreshToken.name)
    private RefreshTokenModel: Model<RefreshToken>,
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

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

    const userId = user._id.toString();
    const { accessToken, refreshToken } = await this.generateUserToken(userId);

    await this.storeRefreshToken(refreshToken, userId);

    return {
      success: true,
      user: user._id,
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  async generateUserToken(userId: string) {
    const accessToken = this.jwtService.sign({ userId });
    const refreshToken = uuidv4();
    return { accessToken, refreshToken };
  }

  async storeRefreshToken(token: string, userId: string) {
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 3);
    await this.RefreshTokenModel.create({ token, userId, expireDate });
  }
}
