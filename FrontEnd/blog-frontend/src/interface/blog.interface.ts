import { IUser } from "./user.interface";

export interface IBlog {
  id: number | string;
  title: string;
  description: string;
  author: IUser[];
}

export interface ISaveBlog {
  id?: number | string;
  title: string;
  description?: string;
  author?: IUser[];
}
