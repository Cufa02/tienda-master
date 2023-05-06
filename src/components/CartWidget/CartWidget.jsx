import React from "react";
import {FaShoppingCart} from "react-icons/fa"
import { useCarritoContexto } from "../../CartContext";

function CartWidget(){
const {totalProductos} = useCarritoContexto();
    return(
        <div>
        <FaShoppingCart/>
        <p>{totalProductos() || ''}</p>
        </div>
    );
}
export default CartWidget