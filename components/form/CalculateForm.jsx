import React, { useContext } from 'react';
import { DataContext } from '../../data/DataContext';
import Input from './Input';
import Button from './Button';
import styled from 'styled-components';

const CalculateForm = () => {
  const {
    recipe,
    setCalculatedRecipe,
    portion,
    setPortion,
    setInitialValue,
  } = useContext(DataContext);

  const base = 100;

  const calculateTotalGrams = (recipe, portion) => {
    let totalGrams = 0;
    recipe.map((food) => (totalGrams += food.quantity / portion));
    return totalGrams;
  };

  const calculateCarbohydrate = (recipe, totalGrams) => {
    let totalCarbohydrate = 0;
    recipe.map((food) => (totalCarbohydrate += food.carbohydrate / totalGrams));
    return totalCarbohydrate;
  };

  const calculateProtein = (recipe, totalGrams) => {
    let totalProtein = 0;
    recipe.map((food) => (totalProtein += food.protein / totalGrams));
    return totalProtein;
  };

  const calculateSaturatedFat = (recipe, totalGrams) => {
    let totalSaturated = 0;
    recipe.map((food) => (totalSaturated += food.saturated / totalGrams));
    return totalSaturated;
  };

  const calculateTotalFats = (recipe, totalGrams) => {
    let totalFats = 0;
    recipe.map(
      (food) =>
        (totalFats +=
          (food.saturated + food.monounsaturated + food.polyunsaturated) /
          totalGrams)
    );
    return totalFats;
  };

  const calculateCholesterol = (recipe, totalGrams) => {
    let totalCholesterol = 0;
    recipe.map((food) => (totalCholesterol += food.cholesterol / totalGrams));
    return totalCholesterol;
  };

  const calculateFiber = (recipe, totalGrams) => {
    let totalFiber = 0;
    recipe.map((food) => (totalFiber += food.fiber / totalGrams));
    return totalFiber;
  };

  const calculateSodium = (recipe, totalGrams) => {
    let totalSodium = 0;
    recipe.map((food) => (totalSodium += food.sodium / totalGrams));
    return totalSodium;
  };

  const caloriesPortion = (recipe) => {
    let quantityPortion = 0;
    let caloriesPortion = 0;
    recipe.map(
      (food) => (
        (quantityPortion = food.quantity / base),
        (caloriesPortion = food.kcal * quantityPortion)
      )
    );

    return caloriesPortion;
  };

  const calculateCalories = (caloriesPortion, recipe, totalGrams) => {
    let totalCalories = 0;
    recipe.map((food) => (totalCalories += caloriesPortion / totalGrams));

    return totalCalories;
  };

  const calculateJoules = (calories) => {
    return calories * 4.184;
  };

  const calculate = (e) => {
    e.preventDefault();
    if (recipe.length < 1) {
      alert('Adicione alimentos à receita');
    } else if (!portion) {
      alert('Informe a porção');
    } else {
      const totalGrams = calculateTotalGrams(recipe, portion);
      const calories_portion = caloriesPortion(recipe);
      const carbohydrate = calculateCarbohydrate(recipe, totalGrams);
      const protein = calculateProtein(recipe, totalGrams);
      const saturated = calculateSaturatedFat(recipe, totalGrams);
      const total_fats = calculateTotalFats(recipe, totalGrams);
      const cholesterol = calculateCholesterol(recipe, totalGrams);
      const fiber = calculateFiber(recipe, totalGrams);
      const sodium = calculateSodium(recipe, totalGrams);
      const calories = calculateCalories(calories_portion, recipe, totalGrams);
      const joules = calculateJoules(calories);

      setCalculatedRecipe({
        kcal: calories,
        kj: joules,
        protein: protein,
        cholesterol: cholesterol,
        carbohydrate: carbohydrate,
        fiber: fiber,
        sodium: sodium,
        total_fats: total_fats,
        saturated: saturated,
        trans: 0,
        portion: portion,
      });
      setInitialValue(1);
    }
  };
  return (
    <>
      <StyledForm onSubmit={calculate}>
        <Input
          id='portion'
          className='portion'
          type='number'
          value={portion}
          onChange={(e) => setPortion(e.target.value)}
        />
        <Button buttonName='Calcular' />
      </StyledForm>
    </>
  );
};

const StyledForm = styled.form`
  width: 30%;
  margin: 30px auto;
  text-align: left;
  display: flex;
  flex-direction: column;

  Button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  @media (max-width: 900px) {
    margin: 20px auto;
    width: 90%;

    Button {
      width: 100%;
    }
  }
`;

export default CalculateForm;
