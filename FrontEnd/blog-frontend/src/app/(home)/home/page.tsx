"use client";
import { useGetBlogs } from "@/hooks/blog/use-get-blogs";
import { useGetUsers } from "@/hooks/user/use-get-users";
import * as Styled from "./style";
import Typography from "@/components/Typography";

export default function Home() {
  const users = useGetUsers();
  const blogs = useGetBlogs();

  console.log(blogs);

  console.log(
    "blog to catch author",
    blogs?.map((item) => item.author)
  );

  return (
    <Styled.Content>
      <Styled.Header />
      <Styled.BlogContainer>
        {blogs?.map((blog) => (
          <Styled.Container key={blog.id}>
            <Styled.ContainerTitle>
              <Typography size="30px" color="white">
                {blog.title}
              </Typography>
            </Styled.ContainerTitle>
            <Styled.ContainerDescription>
              <Typography size="20px" color="white">
                {blog.description}
              </Typography>
            </Styled.ContainerDescription>
            <Typography color="white"></Typography>
          </Styled.Container>
        ))}
      </Styled.BlogContainer>
    </Styled.Content>
  );
}
