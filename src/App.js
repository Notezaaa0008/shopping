import './App.css';
import React from 'react';
import { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CargoContainer from './container/cargoContainer/cargoContainer'
import NavbarContainer from './container/navbar/navbarContainer'

function App() {
  const [data, setData] = useState([
    { product : 'Apple', img : 'http://picsum.photos/250'},
    { product : 'Mango', img : 'http://picsum.photos/245' },
    { product : 'Orange', img : 'http://picsum.photos/250' },
    { product : 'Papaya', img : 'http://picsum.photos/245' },
    { product : 'Melon', img : 'http://picsum.photos/250' },
    { product : 'Grape', img : 'http://picsum.photos/245' }, 
])

  return (
    <div>
      <NavbarContainer />
      <CargoContainer data = {data}/>
      {/* <BrowserRouter>
        <Switch>

        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
