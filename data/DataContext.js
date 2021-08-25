import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

// @ts-ignore
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const API_URL = 'https://rocky-sea-52406.herokuapp.com/api/ingredients';
  const [foods, setFoods] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [calculatedRecipe, setCalculatedRecipe] = useState([]);
  const [portion, setPortion] = useState('');
  const [recipeCalculatedCalories, setRecipeCalculatedCalories] = useState(-1);
  const [recipeTotalCalories, setRecipeTotalCalories] = useState(-1);
  const [initialValue, setInitialValue] = useState(0);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      
        fetch(API_URL, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setFoods(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        );

    }
        getData();
    

  }, []);

  const addToList = async (name, quantity) => {

    try {
    const data = await fetch(`${API_URL}/name/${name}`).then((res) => res.json()).then((result) => {
      const newItem = {
          ...result,
          quantity: Number(quantity),
        }
        setRecipe([...recipe, newItem]);
    })
    

    
    
  } catch (error) {
    setError(error);
  }

    /* foods.forEach((food) => {
      if (food.name === name) {
        const newItem = {
          name: food.name,
          id: food.id,
          kcal: food.kcal,
          kj: food.kj,
          protein: food.protein,
          cholesterol: food.cholesterol,
          carbohydrate: food.carbohydrate,
          fiber: food.fiber,
          sodium: food.sodium,
          total_fats: food.total_fats,
          saturated: food.saturated,
          monounsaturated: food.monounsaturated,
          polyunsaturated: food.polyunsaturated,
          trans: food.trans,
          quantity: Number(quantity),
        };
      }
    }); */
  };

  const deleteItem = (id) => {
    setRecipe(recipe.filter((food) => food.id !== id));
    setRecipeCalculatedCalories(-1);
    setRecipeTotalCalories(-1);
    setInitialValue(0);
    recipe < 1 && setPortion('');
  };

  /**
   * Deletes the table and resets the calculated values
   */
  const deleteTable = () => {
    setRecipe([]);
    setRecipeCalculatedCalories(-1);
    setRecipeTotalCalories(-1);
    setPortion('');
    setInitialValue(0);
  };

  return (
    <DataContext.Provider
      value={{
        recipe,
        setRecipe,
        calculatedRecipe,
        setCalculatedRecipe,
        portion,
        setPortion,
        foods,
        recipeCalculatedCalories,
        setRecipeCalculatedCalories,
        recipeTotalCalories,
        setRecipeTotalCalories,
        addToList,
        deleteItem,
        deleteTable,
        initialValue,
        setInitialValue,
        error,
        isLoaded,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
