import { Injectable } from '@nestjs/common';
import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument } from 'src/core/models/blog.schema';
import { IBlogRepository } from './interfaces/blog-repository.interface';
import { CreateBlogDTO } from '../dtos/create-blog.dto';
import { User, UserDocument } from 'src/core/models/user.schema';
import { UpdateBlogDTO } from '../dtos/update-blog.dto';

@Injectable()
export class BlogRepository implements IBlogRepository<BlogDocument> {
  @InjectModel(Blog.name) private blogModel: Model<BlogDocument>;

  @InjectModel(User.name) private userModel: Model<UserDocument>;

  async findAll(): Promise<BlogDocument[]> {
    return await this.blogModel
      .find()
      .populate({ path: 'author', model: this.userModel });
  }

  async create(data: CreateBlogDTO) {
    return await this.blogModel.create(data);
  }
  async findOne(query?: FilterQuery<BlogDocument>): Promise<BlogDocument> {
    return await this.blogModel.findOne(query ?? {});
  }

  async update(
    query: FilterQuery<BlogDocument>,
    data: UpdateQuery<BlogDocument>,
  ): Promise<BlogDocument> {
    await this.blogModel.updateOne(query, data);

    return this.findOne(query);
  }

  async delete(id: string) {
    return await this.blogModel.deleteOne({ _id: id });
  }
}
