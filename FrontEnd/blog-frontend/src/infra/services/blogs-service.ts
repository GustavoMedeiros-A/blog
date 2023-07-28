import { IBlog } from "@/interface/blog.interface";
import { httpClient } from "../http/http-client";

export const findAllBlogs = async () => {
  const { data: blogs } = await httpClient.get<IBlog[]>(`/blog`);
  return blogs;
};
