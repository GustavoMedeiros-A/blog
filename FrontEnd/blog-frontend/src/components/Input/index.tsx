import styled from "styled-components";
import { textAlign } from "styled-system";
import { TextAlignProps } from "styled-system";

interface InputProps extends TextAlignProps {
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  marginBottom?: string;
}

const Input = styled.input<InputProps>`
  background-color: ${({ backgroundColor }) => backgroundColor ?? "white"};
  color: ${({ color }) => color ?? "white"};
  width: ${({ width }) => width ?? "20px"};
  height: ${({ height }) => height ?? "20px"};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? "10px"};
  border: none;
  outline: none;
  ${textAlign};
`;

export default Input;
