import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UpdateUserDTO } from './dtos/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public getUsers() {
    return this.userService.findAll();
  }

  @Post()
  public async createUser(@Body() data: CreateUserDTO) {
    return this.userService.create(data);
  }

  @Get(':id')
  public async getUserById(@Param('id') id: string) {
    return this.userService.findByIdOrThrowError(id);
  }

  @Put(':id')
  public async updateById(
    @Param('id') id: string,
    @Body() data: UpdateUserDTO,
  ) {
    return this.userService.updateById(id, data);
  }

  @Delete(':id')
  public async deleteById(@Param('id') id: string) {
    return this.userService.deleteById(id);
  }
}
