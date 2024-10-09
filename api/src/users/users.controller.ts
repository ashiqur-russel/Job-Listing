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
  async updateUserbyId(
    @Param('id') id: string,
    @Body() userDto: UpdateUserDto,
  ) {
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId)
      throw new HttpException('Update request for invalid user id', 404);

    const updatedUser = await this.usersService.updateUserById(id, userDto);

    if (!updatedUser) throw new HttpException('User not found!', 404);

    return updatedUser;
  }

  @Delete(':id')
  async deleteUserbyId(@Param('id') id: string) {
    //TODO: Have to make middleware for checking valid id
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId)
      throw new HttpException('Update request for invalid user id', 404);
    const deletedUser = await this.usersService.deleteUserbyId(id);

    if (!deletedUser) throw new HttpException('User not found', 404);

    return deletedUser;
  }
}
