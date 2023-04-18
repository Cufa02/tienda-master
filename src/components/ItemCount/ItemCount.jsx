import React, {useState} from 'react'

export const ItemCount = ({valorInicial, stock, cantidadComprada}) => {
  const [contador, setContador] = useState(valorInicial);
  const incrementar = () => {
    setContador(contador+1);
  }
  const decrementar = () => {
    setContador(contador-1);
  }

  return (
    <div className='contador'>
      <button disabled={contador<2} onClick={decrementar}>-</button>
      <span>{contador}</span>
      <button disabled={contador >= stock} onClick={incrementar}>+</button> 
      <div>
        <button disabled={stock==0} onClick={() => cantidadComprada(contador)}>Añadir al carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;
