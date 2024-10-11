import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/CreateUser.dto';
import { LoginDto } from './dto/loginDto.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { RefreshToken } from './schemas/refreshToken.schema';
import mongoose, { Model } from 'mongoose';
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

    const userId = user._id;
    const tokens = await this.generateUserToken(userId);

    return {
      success: true,
      userId: userId,
      ...tokens,
    };
  }

  async refreshTokens(refreshToken: string) {
    const token = await this.RefreshTokenModel.findOneAndDelete({
      token: refreshToken,
      expireDate: { $gte: new Date() },
    });

    if (!token) {
      throw new UnauthorizedException('Invalid Refresh Token');
    }

    const newTokens = await this.generateUserToken(token.userId.toString());
    return newTokens;
  }

  async generateUserToken(userId) {
    const accessToken = await this.jwtService.sign({ userId });
    const refreshToken = uuidv4();

    await this.storeRefreshToken(refreshToken, userId);

    return { accessToken, refreshToken };
  }

  async storeRefreshToken(token: string, userId: mongoose.Types.ObjectId) {
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 3);

    const refreshToken = await this.RefreshTokenModel.findOne({ userId });
    console.log(refreshToken);

    if (!refreshToken || null) {
      await this.RefreshTokenModel.create({ expireDate, token, userId });
    }
    await this.RefreshTokenModel.findOneAndUpdate(
      { userId },
      { $set: { expireDate, token } },
      { upsert: true },
    );
  }
}
