import React, { createContext, useEffect, useState } from 'react'


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const handleAgregar = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad }
        const carrito2 = [...carrito];
        const existente = carrito2.find((producto) => producto.id === itemAgregado.id);


        if (existente) {
            existente.cantidad += cantidad;
        } else {
            carrito2.push(itemAgregado)
        }
        setCarrito(carrito2)
    }

    const cantidadCarrito = () => {
        return carrito.reduce((acum, prod) => acum + prod.cantidad, 0)
    }

    const precioTotal = () => {
        return carrito.reduce((acum, prod) => acum + prod.price * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }
    
    return (
        <CartContext.Provider value={{ carrito, handleAgregar, cantidadCarrito, precioTotal, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )
}