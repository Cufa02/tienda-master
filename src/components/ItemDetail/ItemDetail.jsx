import React, {useState} from 'react';
import { useCarritoContexto } from '../../CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

export const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProducto} = useCarritoContexto();

  const cantidadComprada = (cantidad) => {
    setGoToCart(true);
    addProducto(data, cantidad);
  }


  return (
    <div className='containerDetalles'>
      <div className='detalles'>  
        <img className='detallesImg' src={data.imagen} alt='' />
        <div>
          <h1>{data.nombre}</h1>
          <h2 className='detallesPrecio'>{data.precio}</h2>
          {
            goToCart
            ? <Link to='/Carrito' className='finalizarCompraDetalles'>Finalizar Compra</Link>
            : <ItemCount valorInicial={1} stock={3} cantidadComprada={cantidadComprada}></ItemCount>
          }
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;