import { removeBlog } from "@/infra/services/blogs-service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useRemoveBlog = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: remove, isLoading } = useMutation({
    mutationFn: removeBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getUsers"] });
    },
  });

  return { remove, isLoading };
};
