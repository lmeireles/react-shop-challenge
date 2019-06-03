import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../../components/layout/colors";
import theme from "../../../components/layout/theme";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const CardContainer = styled(Card)`
  flex: 1;
  flex-basis: 20%;
  max-width: 20%;
  height: 400px;
  border-radius: 5px;
  margin: 10px;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;

  @media (max-width: ${theme.viewports.tablet}) {
    max-width: 100%;
    flex-basis: 100%;
  }
`;

const CardDescription = styled(CardContent)`
  font-size: 16px;
  color: ${colors.black};
  flex: 1;
  display: flex;
  line-height: 1.4;
  height: 170px;
  justify-content: center;
  align-items: center;
`;

const CardActionArea = styled(Link)`
  text-decoration: none;
`;

const Actions = styled(CardActions)`
  display: flex;
  flex-direction: flow;
  flex: 1;
`;

const CardPrice = styled.span`
  color: ${colors.green};
  flex: 1;
`;

const CardLink = styled(Link)`
  flex: 1;
  transition: all 0.3s ease;
  background: ${colors.gradient};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  padding: 9px 13px;
  margin: 1px;
  border: none;
  border-radius: 2px;
  &:hover {
    opacity: 0.7;
  }
`;

const CardImage = styled(CardMedia)`
  height: 150px;
  flex: 1;
`;

const CardItem = props => (
  <CardContainer>
    <CardActionArea to={"/product/" + props.link}>
      <CardImage image={props.image} title={props.brand} />
      <CardDescription>{props.item}</CardDescription>
    </CardActionArea>
    <Actions>
      <CardPrice>{"R$" + props.price.toFixed(2)}</CardPrice>
      <CardLink to="#" onClick={() => props.onClick()}>
        Add to Cart
      </CardLink>
    </Actions>
  </CardContainer>
);

export default CardItem;
