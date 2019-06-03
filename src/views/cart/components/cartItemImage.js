import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const ContentImage = styled.div`
  flex: 1;
  max-width: 30%;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartItemImage = props => (
  <ContentImage>
    <Image src={props.src} alt={props.item} />
  </ContentImage>
);

export default CartItemImage;
