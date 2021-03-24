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
          <div className='calories'>
            <ItemQuantity>{calculatedRecipe.kcal.toFixed(1)}kcal</ItemQuantity>
            <ItemQuantity>{calculatedRecipe.kj.toFixed(1)}kj</ItemQuantity>
          </div>
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
  display: block;
  width: 30%;
  margin: auto;
  margin-bottom: 100px;
  font-size: 1.5rem;
  text-align: center;

  @media (max-width: 900px) {
    margin: 20px auto;
    width: 90%;
  }
`;

const TableItem = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  max-width: 100%;
  text-align: left;
  border-bottom: 1px solid #ccc;
  padding: 0px 5px;

  &:hover {
    background-color: #eee;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const Portion = styled.div`
  margin: auto;
`;
const ItemName = styled.p`
  text-align: left;
`;
const ItemQuantity = styled.p`
  text-align: end;
`;

export default CalculatedTable;
