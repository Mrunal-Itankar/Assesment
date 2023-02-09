import React from "react";
import RecipeCard from "./recipeCard";
import { useState, useEffect } from "react";
import SearchBar from "./searchBar";

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false); //track of if app is featching data or not
  const [query, setQuery] = useState(""); //getting data from input
  const [recipes, setRecipes] = useState([]); //after featching recipes are stored in here

  //function to search for the recipes
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    setRecipes(data.meals);
    setIsLoading(false);
  };
  useEffect(() => {
    searchRecipes();
  },[1000]);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };
  return (
    <div className="container">
      <SearchBar
        handleSubmit={handleSubmit}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        isLoading={isLoading}
      />
      <div className="recipes row">
        {recipes
          ? recipes.map((recipe) => (
              <RecipeCard key={recipes.idMeal} recipe={recipe} />
            ))
          : "No Recipes"}
      </div>
    </div>
  );
};

export default Homepage;
