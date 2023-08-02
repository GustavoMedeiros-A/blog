import styled from "styled-components";
import {
  AlignItemsProps,
  border,
  flexbox,
  layout,
  size,
  space,
  typography,
} from "styled-system";

interface ButtonProps extends AlignItemsProps {
  width?: string;
  height?: string;
  backgroundColor?: string;
}

const Button = styled.button<ButtonProps>`
  width: ${({ width }) => width ?? "20px"};
  height: ${({ height }) => height ?? "20px"};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "white"};
  border-radius: 12px;
  outline: none;
  border: none;
  ${space};
  ${size};
  ${layout};
  ${flexbox};
  ${border};
  ${typography};
`;

export default Button;
