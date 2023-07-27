import { Injectable, Inject } from '@nestjs/common';
import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { IuserRepository } from './interfaces/user.repository.interface';
import { User, UserDocument } from 'src/core/models/user.schema';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UpdateUserDTO } from '../dtos/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserRepository implements IuserRepository<UserDocument> {
  @InjectModel(User.name) private model: Model<UserDocument>;

  async findAll(query?: FilterQuery<UserDocument>): Promise<UserDocument[]> {
    return await this.model.find(query ?? {});
  }
  async create(data: CreateUserDTO) {
    return await this.model.create(data);
  }

  async findOne(query?: FilterQuery<UserDocument>): Promise<UserDocument> {
    return await this.model.findOne(query ?? {});
  }

  async findById(id: string) {
    return await this.model.findById(id);
  }

  async findByName(name: string): Promise<UserDocument> {
    return await this.model.findOne({ name: name });
  }

  async update(
    query: FilterQuery<UserDocument>,
    data: UpdateQuery<UserDocument>,
  ): Promise<UserDocument> {
    await this.model.updateOne(query, data);

    return this.findOne(query);
  }

  async delete(id: string): Promise<void> {
    await this.model.deleteOne({ _id: id });
  }
}
