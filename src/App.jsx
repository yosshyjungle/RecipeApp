import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {
  const APP_ID = ''
  const APP_KEY = ''

  const [ search, setSearch ] = useState("");
  const [ query, setQuery ] = useState("banana");
  const [ recipes, setRecipes ] = useState([]);

  const getRecipes = async()=> {
    const response = await fetch(`https://api.edamam.com/search?q='${query}'&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    console.log(search)
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    // console.log("レンダリングしました。")
  }

  useEffect(()=> {
    // console.log(search);
    getRecipes();
  }, [query]);

  return (
    <div className="App">
      <form action="#" onSubmit={getSearch}>
        <input type="text" value={search} onChange={updateSearch} />
        <button type='submit'>検索</button>
      </form>
      <div>
        {recipes.map(recipe=>(
          <Recipe
           key={recipe.recipe.label}
           title={recipe.recipe.label}
           calories={recipe.recipe.calories}
           image={recipe.recipe.image}
           ingredients={recipe.recipe.ingredients}
           />
        ))}
      </div>
    </div>
  );
}

export default App;
