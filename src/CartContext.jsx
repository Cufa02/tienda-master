import React, {useState, useContext} from 'react';
const CartContext = React.createContext([])

export const useCarritoContexto = () => useContext(CartContext);

const CartProvider = ({children}) => { 
    const [carrito, setCarrito] = useState([]);

    console.log('carrito: ', carrito);

    const addProducto = (item, nuevaCantidad) => {
        const nuevoCarrito = carrito.filter(prod => prod.id !== item.id);
        nuevoCarrito.push({ ...item, cantidad: nuevaCantidad});
        setCarrito(nuevoCarrito)
    }

    const precioTotal = () => {
        return carrito.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
    }

    const totalProductos = () => carrito.reduce((acc, productoAhora) => acc + productoAhora.cantidad, 0);

    const clearCarrito = () => setCarrito([]);

    const EnElCarrito = (id) => carrito.find(producto => producto.id === id) ? true: false;

    const restarProducto = (id) => setCarrito(carrito.filter(producto => producto.id !==id));

  return (
    <CartContext.Provider value={{
        clearCarrito,
        EnElCarrito,
        restarProducto,
        addProducto,
        precioTotal,
        totalProductos,
        carrito
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider