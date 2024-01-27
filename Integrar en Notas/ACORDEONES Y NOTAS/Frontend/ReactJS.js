//! #########################################################
//! MEDIA QUERYS GENERALES Y EXACTAS PARA RESPONSIVE DESIGN #
//! #########################################################
/* Desktop */
//? @media screen and (min-width: 1024px) {} 

/* Tablet */
//? @media screen and (min-width: 767px) and (max-width: 1023px) {}

/* Movil */
//? @media screen and (max-width: 767px) {}

/* MOVILES*/
/* @media only screen and (min-width: 280px) and (max-width: 540px) {} */

/* SURFACE DUO (CASO ESPECIAL)*/
/* @media only screen and (min-width: 540px) and (max-width: 768px) {} */

/* IPADS VERTICALES*/
/* @media only screen and (min-width:768px) and (max-width: 1024px) {} */

/* IPADS HORIZONTALES*/
/* @media only screen and (min-width:1024px) and (max-width:1280px) {} */

//! #########################################################
//! INSTALACION DE TAILWIND + REACT + VITE ##################
//! #########################################################
// Instalacion de las dependencias de tailwind
//? npm install -D tailwindcss postcss autoprefixer

// Inicar la configuracion de tailwind
//? npx tailwind init -p

// Generamos la configuracion basica de tailwind
/** @type {import('tailwindcss').Config} */
//? export default {
//?   content: ['./src/**/*.{jsx, js}'],
//?   darkMode: 'class',
//?   theme: {
//?     extend: {}
//?   },
//?   plugins: []
//? }

// Creamos la carpeta styles, dentro creamos el archivo tailwind.css
// y dentro pegamos la variables css de tailwind
//? @tailwind base;
//? @tailwind components;
//? @tailwind utilities;

//! #########################################################
//! CONFIGURACIONES PARA USEEFFECT ##########################
//! #########################################################
useEffect(() => {
  console.log("mount")
}, [])

useEffect(() => {
  console.log("data1 update")
}, [ data1 ])

useEffect( () => {
  console.log("any update")
} )

useEffect( () => () => console.log("data1 update or unmount"), [ data1 ] );
useEffect( () => () => console.log("unmount"), [] );

//! #########################################################
//! CREAR UNA PLANTILLA DE REACT ############################
//! #########################################################
// Ejecutamos el comando:
/*//?  npx create-react-app */
/*//?  npm create vite@latest */

//! Exponer de forma local tu aplicacion Vite:
// Agregar este comando a los scripts en el package.json
// y ejecutar 
//? npm run host
//? "host": "vite --host"

//! #########################################################
//! INSTALAR LINTERN STANDARD PARA VITE #####################
//! #########################################################
// Ejecutamos el comando:
//? npm install standard -D
// En el archivo .eslintrc.cjs reemplazamos el lintern recomend por el lintern standard
/*
extends: [
  './node_modules/standard/eslintrc.json',
  'plugin:react/recommended',
  'plugin:react/jsx-runtime',
  'plugin:react-hooks/recommended'
  ]
*/

//! #########################################################
//! DEPENDENCIAS ############################################
//! #########################################################

/*//?  npm install react react-dom react-router-dom react-redux redux redux-thunk */
// react
// react-dom
// react-redux
// react-router-dom
// react-scripts
// redux
// redux-thunk

//! #########################################################
//! DIVISION DE CARPETAS ####################################
//! #########################################################
// Dentro de src crearemos la siguiente division de carpetas
//?   mkdir 
//?   components(assets, component.jsx, module.css) 
//?   pages(assets, component.jsx, module.css)
//?   services(redux, i18n, api)
//?   utils (constants, functions, hooks)

// Dentro de components y de pages de subdivide una carpeta por cada componente y dentro de cada carpeta tenemos nuestro
//? -> assets
//? -> componente.jsx
//? -> module.css

//! #########################################################
//! CONSTANTES (consts.js) ##################################
//! #########################################################
const ROUTER_CONST = Object.freeze({
  PATH_HOME: '/',
  PATH_RECIPES: '/recipes',
  PATH_DETAILS: '/details/:recipeID'
})

const API_CONST = Object.freeze({
  DOMAIN: 'https://api.rawg.io/api'
})

// export {
//   ROUTER_CONST,
//   API_CONST    
// }

//! #########################################################
//! COMPONENTE BASICO #######################################
//! #########################################################
// imports de la libreria React y el modulo css
import React from 'react'
import styles from './Button.module.css'

export default function Button ({ textButton }) {
  return (
    <button className={styles.btn}>{ textButton }</button>
  )
}

//! #########################################################
//! COMPONENTE CON REDUX + FETCH ############################
//! #########################################################
// Imports de la libreria React, algunos hooks de react y hooks de redux
import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../../redux/actions'

// imports de los estilos y algunos componentes
import styles from ''
import CardDiet from ''
import SearchBar from ''

// estructura del componente
export default function ContainerCardsDiet () {
  const recipes = useSelector(state => state.recipes)
  const { query, diets } = useSelector(state => state.results)
  const dispatch = useDispatch()

  function handleClick (event) {

  }

  useEffect(() => {
    if (recipes.length === 0){
      dispatch(getRecipes())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className={styles.detalles} id='detalles'>
      <h1 className={styles.heading}>RECIPES</h1>
      <SearchBar />
      <label className={styles.labelResults}>{ `Results for ${query} - ${diets}` }</label>
      <button className={styles.buttonValue} onClick={handleClick} name='alphabeticOrder'>A - Z</button>
      <div className={styles.cajaContenedor}>
      {
        recipes? (
          recipes.map(({ id, title, image, diets, creditsText }) => {
          return <CardDiet 
            key={id}
            id={id}
            title={title}
            image={image}
            diets={diets}
            creditsText={creditsText}
          />
        })
        ): (
          <h2>Loading...</h2>
        )
      }
      </div>
    </section>
  )
}

//! #########################################################
//! COMPONENTE CARD + LINK ##################################
//! #########################################################
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CardDiet.module.css'

export default function CardDiet ({ id, title, image, diets }) {
  return (
    <Link to={`/details/${id}`}>
      <div className={styles.caja} key={ id }>
        <div className={styles.containerImage}>
          <img src={ image } alt='food' />
        </div>
        <h3>{ title }</h3>
        {
          diets && <p><i className='fa-solid fa-utensils'></i> Diets: { diets.join(', ') }</p>
        }
        {/* <Button textButton='More Details' /> */}
      </div>
    </Link>
  )
}

//! #########################################################
//! COMPONENTE FOOTER BASICO ################################
//! #########################################################
import React from 'react'
import styles from './Footer.module.css'

export default function Footer () {
  return (
    <div className={styles.footer}>
      <div className={styles.cajaContenedor}>
        <div className={styles.caja}>
          <h3>noticias e informacion</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis impedit quia nam esse, deleniti et dolorem libero qui exercitationem autem officia architecto minus. Aliquid exercitationem, quisquam placeat enim obcaecati vel.</p>
        </div>
        <div className={styles.caja}>
          <h3>buscanos en</h3>
          <a href='#inicio'>facebook</a>
          <a href='#inicio'>instagram</a>
          <a href='#inicio'>pinterest</a>
          <a href='#inicio'>twitter</a>
        </div>
        <div className={styles.caja}>
          <h3>mas informacion</h3>
          <div className={styles.info}>
            <i className='fas fa-phone' />
            <p>123-456-789<br/>789-444-521</p>
          </div>
          <div className={styles.info}>
            <i className='fas fa-envelope' />
            <p>josueev.cruz@gmail.com<br/>josuecruzvideos@gmail.com</p>
          </div>
        </div>
      </div>
      <h1 className={styles.creditos}>
        &copy, copyrigth @ 2023 Josue Evangelista Cruz
      </h1>
    </div>
  )
}

//! #########################################################
//! COMPONENTE NAVBAR + LINK ################################
//! #########################################################
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

import * as route from '../../utilities/routePages'

export default function Navbar () {
  return (
    <header>
      <Link to={route.pathHome} className={styles.logo}>
        <span>WHAT</span> To Cook
      </Link>
      
      <input type='checkbox' id='menu-bar' />
      <label htmlFor='menu-bar' className='fa fa-bars'></label>

      <nav className={styles.navbar}>
        <Link to={route.pathHome} className={styles.link} >home</Link>
        <Link to={route.pathRecipes} className={styles.link} >Recipes</Link>
        <Link to={route.pathFormRecipe} className={styles.link} >Create Recipe</Link>
        <Link to={route.pathAbout} className={styles.link} >About Us</Link>
        <Link to={route.pathContact} className={styles.link} >Contact</Link>
      </nav>
    </header>
  )
}

//! #########################################################
//! COMPONENTE SEARCHBAR + REDUX ############################
//! #########################################################
import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipesQuery, getRecipes, filterRecipesDiet, filterRecipeAlphabeticOrder } from '../../redux/actions'

import styles from './SearchBar.module.css'

export default function SearchBar () {
  const recipeQuery = useSelector(state => state.results.query)
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  function handleChange (event) {
    const textQuery = event.target.value;
    setQuery(textQuery);
  }

  function handleClick (event) {
    switch (event.target.name) {
      case 'btnSearch':
        dispatch(getRecipesQuery(query));
        break
      case 'btnAllRecipes':
        dispatch(getRecipes())
        break
      case 'btnAllRecipesQuery':
        dispatch(getRecipesQuery(recipeQuery))
        break
      case 'btnGlutenFree':
        dispatch(filterRecipesDiet('gluten free'))
        break
      case 'btnKetogenic':
        dispatch(filterRecipesDiet('ketogenic'))
        break
      case 'btnVegetarian':
        dispatch(filterRecipesDiet('vegetarian'))
        break
      case 'btnLactoOvoVegetarian':
        dispatch(filterRecipesDiet('lacto ovo vegetarian'))
        break
      case 'btnVegan':
        dispatch(filterRecipesDiet('vegan'))
        break
      case 'btnPescatarian':
        dispatch(filterRecipesDiet('pescatarian'))
        break
      case 'btnPaleo':
        dispatch(filterRecipesDiet('paleolithic'))
        break
      case 'btnPrimal':
        dispatch(filterRecipesDiet('primal'))
        break
      case 'btnLowFoodmap':
        dispatch(filterRecipesDiet('fodmap friendly'))
        break
      case 'btnWhole':
        dispatch(filterRecipesDiet('whole 30'))
        break
      default:
        dispatch(getRecipes())
        break
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchContainer}>
        <input type='search' className={styles.searchInput} placeholder='Search recipe name here' onChange={ handleChange } />
        <button onClick={ handleClick } name='btnSearch' className={styles.btn}>Search</button>
        <button className={styles.btn} onClick={handleClick} name='btnAllRecipes'>All Recipes</button>
      </div>
      <div className={styles.buttons}>
      {
        (recipeQuery === 'All Recipes')
          ? (<></>) 
          : (<button className={styles.buttonValue} onClick={handleClick} name='btnAllRecipesQuery'>{(recipeQuery === 'All Recipes')?'All Recipes':`All ${recipeQuery} Recipes`}</button>)
      }
        <button className={styles.buttonValue} onClick={handleClick} name='btnGlutenFree'>Gluten Free</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnKetogenic'>Ketogenic</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnVegetarian'>Vegetarian</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnLactoOvoVegetarian'>Lacto-ovo-vegetarian</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnVegan'>Vegan</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnPescatarian'>Pescatarian</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnPaleo'>Paleo</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnPrimal'>Primal</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnLowFoodmap'>Low food map</button>
        <button className={styles.buttonValue} onClick={handleClick} name='btnWhole'>Whole30</button>
      </div>
    </div>
  )
}

//! #########################################################
//! PAGE DETAILS + FETCH ####################################
//! #########################################################
import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../utilities/URL-paths';
import styles from './Details.module.css'

export default function Details () {
  const [recipe, setRecipe] = useState();
  const { recipeID } = useParams();

  useEffect(() => {
    fetch(`${BASE_URL}/recipes/${recipeID}`)
      .then((response) => response.json())
      .then((results) => {
        console.log('fetch-details-recipe')
        setRecipe(results.data)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className={styles.container}>
      {
        recipe
          ? (
            <div className={styles.box}>
              <div className={styles.images}>
                <div className={styles.imgHolder}>
                  <img src={recipe.image} alt='recipe'/>
                </div>
                <div className={styles.containerSummary}>
                  <span className={styles.heading}>Summary</span>
                  <p dangerouslySetInnerHTML={{__html: recipe.summary}} />
                </div>
              </div>
              <div className={styles.basicInfo}>
                <span className={styles.heading}>{recipe.title}</span>
              </div>
              <div className={styles.description}>
                <ul className={styles.features}>
                  <li><i className='fa-solid fa-circle-check'></i>Health Score: {recipe.healthScore}</li>
                  <li><i className='fa-solid fa-circle-check'></i>Diets: {recipe.diets.join(', ')}</li>
                  <li><i className='fa-solid fa-circle-check'></i>Preparation Minutes: {recipe.preparationMinutes}</li>
                  <li><i className='fa-solid fa-circle-check'></i>Servings: {recipe.servings}</li>
                  <li><i className='fa-solid fa-circle-check'></i>Credits: {recipe.creditsText}</li>
                </ul>
                <span className={styles.heading}>Instructions:</span>
                <p dangerouslySetInnerHTML={{__html: recipe.instructions}} />
              </div>
            </div>
          ) : (
            <h3>Loading...</h3>
          )
      }
    </section>
  )
}

//! #########################################################
//! COMPONENTE FORM + REDUX #################################
//! #########################################################
import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { postRecipe } from '../../redux/actions';

import styles from './FormRecipe.module.css';
import imgFormRecipe from './assets/logo-form.png';

function validate(state, errorsState) {
  const errors = { ...errorsState };

  const regexText = /[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/
  const regexImage = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/
  const regexNumber = /^[0-9]+$/
  const regexUser = /^[a-z0-9_-]{3,16}$/

  if(state.title === '') errors.title = 'Este campo es obligatorio'
  else {
    if(!regexText.test(state.title)) errors.title = 'No puede contener numeros ni caracteres especiales'
    else errors.title = ''
  }

  if(state.image === '') errors.image = 'Este campo es obligatorio'
  else {
    if(!regexImage.test(state.image)) errors.image = 'introduce una URL valida'
    else errors.image = ''
  }

  if(state.healthScore < 10) errors.healthScore = 'receta poco saludable'
  else {
    if(state.healthScore > 100) errors.healthScore = 'no puede ser mayor a 100'
    else errors.healthScore = ''
  }

  if(state.preparationMinutes < 1) errors.preparationMinutes = 'agrega un tiempo valido'
  else {
    if(!regexNumber.test(state.preparationMinutes)) errors.preparationMinutes = 'solo puede contener numeros'
    else errors.preparationMinutes = ''
  }

  if(state.servings < 1) errors.servings = 'debe agregar al menos 1 servicio'
  else {
    if(!regexNumber.test(state.servings)) errors.servings = 'solo se aceptan valores numericos'
    else errors.servings = ''
  }

  if(state.creditsText === '') errors.creditsText = 'este campo es obligatorio'
  else {
    if(!regexUser.test(state.creditsText)) errors.creditsText = 'Tu nombre de usuario solo puede contener letras minúsculas, números, guion bajo y guion medio y deben tener entre 3 y 16 caracteres'
    else errors.creditsText = ''
  }

  if(state.summary === '') errors.summary = 'este campo es obligatorio'
  else {
    errors.summary = ''
  }

  if(state.ingredients === '') errors.ingredients = 'debes agregar al menos un ingrediente'
  else {
    errors.ingredients = ''
  }

  if(state.instructions === '') errors.instructions = 'este campo es obligatorio'
  else {
    errors.instructions = ''
  }

  return errors;
}

export default function FormRecipe () {
  const dispatch = useDispatch();
  const [arrayDiets, setArrayDiets] = useState([]);
  
  const [form, setForm] = useState({
    title: '',
    image: '',
    summary: '',
    healthScore: 0,
    instructions: '',
    ingredients: '',
    preparationMinutes: 0,
    servings: 0,
    creditsText: '',
    likes: 0,
    diets: []
  });

  const [errors, setErrors] = useState({
    title: '',
    image: '',
    summary: '',
    healthScore: 0,
    instructions: '',
    ingredients: '',
    preparationMinutes: 0,
    servings: 0,
    creditsText: '',
    likes: 0,
    diets: []
  });

  function handleChange (event) {
    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, diets: arrayDiets, [property]:value });
    setErrors(validate({ ...form, [property]:value }, errors));
  }

  function handleCheck (event) {
    const { value, checked } = event.target;

    if (checked) {
      setArrayDiets(previo => [...previo, value])
    } else {
      setArrayDiets(previo => {
        return [...previo.filter(diet => diet!==value)]
      })
    }
  }

  function handleSubmit (event) {
    event.preventDefault();

    if(errors.title!==''||
      errors.image!==''||
      errors.summary!==''||
      errors.healthScore!==''||
      errors.instructions!==''||
      errors.ingredients!==''||
      errors.preparationMinutes!==''||
      errors.servings!==''||
      errors.creditsText!==''||
      errors.diets.length!==0) {
        alert('Hay campos incorrectos')
        console.log(errors);
      } else {
        dispatch(postRecipe(form))
        alert('Receta creada con exito');
        setForm({
          title: '',
          image: '',
          summary: '',
          healthScore: 0,
          instructions: '',
          ingredients: '',
          preparationMinutes: 0,
          servings: 0,
          creditsText: '',
          likes: 0,
          diets: []
        });
      }
  }

  return (
    <section className={styles.formRecipe}>
      <div className={styles.image}>
        <img src={imgFormRecipe} alt='Woman cooking'/>
      </div>
      <form onSubmit={handleSubmit}>
        <h1 className={styles.heading}>New Recipe</h1>
        <div className={styles.inputcaja}>
          <input type='text' name='title' id='title' onChange={handleChange} required/>
          <label htmlFor='title'>Title Recipe</label>
        </div>
          {
            (errors.title)? (
              <label className={styles.errorLabel}>{ errors.title }</label>
            ) : (
              <></>
            )
          }
        <div className={styles.inputcaja}>
          <input type='text' name='image' id='image' onChange={handleChange} required/>
          <label htmlFor='image'>image</label>
        </div>
        {
          (errors.image)? (
            <label className={styles.errorLabel}>{ errors.image }</label>
          ) : (
            <></>
          )
        }
        <div className={styles.inputcaja}>
          <input type='number' name='healthScore' id='healthScore' onChange={handleChange} required/>
          <label htmlFor='healthScore'>HealthScore</label>
        </div>
        {
          (errors.healthScore)? (
            <label className={styles.errorLabel}>{ errors.healthScore }</label>
          ) : (
            <></>
          )
        }
        <div className={styles.containerCheckbox}>
        <div className={styles.containerColumn}>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="glutenfree" value={1} onChange={handleCheck} />
            <label htmlFor="glutenfree" className={styles.labelCheck} >Gluten Free</label>
          </div>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="dairyfree" value={2} onChange={handleCheck} />
            <label htmlFor="dairyfree" className={styles.labelCheck} >Dairy Free</label>
          </div>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="lacto-ovo-vegetarian" value={3} onChange={handleCheck} />
            <label htmlFor="lacto-ovo-vegetarian" className={styles.labelCheck} >Lacto ovo vegetarian</label>
          </div>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="vegan" value={4} onChange={handleCheck} />
            <label htmlFor="vegan" className={styles.labelCheck} >Vegan</label>
          </div>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="vegetarian" value={5} onChange={handleCheck} />
            <label htmlFor="vegetarian" className={styles.labelCheck} >Vegetarian</label>
          </div>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="paleolithic" value={6} onChange={handleCheck} />
            <label htmlFor="paleolithic" className={styles.labelCheck} >Paleolithic</label>
          </div>
        </div>
        <div className={styles.containerColumn}>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="primal" value={7} onChange={handleCheck} />
            <label htmlFor="primal" className={styles.labelCheck} >Primal</label>
          </div>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="whole30" value={8} onChange={handleCheck} />
            <label htmlFor="whole30" className={styles.labelCheck} >Whole30</label>
          </div>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="pescatarian" value={9} onChange={handleCheck} />
            <label htmlFor="pescatarian" className={styles.labelCheck} >Pescatarian</label>
          </div>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="ketogenic" value={10} onChange={handleCheck} />
            <label htmlFor="ketogenic" className={styles.labelCheck} >Ketogenic</label>
          </div>
          <div className={styles.itemCheck}>
            <input type="checkbox" id="fodmapfriendly" value={11} onChange={handleCheck} />
            <label htmlFor="fodmapfriendly" className={styles.labelCheck} >Fodmap Friendly</label>
          </div>
        </div>
        </div>
          
          <div className={styles.inputcaja}>
            <input type='number' name='preparationMinutes' id='preparationMinutes' onChange={handleChange} required/>
            <label htmlFor='preparationMinutes'>Preparation Minutes</label>
          </div>
        {
          (errors.preparationMinutes)? (
            <label className={styles.errorLabel}>{ errors.preparationMinutes }</label>
          ) : (
            <></>
          )
        }
        <div className={styles.inputcaja}>
          <input type='number' name='servings' id='servings' onChange={handleChange} required/>
          <label htmlFor='servings'>Servings</label>
        </div>
        {
          (errors.servings)? (
            <label className={styles.errorLabel}>{ errors.servings }</label>
          ) : (
            <></>
          )
        }
        <div className={styles.inputcaja}>
          <input type='text' name='creditsText' id='creditsText' onChange={handleChange} required/>
          <label htmlFor='creditsText'>Credits Text</label>
        </div>
        {
          (errors.creditsText)? (
            <label className={styles.errorLabel}>{ errors.creditsText }</label>
          ) : (
            <></>
          )
        }
        <div className={styles.inputcaja}>
          <textarea required name='summary' onChange={handleChange} id='summary' cols={30} rows={10}></textarea>
          <label htmlFor='summary'>Summary</label>
        </div>
        {
          (errors.summary)? (
            <label className={styles.errorLabel}>{ errors.summary }</label>
          ) : (
            <></>
          )
        }
        <div className={styles.inputcaja}>
          <textarea required name='ingredients' onChange={handleChange} id='ingredients' cols={30} rows={10}></textarea>
          <label htmlFor='ingredients'>Ingredients</label>
        </div>
        {
          (errors.ingredients)? (
            <label className={styles.errorLabel}>{ errors.ingredients }</label>
          ) : (
            <></>
          )
        }
        <div className={styles.inputcaja}>
          <textarea required name='instructions' onChange={handleChange} id='instructions' cols={30} rows={10}></textarea>
          <label htmlFor='instructions'>Instructions</label>
        </div>
        {
          (errors.instructions)? (
            <label className={styles.errorLabel}>{ errors.instructions }</label>
          ) : (
            <></>
          )
        }
        <button type='submit' className={styles.btn}>Crete Recipe</button>
      </form>
    </section>
  )
}

//! #########################################################
//! COMPONENTE LANDING ######################################
//! #########################################################
import React from 'react'
import Button from '../../components/Button/Button'

import { Link } from 'react-router-dom'
import { pathRecipes } from '../../utilities/routePages'

import logoInicio from './assets/logo-inicio.png'
import styles from './Home.module.css'

export default function Home () {
  return (
    <section className={styles.inicio} id='inicio'>
      <div className={styles.content}>
        <h3>WHAT TO COOK</h3>
        <span>all your food. one place.</span>
        <p>Explore more than 5,000 recipes of all kinds, search for recipes by name or by type of diet, and even create your own recipes.</p>
        <Link to={pathRecipes}><Button textButton='Lets Start'/></Link>
      </div>
      <div className={styles.image}>
        <img src={logoInicio} alt='Fondo de Inicio'/>
      </div>
    </section>
  )
}
