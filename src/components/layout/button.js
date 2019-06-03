import Button from "@material-ui/core/Button";
import styled from "styled-components";
import colors from "./colors";

const Btn = styled(Button)`
  transition: all 0.3s ease;
  background: ${props =>
    colors[Object.keys(props).find(p => colors[p])] || colors.default};
  text-transform: ${props => (props.upper ? "uppercase" : "none")};
  font-weight: bold;
  color: ${props => (props.white ? colors.black : colors.white)}!important;
  padding: 9px 13px;
  margin: 1px;
  border: none;
  border-radius: 2px;
  &:hover {
    opacity: 0.7;
  }
`;

export default Btn;
