import { TextAlignProps } from "styled-system";
import styled from "styled-components";

interface TextareaProps extends TextAlignProps {
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
}

const Textarea = styled.textarea<TextareaProps>`
  background-color: ${({ backgroundColor }) => backgroundColor ?? "white"};
  color: ${({ color }) => color ?? "white"};
  width: ${({ width }) => width ?? "50%"};
  min-height: 8rem;
  max-height: 150px;
  border: none;
  outline: none;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export default Textarea;
