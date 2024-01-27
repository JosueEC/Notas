//! #########################################################
//! REACT-ROUTER-DOM ########################################
//! #########################################################

//! #########################################################
//! AGREGAR REACT-ROUTER-DOM AL INDEX #######################
//! #########################################################
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();

//! #########################################################
//! AGREGAR LAS RUTAS AL app.jsx ############################
//! #########################################################
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import ContainerCardsDiet from './components/ContainerCardsDiet/ContainerCardsDiet'

import Home from './pages/Home/Home'
import Details from './pages/Details/Details'
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import FormRecipe from './pages/FormRecipe/FormRecipe'

import * as route from './utilities/routePages'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path={route.pathHome}
          element={<Home />}
        />
        <Route 
          path={route.pathRecipes}
          element={<ContainerCardsDiet />}
        />
        <Route 
          path={route.pathDetails}
          element={<Details />}
        />
        <Route 
          path={route.pathFormRecipe}
          element={<FormRecipe />}
        />
        <Route 
          path={route.pathAbout}
          element={<About />}
        />
        <Route 
          path={route.pathContact}
          element={<Contact />}
        />
      </Routes>
    </div>
  );
}

// export default App;