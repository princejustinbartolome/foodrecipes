import '../App.css';
import uuid from 'react-uuid';
import Recipes from './Recipes';
import Form from './Form';

const Home = () => {
  return (
    <div className="food-preview-block">
      <div className="food-preview-header">
        <p>Food Recipes</p>
        <p><a data-toggle="modal" data-target="#myModal" href="#">Add Recipe / Save Recipe</a></p>
      </div>
      <Form />
    </div>
  )
}

export default Home;

