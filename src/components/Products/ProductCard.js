import React from 'react'
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-flow: row wrap;
  align-items: space-evenly;
  justify-content: space-evenly;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: row wrap;
  align-items: space-evenly;
  justify-content: space-evenly;

  p {
    margin: 4px 0;
  }
`

const AddToCartButton = styled.button`
  align-self: space-between;
  margin-top: 4px;
`

export class ProductCard extends React.Component {
  render() {
    const product = this.props.product
    return <CardContainer>
      <img src={product.photo} alt=""/>
      <CardInfo>
        <p>{product.name}</p>
        <p>R${product.price},00</p>
        <AddToCartButton onClick={() => this.props.onAddProductToCart(product.id)}>
          Adicionar ao carrinho
        </AddToCartButton>
      </CardInfo>
    </CardContainer>
  }
}

