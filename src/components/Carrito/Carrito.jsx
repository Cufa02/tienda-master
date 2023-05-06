import React from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContexto } from '../../CartContext';
import ItemCarrito from '../ItemCarrito/ItemCarrito';
import { addDoc, collection, getFirestore } from 'firebase/firestore';


const Carrito = () => {
  
  const {carrito, precioTotal} = useCarritoContexto();

  const compra ={
    comprador: {
      nombre: 'Roman',
      dni: '1415151',
      telefono: '110283484',
      mail: 'romaneloriginal@gmail.com',
      direccion: 'siempreviva143',
    },
    items: carrito.map(producto => ({id:producto})),
    totaldecompra: precioTotal(),
  }

  const terminarCompra = () =>{
    const getFS = getFirestore();
    const compraCollection = collection(getFS, 'compras');
    addDoc(compraCollection, compra)
    .then (({id}) => console.log(id))
  }
  
  if (carrito.length === 0){
      return(
        <React.Fragment>
          <div className='carroSinProductos'>
            <p>NO HAY PRODUCTOS EN EL CARRITO</p>
            <Link to='/'>Comprar productos</Link>
          </div>
        </React.Fragment>
      );
  }
  else{
    return (
      <React.Fragment>
        {
          carrito.map(producto => <ItemCarrito key={producto.id} producto={producto}></ItemCarrito>)
        }
        <div className='compraFinal'>
          <p> TOTAL: {precioTotal()}</p>
          <button onClick={terminarCompra} className='botonFinal'>Terminar Compra</button>
        </div>
      </React.Fragment>
    )
  }
}
export default Carrito