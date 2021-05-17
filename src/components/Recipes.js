import RecipeItem from './RecipeItem';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Recipes = () => {
  const [ name, getName ] = useState('doms');
  const [ recipes, getRecipes ] = useState([]);

  const handleDelete = (uuid) => {
    const updateRecipes = recipes.filter(recipe => recipe.uuid !== uuid);
    getRecipes(updateRecipes);
  }

  useEffect(() => {
    axios.get('../data/recipes.json').then(({ data }) => {
      getRecipes(data.recipes);
    });
  }, []);

  return (
    <ul className="food-preview-ul clearfix">
      { recipes.map(recipe => {
        return (
          <RecipeItem key={ recipe.uuid } recipe={ recipe } onDelete={ handleDelete } />
        )
      })}
    </ul>
  )
}

export default Recipes;