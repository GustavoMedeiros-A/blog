import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
  name: string;
  email: string;
}
