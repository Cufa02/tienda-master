import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/navBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Carrito from './components/Carrito/Carrito';

function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}></Route>
          <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}></Route>
          <Route path='/Carrito' element={<Carrito/>}></Route>
          <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
