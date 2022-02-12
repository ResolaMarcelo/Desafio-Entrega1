import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailContainer from './components/Detail/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetail from './components/Detail/ItemDetail';
import Categoria from './components/Categoria';

function App() {
  return (
    <div className="App">

      <>
        <BrowserRouter>
          <NavBar></NavBar>
         
          <Switch>

            {/* ruta home */}
            <Route exact path="/">
              <img className='img-ban' src="https://cache.tradeinn.com/images/brand-page/banner_3686_16.jpg" alt="" />
             
          </Route>

            {/* ruta detail */}
            <Route path="/item/:itemId">
              <ItemDetailContainer></ItemDetailContainer>
            </Route>

            {/* ruta categoria */}
            <Route path="/categoria/:categoriaId">
              <ItemListContainer></ItemListContainer>
             
             </Route>

          </Switch>
       </BrowserRouter>

       
      </>



    </div>
  );
}

export default App;
