import { useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from '../../data/DataContext';
import { FaTimes } from 'react-icons/fa';

const Item = ({ item }) => {
  const { deleteItem } = useContext(DataContext);
  return (
    <StyledItem>
      <FoodName>{item.name}</FoodName>
      <FoodQuantity>{item.quantity}g</FoodQuantity>
      <FoodActions>
        <FaTimes onClick={() => deleteItem(item.id)} />
      </FoodActions>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  padding: 10px;
  border-bottom: none;
  font-size: 1.4rem;

  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:last-child {
    border-bottom: 1px solid #ccc;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  @media (max-width: 900px) {
    display: block;
    font-size: 1.2rem;
  }
`;

const FoodName = styled.p`
  width: 80%;
  text-align: left;

  @media (max-width: 900px) {
    margin-bottom: 8px;
  }
`;

const FoodQuantity = styled.p`
  width: 10%;
  text-align: left;

  @media (max-width: 900px) {
    margin-bottom: 8px;
  }
`;
const FoodActions = styled.p`
  cursor: pointer;
  color: #dd2222;

  &:hover {
    transition: all 0.5s linear;
    color: #aa4444;
  }

  @media (max-width: 900px) {
    text-align: center;
    padding: 6px;
    background-color: red;
    color: #fff;
    font-size: 1.4rem;
    border-radius: 10px;
  }
`;

export default Item;
