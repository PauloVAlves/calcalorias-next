/* eslint-disable no-use-before-define */
import styled from 'styled-components';
import React, { useContext, useEffect, useState } from 'react';
import Button from './Button';
import Input from './Input';
import NamesList from './NamesList';
import Label from './Label';
import { DataContext } from '../../data/DataContext';

const AddToListForm = () => {
  const { addToList } = useContext(DataContext);
  const [foodName, setFoodName] = useState('');
  const [foodId, setFoodId] = useState(0);
  const [foodQuantity, setFoodQuantity] = useState('');
  const [foods, setFoods] = useState([]);
  const [myFoods, setMyFoods] = useState([]);

  useEffect(() => {
    const getNames = () => {
      fetch('/names.json', {
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setFoods(result);
        });
    };

    getNames();
  }, []);

  const searchByName = (searchString) => {
    let newItem = foods.filter((food) => food.description === searchString);
    setMyFoods(newItem);

    onSubmit(myFoods);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(foodName);
    console.log(myFoods);
    addToList(foodName, foodQuantity);
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
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  text-align: left;
`;

export default AddToListForm;
