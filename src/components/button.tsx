import styled from "styled-components";
import theme from "./theme";
import { ColorProps, ButtonProps } from "../models/components";

const Button = styled.button`
  transition: all 0.3s ease;
  font-weight: 300;
  color: ${theme.colors.default};
  padding: 9px 13px;
  margin: 1px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  width: ${(props: ButtonProps) => (props.large ? "100%" : "auto")};
  &:hover {
    opacity: 0.7;
  }
`;

export default Button;
