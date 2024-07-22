import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

function ItemDetail({item}) {

    const {carrito, handleAgregar} = useContext(CartContext);
    console.log(carrito)

    const [cantidad, setCantidad] = useState(1)

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad -1)
    }

    const handleSumar = () => {
        setCantidad(cantidad +1)
    }


    if (!item) {
        return <div><p>Loading...</p></div>;
    }

    return (
        <div className="flex">
            <img className="object-contain w-1/4" src={item.images?.[0]} alt={item.title} />
            <div className="flex flex-col m-6 justify-center">
                <h3 className="text-black p-4 font-bold">{item.title}</h3>
                <p className="text-black p-4">{item.description}</p>
                <p className="text-black pl-4">Price: ${item.price}</p>
                <ItemCount
                cantidad={cantidad}
                handleSumar={handleSumar}
                handleRestar={handleRestar}
                handleAgregar= {() => {handleAgregar(item, cantidad)}}
                />
            </div>
        </div>
    );
}

export default ItemDetail;