import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/User.schema';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    if (!createUserDto.email || !createUserDto.password) {
      throw new Error('Email and password must be provided.');
    }

    const existingUser = await this.findUserByEmail(createUserDto.email);
    const existingUserName = await this.findUserName(createUserDto.userName);

    if (existingUser) {
      throw new Error('User already exists with this email.');
    }

    if (existingUserName) {
      throw new Error('Username already taken.');
    }

    const newUser = new this.userModel(createUserDto);
    await newUser.save();

    return newUser;
  }

  getUsers() {
    return this.userModel.find();
  }

  async findUserByEmail(email: string) {
    return await this.userModel.findOne({ email: email }).exec();
  }

  async findUserName(userName: string) {
    return await this.userModel.findOne({ userName: userName }).exec();
  }

  getUserById(id: string) {
    return this.userModel.findById(id);
  }

  updateUserById(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }

  deleteUserbyId(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
