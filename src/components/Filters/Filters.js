import React from 'react'
import styled from 'styled-components';

const FiltersContainer = styled.div`
  border: 1px solid black;
  padding: 8px;
  display: flex;

`;

const InputContainer = styled.label`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
`

export class Filters extends React.Component {
  render() {
    return <FiltersContainer>
      <h3>Filtros</h3>
        <InputContainer>
          Valor mínimo:
          <input
            type="number"
            value={this.props.minFilter}
            onChange={this.props.onChangeMinFilter}
          />
        </InputContainer>
        <InputContainer>
          Valor máximo:
          <input
            type="number"
            value={this.props.maxFilter}
            onChange={this.props.onChangeMaxFilter}
          />
        </InputContainer>
        <InputContainer>
          Busca por nome:
          <input
            type="text"
            value={this.props.nameFilter}
            onChange={this.props.onChangeNameFilter}
          />
        </InputContainer>
    </FiltersContainer>
  }
}

