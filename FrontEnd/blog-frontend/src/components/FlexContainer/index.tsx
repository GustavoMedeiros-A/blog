import { ReactNode } from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import {
  BorderProps,
  FlexboxProps,
  LayoutProps,
  SizeProps,
  SpaceProps,
  TypographyProps,
  border,
  flexbox,
  layout,
  size,
  space,
  typography,
} from "styled-system";

type FlexContainerProps = {
  gap?: string;
  children?: ReactNode;
} & SpaceProps &
  SizeProps &
  FlexboxProps &
  LayoutProps &
  BorderProps &
  TypographyProps;

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ gap }) => gap};
  ${space};
  ${size};
  ${layout};
  ${flexbox};
  ${border};
  ${typography};
`;

FlexContainer.propTypes = {
  gap: propTypes.string,
  children: propTypes.node,
};

export default FlexContainer;
