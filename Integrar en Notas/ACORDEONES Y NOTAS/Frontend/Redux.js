//! #########################################################
//! AGREGAR REDUX A UNA APLICACION FRONTEND #################
//! #########################################################
// Dentro de la carpeta redux creamos nuestros archivos: 
/*//?  actions.js */
/*//?  reducer.js */
/*//?  store.js */

//! #########################################################
//! IMPORTACIONES Y EXPORTACIONES EN REACT ##################
//! #########################################################
import { } from '' // Importacion
export {  // Exportacion

}
export default 'name del modulo'

//! #########################################################
//! actions.js ##############################################
//! #########################################################
// constantes
import { BASE_URL } from '../utilities/URL-paths'

// action types
export const GET_RECIPES = 'GET_RECIPES'

// funciones despacahadoras de las actions
const getRecipes = () => {
  const URL = `${BASE_URL}/recipes/addInformation`
  
  return function (dispatch) {
    fetch(URL)
      .then((response) => response.json())
      .then((results) => {
        console.log('fetch-all-info-recipes')
        dispatch({ type: GET_RECIPES, payload: results.data})
      })
  }
}

const postRecipe = (dataRecipe) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataRecipe)
  };

  return function (dispatch) {
    fetch(`${BASE_URL}/recipes`, options)
      .then((response) => response.json())
      .then((result) => {
        if(result.status === 'OK') console.log('fetch-post-recipe')
      })
  }
}

const filterRecipesDiet = (diet) => {
  return function (dispatch) {
    console.log(`filter-recipes-${diet}`)
    dispatch({ type: FILTER_RECIPE_DIET, payload: diet })
  }
}

//! #########################################################
//! reducer.js ##############################################
//! #########################################################
// import de las action types
import { FILTER_RECIPE_ALPHABETIC_ORDER, FILTER_RECIPE_DIET, GET_RECIPES, GET_RECIPES_QUERY } from "./actions";

// estado inicial
const initialState = {
  recipes : [],
  auxRecipes: [],
  results: {
    query: 'All Recipes',
    diets: 'All Diets'
  }
}

// funcion reducer
const rootReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        auxRecipes: action.payload,
        results: {
          query: 'All Recipes',
          diets: 'All Diets'
        }
      }
    case GET_RECIPES_QUERY:
      return {
        ...state,
        recipes: action.payload.data,
        auxRecipes: action.payload.data,
        results: {
          ...state,
          query: action.payload.query,
          diets: 'All Recipes'
        }
      }
    case FILTER_RECIPE_DIET:
      return {
        ...state,
        recipes: state.auxRecipes.filter(recipes => {
          return recipes.diets.includes(action.payload)
        }),
        results: {
          ...state.results,
          diets: action.payload
        }
      }
    case FILTER_RECIPE_ALPHABETIC_ORDER:
      return {
        ...state,
        recipes: state.recipes.sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
          } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1
          } else {
            return 0
          }
        })
      }
    default:
      return {
        ...state
      }
  }
}

// export default rootReducer

//! #########################################################
//! store.js ################################################
//! #########################################################
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

// export default store;