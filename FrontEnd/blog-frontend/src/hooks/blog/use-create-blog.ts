import { createBlog } from "@/infra/services/blogs-service";
import { IBlog } from "@/interface/blog.interface";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`getBlogs`] });
    },
  });

  return { save: (data: IBlog) => mutateAsync(data) };
};
