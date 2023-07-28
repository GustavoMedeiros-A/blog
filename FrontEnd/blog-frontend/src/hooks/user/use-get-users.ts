import { findAllUsers } from "@/infra/services/users-service";
import { IUser } from "@/interface/user.interface";
import { useQuery } from "@tanstack/react-query";

export const useGetUsers = () => {
  const { data } = useQuery<IUser[]>({
    queryKey: ["getUsers"],
    queryFn: () => findAllUsers(),
  });

  return data;
};
