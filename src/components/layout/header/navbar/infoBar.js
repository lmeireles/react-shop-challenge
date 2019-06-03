import React from "react";
import styled from "styled-components";
import colors from "../../colors";
import theme from "../../theme";

const InfoContent = styled.div`
  background-color: transparent;
  color: ${colors.white};
  padding: 10px 50px;
  display: flex;
  flex-flow: row wrap;

  @media (max-width: ${theme.viewports.tablet}) {
    padding: 10px;
  }
`;

const InfoBar = props => <InfoContent>{props.children}</InfoContent>;

export default InfoBar;
