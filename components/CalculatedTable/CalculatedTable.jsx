import { useContext } from 'react';
import { DataContext } from '../../data/DataContext';
import styled from 'styled-components';

const CalculatedTable = () => {
  const { calculatedRecipe, portion, initialValue } = useContext(DataContext);
  if (initialValue > 0) {
    return (
      <StyledTable>
        <Portion>Porção: {portion}g</Portion>
        <TableItem className='energy'>
          <ItemName>Valor Energético</ItemName>
          <ItemQuantity>{calculatedRecipe.kcal.toFixed(1)}kcal</ItemQuantity>
          <ItemQuantity>{calculatedRecipe.kj.toFixed(1)}kj</ItemQuantity>
        </TableItem>
        <TableItem className='props'>
          <ItemName>Carboidratos</ItemName>
          <ItemQuantity>
            {calculatedRecipe.carbohydrate.toFixed(1)}g
          </ItemQuantity>
        </TableItem>
        <TableItem className='props'>
          <ItemName>Proteínas</ItemName>
          <ItemQuantity>{calculatedRecipe.protein.toFixed(1)}g</ItemQuantity>
        </TableItem>
        <TableItem className='props'>
          <ItemName>Gorduras Totais</ItemName>
          <ItemQuantity>{calculatedRecipe.total_fats.toFixed(1)}g</ItemQuantity>
        </TableItem>
        <TableItem className='props'>
          <ItemName>Gorduras Saturadas</ItemName>
          <ItemQuantity>{calculatedRecipe.saturated.toFixed(1)}g</ItemQuantity>
        </TableItem>
        <TableItem className='props'>
          <ItemName>Gorduras Trans</ItemName>
          <ItemQuantity>{calculatedRecipe.trans.toFixed(1)}g</ItemQuantity>
        </TableItem>
        <TableItem className='props'>
          <ItemName>Colesterol</ItemName>
          <ItemQuantity>
            {calculatedRecipe.cholesterol.toFixed(1)}mg
          </ItemQuantity>
        </TableItem>
        <TableItem className='props'>
          <ItemName>Fibra Alimentar</ItemName>
          <ItemQuantity>{calculatedRecipe.fiber.toFixed(1)}g</ItemQuantity>
        </TableItem>
        <TableItem className='props'>
          <ItemName>Sódio</ItemName>
          <ItemQuantity>{calculatedRecipe.sodium.toFixed(1)}mg</ItemQuantity>
        </TableItem>
      </StyledTable>
    );
  } else {
    return <></>;
  }
};

const StyledTable = styled.div`
  max-width: 50%;
  margin: auto;
  margin-bottom: 100px;
`;
const Portion = styled.div``;
const ItemName = styled.div``;
const ItemQuantity = styled.div``;

const TableItem = styled.div`
  display: flex;
  cursor: pointer;
  max-width: 100%;
  margin: auto;
  margin-bottom: 10px;
  text-align: left;

  h3 {
    text-align: center;
  }

  .energy {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 900px) {
    max-width: 90%;
  }
`;

export default CalculatedTable;
