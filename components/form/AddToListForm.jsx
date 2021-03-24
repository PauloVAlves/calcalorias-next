/* eslint-disable no-use-before-define */
import styled from 'styled-components';
import React, { useContext, useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input';
import NamesList from './NamesList';
import Label from './Label';
import { DataContext } from '../../data/DataContext';

const AddToListForm = () => {
  const { addToList, foods } = useContext(DataContext);
  const [foodName, setFoodName] = useState('');
  const [foodQuantity, setFoodQuantity] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!foodName) {
      alert('O nome é obrigatório');
      return;
    }

    if (!foodQuantity) {
      alert('A quantidade é obrigatória');
      return;
    }
    addToList(foodName, foodQuantity);
    setFoodName('');
    setFoodQuantity('');
  };

  return (
    <FoodForm onSubmit={onSubmit}>
      <Label labelFor='food-name' labelName='Alimento' />
      <Input
        id='food-name'
        className='food-name'
        type='text'
        value={foodName}
        list='names-list'
        onChange={(e) => {
          setFoodName(e.target.value);
        }}
      />
      <NamesList names={foods} />
      <Label labelFor='food-quantity' labelName='Quantidade' />
      <Input
        id='food-quantity'
        className='food-quantity'
        type='number'
        value={foodQuantity}
        onChange={(e) => setFoodQuantity(e.target.value)}
      />
      <Button buttonName='Adicionar' />
    </FoodForm>
  );
};

const FoodForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  text-align: left;

  @media (max-width: 900px) {
    margin: 20px auto;
    width: 90%;

    Button {
      width: 100%;
    }
  }
`;

export default AddToListForm;
