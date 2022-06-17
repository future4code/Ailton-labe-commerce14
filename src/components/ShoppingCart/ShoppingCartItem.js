import React from 'react'
import styled from 'styled-components';

const ItemContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: space-evenly;
  justify-content: space-evenly;

  p {
    margin: 0;
  }
`


export class ShoppingCartItem extends React.Component {
  render() {
    return <ItemContainer>
      <p>{this.props.cartItem.quantity}x</p>
      <p>{this.props.cartItem.name}</p>
      <button 
        onClick={() => this.props.onRemoveProductFromCart(this.props.cartItem.id)}
      >
        Remover
      </button>
    </ItemContainer>
  }
}

