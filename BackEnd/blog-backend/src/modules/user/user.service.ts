import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './repositories/user.repositories';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UpdateUserDTO } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  public findAll() {
    return this.userRepository.findAll();
  }

  public create(data: CreateUserDTO) {
    try {
      const username = this.userRepository.findByName(data.name);

      if (username) {
        throw new Error(`User ${username} already exists`);
      }

      return this.userRepository.create(data);
    } catch (err) {
      throw new Error(`Erro to create a user ${err}`);
    }
  }

  public async findByIdOrThrowError(id: string) {
    const user = await this.findOne({ _id: id });

    if (!user) {
      throw new NotFoundException(`User ${id} does not exist`);
    }

    return user;
  }

  public findOne(data: any) {
    return this.userRepository.findOne(data);
  }

  public async updateById(id: string, data: UpdateUserDTO) {
    await this.findByIdOrThrowError(id);

    try {
      return await this.userRepository.update({ _id: id }, data);
    } catch (err) {
      throw new Error(`Error to update ${id}`);
    }
  }

  public async deleteById(id: string) {
    const user = await this.findByIdOrThrowError(id);
    if (user) {
      await this.userRepository.delete(id);
      return `User ${user.name} deleted successfully`;
    }
  }
}
