import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDTO } from './dtos/create-blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  public async getBlog() {
    return await this.blogService.findAll();
  }

  @Post()
  public async create(@Body() data: CreateBlogDTO) {
    return await this.blogService.create(data);
  }
}
