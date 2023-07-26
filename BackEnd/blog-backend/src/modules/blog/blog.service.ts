import { Injectable } from '@nestjs/common';
import { CreateBlogDTO } from './dtos/create-blog.dto';
import { BlogRepository } from './repositories/blog.repository';

@Injectable()
export class BlogService {
  constructor(private blogRespository: BlogRepository) {}

  public findAll() {
    return this.blogRespository.findAll();
  }

  public create(data: CreateBlogDTO) {
    return this.blogRespository.create(data);
  }
}
