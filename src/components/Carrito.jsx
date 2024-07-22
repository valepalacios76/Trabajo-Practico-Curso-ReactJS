import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

  return (
    <div className='text-black'>
        <h1 className='font-bold text-xl p-5'>Shop Cart</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id}>
                        <h3 className='font-bold pt-5 pl-5'>{prod.title}</h3>
                        <p className='pl-5'>Price: ${prod.price * prod.cantidad}</p>
                        <p className='pl-5'>Quantity: {prod.cantidad}</p>
                </div>
            ))
        }

        {carrito.length != 0 ?
        <>
            <h2 className='p-5 font-bold'>Total: ${precioTotal()}</h2>
            <button onClick={vaciarCarrito} className="bg-red-500 pl-4 pr-4 pb-2 pt-2 rounded-md font-bold m-5 text-white">Empty cart</button>
            <Link to="/checkout">Go to checkout</Link>
        </> :
        <h2 className='p-5'>The cart is empty</h2>
        }
       

    </div>
  )
}

export default Carrito