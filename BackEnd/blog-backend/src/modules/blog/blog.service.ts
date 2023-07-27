import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogDTO } from './dtos/create-blog.dto';
import { BlogRepository } from './repositories/blog.repository';
import { UserRepository } from '../user/repositories/user.repositories';
import { ASYNC_METHOD_SUFFIX } from '@nestjs/common/module-utils/constants';
import { UpdateBlogDTO } from './dtos/update-blog.dto';
import { IUpdateBlog } from './repositories/interfaces/update-blog.interface';

@Injectable()
export class BlogService {
  constructor(
    private blogRespository: BlogRepository,
    private userRepository: UserRepository,
  ) {}

  public findAll() {
    return this.blogRespository.findAll();
  }

  public async create(data: CreateBlogDTO) {
    const user = await this.userRepository.findById(data.author);
    if (!user) {
      throw new NotFoundException(`the user ${data.author} does not exist`);
    }
    return this.blogRespository.create(data);
  }

  public async findByIdOrThrowError(id: string) {
    const blog = await this.findOne({ _id: id });

    if (!blog) {
      throw new NotFoundException(`Blog ${id} does not exist`);
    }

    return blog;
  }

  public findOne(data: any) {
    return this.blogRespository.findOne(data);
  }

  public async updateById(id: string, data: IUpdateBlog) {
    const blog = await this.findByIdOrThrowError(id);

    console.log(data);
    if (blog) {
      return await this.blogRespository.update({ _id: id }, data);
    }
  }

  public async deleteById(id: string) {
    const blog = await this.findByIdOrThrowError(id);

    if (blog) {
      await this.blogRespository.delete(id);
      return `Blog "${blog.title}" was deleted successfully`;
    }
  }
}
