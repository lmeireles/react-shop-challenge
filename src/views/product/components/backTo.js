import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../../components/layout/colors";

const Back = styled(Link)`
  text-decoration: none;
  border: 1px solid ${colors.gradient};
  border-radius: 3px;
  padding: 5px 10px;
  color: ${colors.white};
`;

export default Back;
