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
import { UpdateBlogDTO } from './dtos/update-blog.dto';
import { IUpdateBlog } from './repositories/interfaces/update-blog.interface';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  public async getBlog() {
    return await this.blogService.findAll();
  }

  @Get(':id')
  public async getBlogById(@Param('id') id: string) {
    return await this.blogService.findByIdOrThrowError(id);
  }

  @Post()
  public async create(@Body() data: CreateBlogDTO) {
    return this.blogService.create(data);
  }

  @Put(':id')
  public async updateById(@Param('id') id: string, @Body() data: IUpdateBlog) {
    return this.blogService.updateById(id, data);
  }

  @Delete(':id')
  public async deleteBlogById(@Param('id') id: string) {
    return this.blogService.deleteById(id);
  }
}
