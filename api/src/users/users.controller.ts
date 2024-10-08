import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UsersService } from './users.service';
import mongoose from 'mongoose';
import { UpdateUserDto } from './dto/UpdateUser.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/create-user')
  @UsePipes(new ValidationPipe())
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get('/get-users')
  getAllUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId)
      throw new HttpException('User Not found with invalid id', 404);
    const user = await this.usersService.getUserById(id);
    if (!user) {
      throw new HttpException('User Not Found!', 404);
    }
    return user;
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  updateUserbyId(@Param('id') id: string, @Body() userDto: UpdateUserDto) {
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId)
      throw new HttpException('Update request for invalid user id', 404);

    return this.usersService.updateUserById(id, userDto);
  }

  @Delete(':id')
  deleteUserbyId(@Param('id') id: string) {
    console.log(id);
  }
}
