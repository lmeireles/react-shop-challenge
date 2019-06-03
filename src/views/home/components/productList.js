import React from "react";
import styled from "styled-components";
import Card from "./productCard";

const List = styled.div`
  color: #fff;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const ProductList = props => {
  const { products } = props;
  return (
    <List>
      {products.list &&
        products.list.map(p => (
          <Card
            key={p.id}
            link={p.id}
            item={p.title}
            price={p.price}
            image={p.picture}
            onClick={() => props.onClick(p)}
          />
        ))}
    </List>
  );
};

export default ProductList;
