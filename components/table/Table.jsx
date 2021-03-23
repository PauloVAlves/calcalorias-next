import { useContext } from 'react';
import { DataContext } from '../../data/DataContext';
import Item from './Item';
import Button from '../form/Button';
import styled from 'styled-components';

const Table = () => {
  const { recipe, deleteTable } = useContext(DataContext);

  if (recipe.length > 0) {
    return (
      <StyledTable>
        <TableItem>
          {recipe.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </TableItem>
        <div className='btn'>
          <Button buttonName='Limpar' onSubmit={deleteTable} />
        </div>
      </StyledTable>
    );
  } else {
    return (
      <StyledTable>
        <h3>Nenhum alimento foi adicionado à receita</h3>
      </StyledTable>
    );
  }
};

const StyledTable = styled.div`
  max-width: 50%;
  margin: auto;

  .btn {
    display: flex;
    justify-content: flex-end;
  }

  Button {
    background-color: #dd2222;
    margin-left: auto;
  }

  Button:hover {
    background-color: #aa4444;
  }
`;

const TableItem = styled.div`
  display: block;
  cursor: pointer;
  max-width: 100%;
  margin: auto;
  margin-bottom: 10px;
  text-align: left;

  h3 {
    text-align: center;
  }

  @media (max-width: 900px) {
    max-width: 90%;
  }
`;

export default Table;
