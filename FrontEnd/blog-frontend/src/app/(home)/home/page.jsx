"use client";
import { useGetUsers } from "@/hooks/user/use-get-users";

export default function Home() {
  const data = useGetUsers();

  console.log(data);

  function renderUser(user) {
    return (
      <div key={user.id}>
        <p>{user.name}</p>
      </div>
    );
  }

  return <div>{renderUser(data)}</div>;
}
