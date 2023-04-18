import React, {useState} from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState(false);

  const cantidadComprada = (cantidad) => {
    setGoToCart(true);
  }

  return (
    <div className='containerDetalles'>
      <div className='detalles'>  
        <img className='detallesImg' src={data.imagen} alt='' />
        <div className='contenidoDetalles'>
          <h1>{data.nombre}</h1>
          <h2>{data.precio}</h2>
          {
            goToCart
            ? <Link to='/Carrito'>Finalizar Compra</Link>
            : <ItemCount valorInicial={1} stock={3} cantidadComprada={cantidadComprada}></ItemCount>
          }
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;