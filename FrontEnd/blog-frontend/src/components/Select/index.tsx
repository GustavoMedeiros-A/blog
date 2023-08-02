import styled from "styled-components";
import { TextAlignProps } from "styled-system";

interface SelectProps extends TextAlignProps {
  color?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
}

const Select = styled.select<SelectProps>`
  color: ${({ color }) => color ?? "white"};
  width: ${({ width }) => width ?? "20px"};
  height: ${({ height }) => height ?? "20px"};
  background-color: ${({ backgroundColor }) => backgroundColor ?? "black"};
`;

export default Select;
