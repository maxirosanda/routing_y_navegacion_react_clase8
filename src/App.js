import React from 'react';
import './App.css';
import Container from './components/container/container'
import Ejemplo1 from './components/ejemplo1/ejemplo1'
import Ejemplo2 from './components/ejemplo2/ejempl2'
import Ejemplo3 from './components/ejemplo3/ejemplo3'
//navegación
import {Switch, Route, BrowserRouter } from 'react-router-dom';



function App() {
  return <>
 
      <Container/>
        <BrowserRouter>
        <Ejemplo1/>
        <Switch>
        <Route exact path='/hola' component={Ejemplo2} />
        <Route path='/hola2' component={Ejemplo3}/>
        </Switch>        
        </BrowserRouter>
        
   </>
}

export default App
