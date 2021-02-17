import React, {useEffect, useState} from "react"
import './App.css';
import Recipes from "./Component/Recipe";
import Recipe from "./Component/Recipe"


function App() {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [ query, setQuery] = useState("chicken")
const APP_ID = "80142036";
const APP_KEY = "e702313de8ba4e9c4d7a6f545c0d277d";
const exampleReq= `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${ APP_KEY }`;

const getRecipes = async () => {
const response = await fetch(exampleReq)
const data = await response.json()
setRecipes(data.hits)
console.log(data.hits)
}

useEffect(()=> {
  getRecipes()
}, [query])

const updateSearch = (e) => {
setSearch(e.target.value)
}

const getSearch = (e) => {
  e.preventDefault()
  setQuery(search)
  setSearch("")
}
  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" onChange={updateSearch} value={search} type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes container">
      {recipes.map((recipe, index)=> (
        <Recipe key={index} title={recipe.recipe.label} calories={recipe.recipe.calories} img={recipe.recipe.image}  ingredients={recipe.recipe.ingredients}/>
      )
      )}
      </div>
     
    </div>
  );
}

export default App;


