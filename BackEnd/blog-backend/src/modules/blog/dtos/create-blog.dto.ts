import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBlogDTO {
  @IsNotEmpty({ message: 'title required' })
  @IsString()
  title: string;

  @IsNotEmpty({ message: 'description required' })
  @IsString()
  description: string;

  @IsNotEmpty({ message: 'author Id required required' })
  @IsString()
  author: string;
}
