import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: 100vh;
  background: rgb(3, 3, 100);
  background: radial-gradient(
    circle,
    rgba(3, 3, 100, 1) 0%,
    rgba(4, 42, 133, 1) 37%,
    #1da1f2 100%
  );
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  min-height: 15rem;
  background-color: black;
  border-radius: 12px;
  border: 2px solid white;
`;

export const Header = styled.div`
  width: 100%;
  height: 7rem;
  background-color: #1da1f2;
  display: flex;
  align-items: center;
`;

export const SideBar = styled.div`
  width: 12%;
  min-height: 100vh;
  background-color: #053236;
`;

export const BlogContainer = styled.div`
  flex-direction: column;
  border-radius: 12px;
`;

export const Container = styled.div`
  width: 100%;
  height: 15rem;
  background-color: #5f83b3
  flex-direction: row;
  margin-bottom: 8%;

`;

export const ContainerTitle = styled.div`
  width: 35%;
  border-left: 2px solid #808080;
  border-right: 2px solid #808080;
  border-top: 2px solid #808080;
  padding: 12px;
  background-color: #030342;
`;

export const ContainerDescription = styled.div`
  width: 35%;
  min-height: 12rem;
  border-left: 2px solid #808080;
  border-right: 2px solid #808080;
  padding: 12px;
  background-color: black;
`;

export const ContainerAuthor = styled.div`
  width: 35%;
  min-height: 1rem;
  border-left: 2px solid #808080;
  border-right: 2px solid #808080;
  border-bottom: 2px solid #808080;
  padding: 12px;
  background-color: black;
`;
