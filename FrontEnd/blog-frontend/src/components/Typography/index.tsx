import styled from "styled-components";
import { typography, textAlign, TextAlignProps } from "styled-system";

interface TypographyProps extends TextAlignProps {
  size?: string;
  color?: string;
  family?: string;
  marginLeft?: string;
  marginBottom?: string;
}

const Typography = styled.span<TypographyProps>`
  font-size: ${({ size }) => size ?? "14px"};
  color: ${({ color }) => color ?? "black"};
  font-family: ${({ family }) => family ?? "Helvetica"};
  margin-left: ${({ marginLeft }) => marginLeft ?? "0px"};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? "0px"};
  ${typography};
  ${textAlign};
`;

export default Typography;
