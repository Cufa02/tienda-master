import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <header>
            <div>
                <ul  className="navLinks">
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/categoria/musica'}>Musica</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/categoria/fotografia'}>Fotografia</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/Carrito'} className="carrito"><CartWidget/></NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default NavBar;
