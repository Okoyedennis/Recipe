import React from "react";
import style from "./Recipe.module.css"

function Recipes({ title, calories, img, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1 >{title}</h1>
      <img className={style.image} src={img} alt={title} />

      <ul>
        {ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient.text}</li>;
        })}
      </ul>
<p className={style.calories}>Total Amount of Calories: <span>{Math.floor(calories)}</span></p>
      
    </div>
  );
}

export default Recipes;
