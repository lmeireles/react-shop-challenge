import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Form = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 20px;
  margin: 8px 10px;
  flex: 1;
  @media (max-width: ${theme.viewports.tablet}) {
    max-width: 60%;
  }
`;

export default Form;
