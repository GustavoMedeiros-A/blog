"use client";
import { useGetBlogs } from "@/hooks/blog/use-get-blogs";
import { useGetUsers } from "@/hooks/user/use-get-users";
import * as Styled from "./style";
import Typography from "@/components/Typography";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";
import Select from "@/components/Select";
import FlexContainer from "@/components/FlexContainer";
import { useForm } from "react-hook-form";
import { Form, Icon } from "semantic-ui-react";
import { IBlog } from "@/interface/blog.interface";
import { useCreateBlog } from "@/hooks/blog/use-create-blog";

export default function Home() {
  const users = useGetUsers();
  const blogs = useGetBlogs();
  const { save } = useCreateBlog();

  const { reset, handleSubmit, register, getValues } = useForm<IBlog>();

  const onSubmit = async (data: IBlog) => {
    try {
      await save(data);
      reset();
    } catch (err) {
      console.log("this is the error", err);
    }
  };

  return (
    <Styled.Content>
      <Styled.Header />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.ContainerForm>
          <Styled.ContainerInput>
            <Input
              width="90%"
              height="40px"
              color="white"
              backgroundColor="black"
              id="title"
              placeholder="What is the title"
              {...register("title", {
                required: "We need the title my friend",
              })}
            />
            <Textarea
              color="white"
              backgroundColor="black"
              id="description"
              placeholder="What is happening..."
              width="90%"
              {...register("description", {
                required: "The to exist a description",
              })}
            />
            <FlexContainer
              alignItems="flex-start"
              width="100%"
              flexDirection="column"
              marginLeft="15px"
            >
              <Typography color="white" marginBottom="10px">
                Select the user to tweet
              </Typography>
              <Select width="15%" {...register("author")}>
                {users?.map((user) => (
                  <option value={user.id}>{user.name}</option>
                ))}
              </Select>
            </FlexContainer>
            <FlexContainer
              width="100%"
              justifyContent={"flex-end"}
              marginTop={"20px"}
              marginBottom={"10px"}
            >
              <Button backgroundColor="#1DA1F2" width="8rem" type="submit">
                Post
              </Button>
            </FlexContainer>
          </Styled.ContainerInput>
        </Styled.ContainerForm>
      </Form>

      {blogs?.map((blog) => (
        <FlexContainer
          key={blog.id}
          width="100%"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          marginTop="4%"
        >
          <Styled.ContainerTitle>
            <Typography size="30px" color="white">
              {blog.title}
            </Typography>
          </Styled.ContainerTitle>
          <Styled.ContainerDescription>
            <Typography size="15px" color="white">
              {blog.description}
            </Typography>
          </Styled.ContainerDescription>
          <Styled.ContainerAuthor>
            <FlexContainer justifyContent="space-between">
              <Typography color="white">
                Write by: {blog.author.map((author) => author.name)}
              </Typography>
              <Button backgroundColor="#df4759" width="15%">
                Remove
              </Button>
            </FlexContainer>
          </Styled.ContainerAuthor>
          <Typography color="white"></Typography>
        </FlexContainer>
      ))}
    </Styled.Content>
  );
}
