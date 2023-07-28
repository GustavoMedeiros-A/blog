import { findAllBlogs } from "@/infra/services/blogs-service";
import { IBlog } from "@/interface/blog.interface";
import { useQuery } from "@tanstack/react-query";

export const useGetBlogs = () => {
  const { data } = useQuery<IBlog[]>({
    queryKey: ["getBlogs"],
    queryFn: () => findAllBlogs(),
  });

  return data;
};
