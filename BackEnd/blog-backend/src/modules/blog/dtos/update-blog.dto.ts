import { IsString } from 'class-validator';

export class UpdateBlogDTO {
  @IsString()
  title: string;

  @IsString()
  description: string;
}
