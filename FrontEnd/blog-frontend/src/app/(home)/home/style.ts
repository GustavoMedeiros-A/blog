import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: black;
`;

export const Header = styled.div`
  width: 100%;
  height: 7rem;
  background-color: #4bd4de;
  display: flex;
  align-items: center;
`;

export const SideBar = styled.div`
  width: 12%;
  min-height: 100vh;
  background-color: #053236;
`;

export const BlogContainer = styled.div`
  display: flex;
  margin-left: 15%;
  margin-top: 3%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 50%;
  height: 15rem;
  background-color: #5f83b3
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;

`;

export const ContainerTitle = styled.div`
  width: 70%;
  border: 2px solid white;
  border-radius: 12px;
  padding: 12px;
  background-color: #365175;
`;

export const ContainerDescription = styled.div`
  width: 70%;
  min-height: 12rem;
  border: 2px solid white;
  border-radius: 12px;
  padding: 12px;
  backgroud-color: #365175;
`;
