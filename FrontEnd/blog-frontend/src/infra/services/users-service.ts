import { IUser } from "@/interface/user.interface";
import { httpClient } from "../http/http-client";
import { IResult } from "@/interface/response.interface";

export const findAllUsers = async () => {
  const { data: users } = await httpClient.get<IUser[]>("/user");
  return users;
};
