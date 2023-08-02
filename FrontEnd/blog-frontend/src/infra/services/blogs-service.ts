import { IBlog, ISaveBlog } from "@/interface/blog.interface";
import { httpClient } from "../http/http-client";

export const findAllBlogs = async () => {
  const { data: blogs } = await httpClient.get<IBlog[]>(`/blog`);
  return blogs;
};

export const createBlog = async (data: Omit<ISaveBlog, "id">) => {
  const { data: createBlog } = await httpClient.post<IBlog>(`blog`, data);
  return createBlog;
};

export const removeBlog = async (id: string | number) => {
  return await httpClient.delete<IBlog>(`blog/${id}`);
};
