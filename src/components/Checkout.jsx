import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { dataBase } from '../firebase/config';

function Checkout() {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const {register, handleSubmit} = useForm();

    const comprar = (datos) => {
      const pedido = {
        client: datos,
        products: carrito,
        total: precioTotal()
      }

      const pedidosRef = collection(dataBase, "pedidos")

      addDoc(pedidosRef, pedido)
    }
  

    return (
        <div>
            <h1 className='text-black font-bold text-xl text-center p-4'>Checkout</h1>

            <form onSubmit={handleSubmit(comprar)} className='flex flex-col items-center'>

                <label className="text-black">Name</label>
                <input className=" text-black m-4 rounded-md size-1/5 h-8 p-2 border-2 border-red-500" type="text" placeholder='enter your name' {...register("nombre")} />

                <label className="text-black">E-mail</label>
                <input className=" text-black m-4 rounded-md size-1/5 h-8 p-2 border-2 border-red-500" type="email" placeholder='enter your e-mail' {...register("email")} />

                <label className="text-black">Phone Number</label>
                <input className=" text-black m-4 rounded-md size-1/5 h-8 p-2 border-2 border-red-500" type="phone" placeholder='enter your phone number' {...register("telefono")} />

                <button className="bg-red-500 pl-4 pr-4 pb-2 pt-2 rounded-md font-bold mt-4 mb-8" type="submit">Purchase</button>
            </form>
        </div>
    )
}

export default Checkout