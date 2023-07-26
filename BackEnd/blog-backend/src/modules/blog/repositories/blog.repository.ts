import { Injectable } from '@nestjs/common';
import { FilterQuery, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, BlogDocument } from 'src/core/models/blog.schema';
import { IBlogRepository } from './interfaces/blog-repository.interface';
import { CreateBlogDTO } from '../dtos/create-blog.dto';
import { User, UserDocument } from 'src/core/models/user.schema';

@Injectable()
export class BlogRepository implements IBlogRepository<BlogDocument> {
  @InjectModel(Blog.name) private blogModel: Model<BlogDocument>;

  @InjectModel(User.name) private userModel: Model<UserDocument>;

  async findAll(): Promise<BlogDocument[]> {
    return await this.blogModel
      .find()
      .populate({ path: 'author_id', model: this.userModel });
  }
  async create(data: CreateBlogDTO) {
    return await this.blogModel.create(data);
  }
}
