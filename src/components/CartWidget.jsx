import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartWidget() {

    const {cantidadCarrito} = useContext(CartContext);

    return (
        <section className="sectionCarrito flex justify-center">
            <Link to="/carrito"><img className="carrito h-8 m-4 mr-0" src="/carrito.png" alt="Ícono del carrito de compras" /></Link>
            <span className="font-extrabold text-white p-4 pl-1 pt-5">{cantidadCarrito()}</span>
        </section>
    )   
}

export default CartWidget;