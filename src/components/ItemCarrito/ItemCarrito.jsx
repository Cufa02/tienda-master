import React from 'react'
import { useCarritoContexto } from '../../CartContext'

const ItemCarrito = ({producto}) => {
    const {restarProducto} = useCarritoContexto();
    return (
        <div className='itemCarrito'>
            <img src={producto.imagen}></img>
            <div>
                <p>Nombre: {producto.nombre}</p>
                <p>Precio: {producto.precio}</p>
                <p>Cantidad: {producto.cantidad}</p>
                <p>Total: ${producto.cantidad * producto.precio}</p>
                <button onClick={() => restarProducto(producto.id)}>BORRAR</button>
            </div>
        </div>
    )
}

export default ItemCarrito