import React from "react";
import styled from "styled-components";
import colors from "../../../../components/layout/colors";

const InfosProduct = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1;
`;

const InfosTitle = styled.h1`
  font-size: 24px;
  color: ${colors.primary};
`;

const InfosDescription = styled.h2`
  margin: 10px 0;
  font-size: 16px;
  font-weight: 300;
  color: ${colors.white};
`;

const InfosContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${colors.white};
  font-weight: 300;
`;

const InfosPrice = styled.span`
  color: ${colors.secondary};
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;

const InfosQuantity = styled.span`
  flex: 1;
  max-width: 50%;
  color: ${colors.white};
`;

const InfosActions = styled.div`
  padding: 30px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const InfosBrand = styled.span`
  flex: 1;
`;

const InfosMemory = styled.span`
  flex: 1;
`;

const InfosChip = styled.span`
  flex: 1;
`;

const Infos = props => (
  <InfosProduct>
    <InfosTitle>{props.title}</InfosTitle>
    <InfosDescription>{props.description}</InfosDescription>
    <InfosPrice>Preço: R${props.price.toFixed(2)}</InfosPrice>
    <InfosContent>
      <InfosBrand>Marca: {props.brand}</InfosBrand>
      <InfosMemory>Memória: {props.memory}</InfosMemory>
      <InfosChip>Chip: {props.chipType}</InfosChip>
    </InfosContent>
    <InfosActions>
      <InfosQuantity>Estoque: {props.quantity}</InfosQuantity>
      {props.children}
    </InfosActions>
  </InfosProduct>
);

export default Infos;
