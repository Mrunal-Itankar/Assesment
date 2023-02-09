import React from "react";

const RecipeCard = ({ recipe }) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;

  return (
      <div className="col-3 my-3">
        <div className="card">
          <img src={strMealThumb} alt={strMeal} className="card-image" />
          <div className="card-body text-center">
            <span className="category">{strCategory}</span>
            <h3>{strMeal}</h3>
            <a
              className="ingredient"
              href={"https://www.themealdb.com/meal/" + idMeal}
              target="_blank" rel="noopener noreferrer"
            >
              Ingredients
            </a>
          </div>
        </div>
      </div>
  );
};

export default RecipeCard;
